/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './Part.less';
import ParticlesBg from 'particles-bg'

class Part extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div>...</div>
        <ParticlesBg type="circle" bg={true} />
      </>
    );
  }
}

export default withStyles(s)(Part);
