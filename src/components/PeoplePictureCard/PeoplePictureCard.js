/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Modal } from 'antd';
import LazyLoad from 'react-lazyload';
import s from './PeoplePictureCard.less';
import getSameAsByPeopleId from '../../../data_operation/people/getSameAsByPeopleId';
import PicPlaceholder from '../../components/PicPlaceholder/PicPlaceholder';

class PeoplePictureCard extends React.Component {
  static propTypes = {
    peopleId: PropTypes.string.isRequired,
    peopleName: PropTypes.string.isRequired,
    picId: PropTypes.string.isRequired,
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

  getSameAsPics = () => {
    const pics = getSameAsByPeopleId(this.props.peopleId);
    if (!pics.length)
      return (
        <div className={s.modalText}>
          This picture does not have relationships.
        </div>
      );
    const picList = [];
    pics.forEach(item => {
      const picNum = item.split('rp:')[1];
      picList.push(
        <span key={item} className={s.modalPicContainer}>
          <img
            src={`/image_people/${parseInt(picNum, 10)}.jpg`}
            alt={picNum}
            title={item}
          />
        </span>,
      );
    });
    const text =
      "The following pictures' relationship with the selected one is rp:sameAs";
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
      title={this.props.peopleName}
      onCancel={this.onCancel}
    >
      {this.getSameAsPics()}
    </Modal>
  );

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  render() {
    const picNum = this.props.picId.split('rp:')[1];
    const peopleName = this.props.peopleName;
    console.log(peopleName);
    return (
      <span key={this.props.key}>
        <span className={s.pictureContainer} onClick={this.showModal}>
          <LazyLoad
            height={200}
            offset={100}
            placeholder={<PicPlaceholder />}
            once
          >
            <img
              src={`/image_people/${parseInt(picNum, 10)}.jpg`}
              alt={picNum}
              title={this.props.picId}
            />
          </LazyLoad>
        </span>
        {this.getModal()}
      </span>
    );
  }
}

export default withStyles(s)(PeoplePictureCard);
