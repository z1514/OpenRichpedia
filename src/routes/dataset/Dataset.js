import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { MdPhotoSizeSelectActual, MdAccountBox } from 'react-icons/md';
import s from './Dataset.less';
import Spinner from '../../components/Spinner/Spinner';

class Dataset extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
    });
  }

  getContent = () => (
    <div className={s.root}>
      <div className={s.title}>
        We provide two subjects for you to understand how Richpedia Dataset{' '}
        works and know about relationships among the data.
      </div>
      <div className={s.contentBox} style={{ background: '#e9f0f1' }}>
        <a href="/dataset/city_sight" className={s.link}>
          <div className={s.content} style={{ color: '#94b7bc' }}>
            <MdPhotoSizeSelectActual />
            <span style={{ marginLeft: '15px' }}>City & Sight</span>
          </div>
        </a>
      </div>
      <div className={s.contentBox} style={{ background: '#f4e3ea' }}>
        <a href="/dataset/people" className={s.link}>
          <div className={s.content} style={{ color: '#c692a9' }}>
            <MdAccountBox />
            <span style={{ marginLeft: '15px' }}>People</span>
          </div>
        </a>
      </div>
    </div>
  );

  render() {
    return <div>{this.state.isLoading ? <Spinner /> : this.getContent()}</div>;
  }
}

export default withStyles(s)(Dataset);