/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import LazyLoad from 'react-lazyload';
import s from './Foot.less';
import F from "rc-footer";

class Foot extends React.Component {
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

  render() {
    return (
      <div>
      <F
        maxColumnsPerRow={4}
        columns={[
          {
            title: 'Friendly Link',
            items: [
              {
                title: 'Wikidata',
                url: 'https://www.wikidata.org/wiki/Wikidata:Main_Page',
                openExternal: true,
              },
              {
                title: 'Wikipedia',
                url: 'https://www.wikipedia.org/',
                openExternal: true,
              },
              {
                title: 'Google',
                url: 'https://www.google.com/',
                description: '额外数据来源',
              },
              {
                title: 'Yahoo',
                url: 'https://search.yahoo.com/',
                description: '额外数据来源',
              },
              {
                title: 'Bing',
                url: 'https://cn.bing.com/',
                description: '额外数据来源',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                title: 'Qiushuo Zheng',
                url: 'mailto:qs_zheng@seu.edu.cn',
                openExternal: false,
              },
              {
                title: 'Jianxiong Zheng',
                url: 'mailto:zhengjianxiong0@google.com',
                openExternal: false,
              },
              {
                title: 'Guilin Qi',
                url: 'mailto:gqi@seu.edu.cn',
                openExternal: false,
              },
              {
                title: 'Meng Wang',
                url: 'mailto:meng.wang@seu.edu.cn',
                openExternal: false,
              },
            ],
          },
          {
            title: 'More Information',
            items: [
              {
                title: 'Github Page',
                url: 'https://github.com/Mr-shuo/Richpedia_Website',
                description: "项目地址",
                openExternal: true,
              },
              { title: 'Website',
                url: 'http://rich.wangmengsd.com/',
                description: "项目主页",
                openExternal: true,
              },
            ],
          },
          {
            title: 'License',
            items: [
              {
                title: 'Attribution 4.0 International ',
                url: 'http://creativecommons.org/licenses/by/4.0/',
                openExternal: true,
                description: "CC BY 4.0"
              },
            ],
          },
        ]}
        bottom= {<div>
        <a href="https://beian.miit.gov.cn">苏ICP备17011832号</a></div>}
      />
    </div>
    );
  }
}

export default withStyles(s)(Foot);
