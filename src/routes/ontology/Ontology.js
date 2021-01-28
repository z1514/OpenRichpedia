import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './Ontology.less';
import Spinner from '../../components/Spinner/Spinner';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import texts from './resource/textContents';

class Ontology extends React.Component {
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
  
    getRdfs = rdfs =>
      rdfs.map((item, index) => (
        <div key={index} className={s.rdfsContainer}>
          <span className={s.rdfsName}>{item.name}</span>
          <span className={s.rdfsUrl}>{item.url}</span>
        </div>
      ));
  
    getText = text =>
      text.map(item => (
        <div key={item.id} className={s.itemContainer}>
          <div className={s.itemTitle}>
            <span>{item.name}</span>
            <span className={s.itemStrong}> a </span>
            <span>{item.owl}</span>
          </div>
          {item.rdfs.length ? (
            <div className={s.itemContent}>{this.getRdfs(item.rdfs)}</div>
          ) : null}
        </div>
      ));
  
    getContent = () => (
      <div>
        <div className={s.root}>
          <h1 className={s.title}>Ontology</h1>
          {this.getText(texts)}
        </div>
      </div>
    );
  
    render() {
      return <div>{this.state.isLoading ? <Spinner /> : this.getContent()}</div>;
    }
  }
  
  export default withStyles(s)(Ontology);