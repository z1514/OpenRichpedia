/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import Pagination from '@material-ui/lab/Pagination'
import s from './Resource.less';
import Spinner from '../../components/Spinner/Spinner';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));


class Resource extends React.Component {
  

  constructor() {
    super();
    this.state = {
      isLoading: true,
      currentPage: 1,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
    });
  }

  onPageChange = (event,newPage) => {
    this.setState({
      currentPage: newPage,
    });
  };

  getList = pageNo => {
    // const start = (pageNo - 1) * 500;
    // const end = pageNo < 400 ? pageNo * 500 : 213210;
    const start = (pageNo - 1) * 200;
    const end = pageNo < 1000 ? pageNo * 200 : 213210;
    const list = [];

    for (let i = start; i < end; i += 1) {
      list.push({
        name: `image${i}`,
        //url: `resource/${i}.jpg`,
        url: `images/${i}.jpg`,
      });
    }
    return list;
  };

  getDisplayList = list =>
    list.map(item => (
      <div key={item.name} className={s.itemContainer}>
        <span className={s.image}>{item.name}</span>
        <span>
          <a target="_blank" rel="noopener noreferrer" href={item.url}>
            {`http://richpedia.cn/${item.url}`}
          </a>
        </span>
      </div>
    ));

  getContent = () => (
    // const classes = useStyles();
    <div>
      {/* <HeaderMenu /> */}
      <div className={s.root}>
        <h1 className={s.title}>Resource</h1>
        <div className={s.listContainer}>
          <div className={s.tableHead}>
            <span className={s.image}>Image</span>
            <span>Image Url</span>
          </div>
          {this.getDisplayList(this.getList(this.state.currentPage))}
        </div>
        <div>
        <Pagination 
          siblingCount={2}
          boundaryCount={2}
          defaultPage={this.state.currentPage}
          count={1000}
          onChange={this.onPageChange}
          color="primary"
          variant="outlined"
          showFirstButton
          showLastButton
          size="medium"
        />
        </div>
      </div>
    </div>
  );

  render() {
    return <div>{this.state.isLoading ? <Spinner /> : this.getContent()}</div>;
  }
}

export default withStyles(s)(Resource);
