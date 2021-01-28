import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import classnames from 'classnames';
import s from './HeaderMenu.less';

class HeaderMenu extends React.Component {
    constructor() {
        super();
        this.state = {
          currentPage: {
            '/': null,
            '/dataset': null,
            '/ontology': null,
            '/tutorial': null,
            '/resource': null,
            '/about': null,
          },
          headerStyle: null,
        };
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.setState({
          currentPage: {
            '/': this.getItemStyle('/'),
            '/dataset': this.getCompItemStyle('/dataset'),
            '/ontology': this.getItemStyle('/ontology'),
            '/tutorial': this.getItemStyle('/tutorial'),
            '/resource': this.getItemStyle('/resource'),
            '/about': this.getItemStyle('/about'),
          },
        });
      }
    
      getItemStyle = pathName =>
        window.location.pathname === pathName ? s.currentPage : null;
    
      getCompItemStyle = pathName =>
        window.location.pathname.startsWith(pathName) ? s.currentPage : null;
    
      handleScroll = () => {
        if (window.pageYOffset !== 0) {
          this.setState({
            headerStyle: s.shadowHeader,
          });
        } else {
          this.setState({
            headerStyle: null,
          });
        }
      };

      render()
      {
        return (
            <div className={classnames(s.root, this.state.headerStyle)}>
              <div className={s.headerBox}>
                <div className={classnames(s.item, this.state.currentPage['/'])}>
                  <a href="/#introduction">
                    <span>Introduction</span>
                  </a>
                </div>
                <div className={classnames(s.item, this.state.currentPage['/'])}>
                  <a href="/#download">
                    <span>Download</span>
                  </a>
                </div>
                <div
                  className={classnames(s.item, this.state.currentPage['/dataset'])}
                >
                  <a href="/dataset">
                    <span>Online Query</span>
                  </a>
                </div>
                <div
                  className={classnames(s.item, this.state.currentPage['/tutorial'])}
                >
                  <a href="/tutorial">
                    <span>Tutorial</span>
                  </a>
                </div>
                <div
                  className={classnames(s.item, this.state.currentPage['/ontology'])}
                >
                  <a href="/ontology">
                    <span>Ontology</span>
                  </a>
                </div>
                <div
                  className={classnames(s.item, this.state.currentPage['/resource'])}
                >
                  <a href="/resource">
                    <span>Resource</span>
                  </a>
                </div>
                <div
                  className={classnames(s.item, this.state.currentPage['/about'])}
                >
                  <a href="/about">
                    <span>About us</span>
                  </a>
                </div>
                <div
                  className={classnames(s.item, this.state.currentPage['/github'])}
                >
                  <a
                    href="https://github.com/Mr-shuo/Richpedia_Website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View On Github</span>
                  </a>
                </div>
              </div>
            </div>
          );
      }





}

export default withStyles(s)(HeaderMenu);