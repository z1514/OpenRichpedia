/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './About.less';
import Spinner from '../../components/Spinner/Spinner';
import texts from './resource/textContents';


class About extends React.Component
{
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

  // getMap = () => {
  //   return(<div className={s.image}>
  //   <a href='https://clustrmaps.com/site/1bb5p'  title='Visit tracker'><img src='//clustrmaps.com/map_v2.png?cl=ffffff&w=500&t=tt&d=miROstjyDjjeXJ4tbQfTcOnnJ9yRKr-HFSMmsE4Ik7U&co=2d78ad&ct=ffffff'/></a>
  //   </div>);
  // };

  getContent = () => (
    <div>
      {/* {this.getNaviBar()} */}
      {this.getText()}
      {/* {this.getMap()} */}
    </div>
  );

  // getNaviBar = () => {
  //   const bkgStyle = {
  //     backgroundImage: 'url(background.jpg)',
  //     backgroundColor: '#483D8B',
  //     backgroundPosition: 'center',
  //     backgroundSize: 'contain',

  //   };
  //   return (
  //     <div className={s.naviBar} style={bkgStyle}>
  //       <div className={s.titleContainer}>
  //         <h1 className={s.title}>Richpedia</h1>
  //         <div className={s.subTitle}>
  //           A Comprehensive Multi-modal Knowledge Graph.
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  getParagraph = (title, anchor, text, index) => (
    <div className={s.paraContainer} key={index}>
      <h2 id={anchor} className={s.paraTitle}>
        {title}
      </h2>
      <div className={s.paraText}>{text}</div>
    </div>
  );

  getText = () => {
    const paraList = [];
    texts.map((item, index) =>
      paraList.push(
        this.getParagraph(item.title, item.anchor, item.text, index),
      ),
    );
    return <div className={s.textContainer}>{paraList}</div>;
  };

  render() {
    return <div>{this.state.isLoading ? <Spinner /> : this.getContent()}</div>;
  }
}

export default withStyles(s)(About);
