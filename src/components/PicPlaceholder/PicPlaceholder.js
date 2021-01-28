import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './PicPlaceholder.less';

class PicPlaceholder extends React.Component {
  render() {
    return (
      <div className={s.spinner}>
        <div className={s.rect1} />
        <div className={s.rect2} />
        <div className={s.rect3} />
        <div className={s.rect4} />
        <div className={s.rect5} />
      </div>
    );
  }
}

export default withStyles(s)(PicPlaceholder);
