import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import {Menu} from 'antd';
import s from 'antd/dist/antd.css'

class Nav extends React.Component{
    state = {
        current: 'Sparql',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
        this.props.handleChange(e.key);
        console.log("Nav内部处理完毕。")
      };
    
      render() {
        const { current } = this.state;
        return (
          <Menu onClick={this.handleClick} selectedKeys={this.props.current} mode="horizontal">
            <Menu.Item key="Sparql">
              Sparql
            </Menu.Item>
            <Menu.Item  key="entitylink">
              Entity Link
            </Menu.Item>
          </Menu>
        );
      }
}

export default withStyles(s)(Nav);