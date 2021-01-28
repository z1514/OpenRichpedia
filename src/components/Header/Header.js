/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import useStyles from 'isomorphic-style-loader/useStyles';
import React from 'react';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';

export default function Header() {
  useStyles(s);
  return (
    <div className={s.root} >
      <div className={s.container} >
        <Navigation />
        <Link className={s.brand} to="/">
          <span className={s.brandTxt}>RichPedia</span>
        </Link>
      </div>
    </div>
  );
}
