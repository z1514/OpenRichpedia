import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Button } from 'antd';
import se from 'antd/dist/antd.css';

class But extends React.Component {
  render() {
    return (
      <Button
      type="primary"
      shape="round"
      style={{ margin: '0 5px 0 5px' }}
    >Search</Button>
    );
  }
}

export default withStyles(se)(But);
