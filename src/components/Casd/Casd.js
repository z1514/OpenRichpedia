import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Cascader } from 'antd';
import se from 'antd/dist/antd.css';

class Casd extends React.Component {
  render() {
    return (
      <Cascader
        options={this.props.options}
        onChange={this.props.onChange}
        placeholder="Please select"
        changeOnSelect
        size="middle"
        style={{ width: '300px' }}
        bordered="true"
        expandTrigger="hover"
      />
    );
  }
}

export default withStyles(se)(Casd);
