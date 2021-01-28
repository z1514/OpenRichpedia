/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Modal } from 'antd';
import LazyLoad from 'react-lazyload';
import s from './CityPictureCard.less';
import getContainByPicId from '../../../data_operation/city_sight/getContainByPicId';
import PicPlaceholder from '../../components/PicPlaceholder/PicPlaceholder';

class CityPictureCard extends React.Component {
  static propTypes = {
    picId: PropTypes.string.isRequired,
    cityName: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
  };

  constructor() {
    super();
    this.state = {
      visible: false,
    };
  }

  onCancel = () => {
    this.setState({
      visible: false,
    });
  };

  getContainPics = () => {
    const pics = getContainByPicId(this.props.picId);
    if (!pics.length)
      return (
        <div className={s.modalText}>
          This picture does not have relationships.
        </div>
      );
    const picList = [];
    pics.forEach(item => {
      //const picNum = item.split('rp:')[1];
      const picNum = item.split('r/')[1];
      picList.push(
        <span key={item} className={s.modalPicContainer}>
          <img
            src={`/images/${parseInt(picNum, 10)}.jpg`}
            alt={picNum}
            title={item}
          />
        </span>,
      );
    });
    const text =
      "The following pictures' relationship with the selected one is rp:contain";
    return (
      <div>
        <div className={s.modalText}>{text}</div>
        <div className={s.picRoot}>
          <div className={s.picBox}>{picList}</div>
        </div>
      </div>
    );
  };

  getModal = () => (
    <Modal
      footer={null}
      visible={this.state.visible}
      title={this.props.cityName}
      onCancel={this.onCancel}
    >
      {this.getContainPics()}
    </Modal>
  );

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  render() {
    // const picNum = this.props.picId.split('r/')[1];
    //const picNum = this.props.picId.split('rp:')[1];
    return (
      <span key={this.props.key}>
        {/* <span className={s.pictureContainer} onClick={this.showModal}> */}
        <span className={s.pictureContainer}>
          <LazyLoad
            height={200}
            offset={100}
            placeholder={<PicPlaceholder />}
            once
          >
            <img
              //src={`/images/${}${parseInt(picNum, 10)}.jpg`}
              src={`/images/${this.props.picId}.jpg`}
              alt={this.props.picId}
              title={this.props.picId}
            />
          </LazyLoad>
        </span>
        {/* {this.getModal()} */}
      </span>
    );
  }
}

export default withStyles(s)(CityPictureCard);
