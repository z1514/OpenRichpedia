/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import Navigation from '../Navigation';
import Header from '../Header'
import Footer from '../Footer'

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Layout.css';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <Header />
        <div>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(Layout);
