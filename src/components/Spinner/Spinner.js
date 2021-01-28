/* eslint-disable prettier/prettier,react/no-did-mount-set-state */
import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './Spinner.less';

class Spinner extends React.Component {
  render() {
    return (
      <div className={s.spinner}>
        <div className={s.cube1} />
        <div className={s.cube2} />
        <div className={s.cube3} />
        <div className={s.cube4} />
        <div className={s.cube5} />
        <div className={s.cube6} />
        <div className={s.cube7} />
        <div className={s.cube8} />
        <div className={s.cube9} />
      </div>
    );
  }
}

export default withStyles(s)(Spinner);
