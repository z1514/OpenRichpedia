/* eslint-disable react/no-did-mount-set-state,camelcase */
import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Cascader } from 'antd';
import { IoMdHelpCircle } from 'react-icons/io';
import { TiArrowBackOutline } from 'react-icons/ti';
import se from 'antd/dist/antd.css';
import s from './CitySightDataset.css';
import Spinner from '../Spinner/Spinner';
import Casd from '../Casd/Casd';
import CityPictureCard from '../CityPictureCard/CityPictureCard';
import SightPictureCard from '../SightPictureCard/SightPictureCard';
import sightInfo from '../../../data_src/city_sight/city_sight';
import {
  getCityNameById,
  getSightNameById,
} from '../../../data_operation/city_sight/getDataNameById';
import getPicByCityId from '../../../data_operation/city_sight/getPicByCityId';
import getPicBySightId from '../../../data_operation/city_sight/getPicBySightId';
import getCityTextById from '../../../data_operation/city_sight/getCityTextById';

class CitySightDataset extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      // cityID: '',
      sightID: '',
      // cityName: 'default',
      sightName: 'default',
      picList: [],
      picNum: 0,
    };
  }

  //
  componentDidMount() {
    this.setState({
      isLoading: false,
    });
  }

  onSelectChange = value => {
    window.stop();
    // const city = getCityNameById(value[0]);
    // const sight = getSightNameById(value[1]);
    const sight = getCityNameById(value[0]);
    let list = [];
    let number = 0;
    if (sight === 'default') {
      list = [];
      number = 0;
    }
    // else if (sight === 'default') {
    //   const { picList, num } = getPicByCityId(value[0]);
    //   list = picList;
    //   number = num;
    // }
    else {
      const { picList, num } = getPicByCityId(value[0]);
      list = picList;
      number = num;
    }
    this.setState({
      sightID: value[0],
      sightName: sight,
      picList: list,
      picNum: number,
    });
  };

  //
  getPromptText = () => (
    <div>
      <div className={s.promptText}>
        <a href="/dataset" className={s.goBack}>
          <TiArrowBackOutline />
        </a>
        <span>Select a sight to get knowledge of Richpedia Dataset.</span>
      </div>
      <div className={s.noteText}>
        Note: Since the whole dataset is giant in scale and amount, what we show
        here is a filtered subset having all the key features of Richpedia
        Dataset. For the whole dataset, please go to{' '}
        <a href="/download">Download section</a>.
      </div>
      <div
        className={s.noteText}
        style={{
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IoMdHelpCircle style={{ color: '#77628c', marginRight: '5px' }} />
        <span>
          Have trouble using it? Read <a href="/tutorial">tutorial</a> here.
        </span>
      </div>
    </div>
  );

  //
  getSelecter = () => (
    // <Cascader
    //   options={sightInfo}
    //   onChange={this.onSelectChange}
    //   placeholder="Please select"
    //   changeOnSelect
    //   size="middle"
    //   bordered="true"
    //   expandTrigger="hover"
    // />
    <Casd options={sightInfo} onChange={this.onSelectChange} />
  );

  getPicNum = () => {
    const { picNum } = this.state;
    return picNum ? (
      <span style={{ marginLeft: '20px', fontSize: '18px', fontWeight: '600' }}>
        {picNum} pictures in total
      </span>
    ) : null;
  };

  getCitySightInfo = () => {
    // const { cityName, sightName, cityID, sightID } = this.state;
    const { sightName, sightID } = this.state;
    if (sightName === 'default') {
      return null;
    }

    // city only
    const { geo, ab, wikilink, dblink } = getCityTextById(sightID);

    return (
      <div className={s.infoTextBox}>
        <div style={{ minWidth: '60%', lineHeight: '25px' }}>
          <div>
            <span className={s.infoLabel}>Sight_id:</span>
            <span className={s.infoValue}>{sightID}</span>
          </div>
          <div>
            <span className={s.infoLabel}>Name:</span>
            <span className={s.infoValue}>{sightName}</span>
            <div>
              <span className={s.infoLabel}>Wikidata_link:</span>
              <span className={s.infoValue}>
                <a href={wikilink}>{wikilink}</a>
              </span>
            </div>
          </div>
          <div>
            <span className={s.infoLabel}>Dbpedia_link:</span>
            <span className={s.infoValue}>
              <a href={dblink}>{dblink}</a>
            </span>
          </div>
          <div style={{ textJustify: 'auto' }}>
            <span className={s.infoLabel}>Abstract:</span>
            <span className={s.infoValue}>{ab}</span>
          </div>
          <div>
            <span className={s.infoLabel}>Geology Position:</span>
            <span className={s.infoValue}>{geo}</span>
          </div>
        </div>
      </div>
    );

    // console.log(sightID);
    // sightID.replace("http://rich.wangmengsd.com/resource/","rps:");

    // sight
    // return (
    //   <div className={s.infoTextBox}>
    //     <div>
    //       <span className={s.infoLabel}>Sight_id:</span>
    //       <span className={s.infoValue}>{sightID}</span>
    //     </div>
    //     <div>
    //       <span className={s.infoLabel}>Name:</span>
    //       <span className={s.infoValue}>{sightName}</span>
    //     </div>
    //     <div>
    //       <span className={s.infoLabel}>Location:</span>
    //       <span className={s.infoValue}>{cityName}</span>
    //     </div>
    //   </div>
    // );
  };

  getContent = () => (
    <div className={s.root}>
      {this.getPromptText()}
      {this.getSelecter()}
      {this.getPicNum()}
      {this.getCitySightInfo()}
      {this.getPictures()}
    </div>
  );

  getPictures = () => {
    const { picList, picNum, sightName } = this.state;
    if (sightName === 'default')
      // return <div className={s.emptyPicBox}>Please select city or sight.</div>;
      return <div className={s.emptyPicBox} />;

    // city only
    if (picNum) return this.showCityPictures(picList);

    // if (picNum) return this.showSightPictures(picList);
    return <div className={s.emptyPicBox} />;
  };

  showCityPictures = pic_list => {
    const list = [];
    pic_list.forEach(item => {
      list.push(
        <CityPictureCard
          picId={item}
          cityName={this.state.sightName}
          key={item}
        />,
      );
    });
    return (
      <div className={s.picRoot}>
        <div className={s.picBox}>{list}</div>
      </div>
    );
  };

  showSightPictures = pic_list => {
    const list = [];
    pic_list.forEach(item => {
      list.push(
        <SightPictureCard
          picId={item}
          sightId={this.state.sightID}
          sightName={this.state.sightName}
          key={item}
        />,
      );
    });
    return (
      <div className={s.picRoot}>
        <div className={s.picBox}>{list}</div>
      </div>
    );
  };

  render() {
    return <div>{this.state.isLoading ? <Spinner /> : this.getContent()}</div>;
  }
}

export default withStyles(s)(CitySightDataset);
