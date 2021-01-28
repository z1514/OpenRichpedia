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
import cx from 'classnames';
import s from './Navigation.css';
import Link from '../Link';

export default function Navigation() {
  useStyles(s);
  return (
    <div className={s.root} role="navigation">
      <a className={s.link} href="/download">
        Download
      </a>
      <a className={s.link} href="/sparql">
        SPARQL
      </a>
      <a className={s.link} href="/dataset">
        Query
      </a>
      <a className={s.link} href="/tutorial">
        Tutorial
      </a>
      <a className={s.link} href="/ontology">
        Ontology
      </a>
      <a className={s.link} href="/resource">
        Resource
      </a>
      <a className={s.link} href="/about">
        About
      </a>
      <span className={s.spacer}> | </span>
      <a className={cx(s.link, s.highlight)} href="https://github.com/Mr-shuo/Richpedia_Website" target="_blank">
        Github
      </a>
    </div>
  );
}
