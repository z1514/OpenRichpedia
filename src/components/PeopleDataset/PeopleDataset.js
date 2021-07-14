/* eslint-disable react/no-did-mount-set-state,camelcase */
import React from 'react';
import ReactDOM from 'react-dom';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Cascader } from 'antd';
import { IoMdHelpCircle } from 'react-icons/io';
import { TiArrowBackOutline } from 'react-icons/ti';
import Casd from '../Casd/Casd';
import s from './PeopleDataset.less';
import Spinner from '../Spinner/Spinner';
import PeoplePictureCard from '../PeoplePictureCard/PeoplePictureCard';
import peopleInfo from '../../../data_src/people/people';
import peopleInfo_s from '../../../data_src/people/people_s';
import peopleInfo_dict from '../../../data_src/people/people_dict';
import getPeopleNameById from '../../../data_operation/people/getPeopleNameById';
import getPicByPeopleId from '../../../data_operation/people/getPicByPeopleId';
import ReactSearchBox from 'react-search-box'
import getPeopleTextById from '../../../data_operation/people/getPeopleTextById';

class PeopleDataset extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      peopleID: '',
      peopleName: 'default',
      picList: [],
      picNum: 0,
      value:''
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
    });
  }

  onSelectChange = () => {
    window.stop();
    // const name = getPeopleNameById(value[0]);
    const name = getPeopleNameById(peopleInfo_dict[this.state.value]);
    let list = [];
    let number = 0;
    if (name !== 'default') {
      const { picList, num } = getPicByPeopleId(peopleInfo_dict[this.state.value]);
      list = picList;
      number = num;
    }
    this.setState({
      peopleID: peopleInfo_dict[this.state.value],
      peopleName: name,
      picList: list,
      picNum: number,
    });
  };

  getPromptText = () => (
    <div>
      <div className={s.promptText}>
        <a href="/dataset" className={s.goBack}>
          <TiArrowBackOutline />
        </a>
        <span>
          Select a famous person to get knowledge of Richpedia Dataset.
        </span>
      </div>
      <div className={s.noteText}>
        Note: Since the whole dataset is giant in scale and amount, what we show
        here is a filtered subset having all the key features of Richpedia
        Dataset. For the whole dataset, please go to{' '}
        <a href="/#download">Download section</a>.
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

  getSearchBox = () => {
    const data = peopleInfo_s;
    // console.log(sightInfo_dict["Museo_de_Escultura_al_Aire_Libre_de_Alcalá_de_Henares"]);
    return (
      <div style={{ width: '500px'}}>
        <div style={{display: "inline-block",width: '400px'}}>
      <ReactSearchBox
        placeholder="Please enter the person's name"
        data={data}
        onSelect={record => console.log(record)}
        onFocus={() => {
          console.log('This function is called when is focussed')
        }}
        onChange={value => {console.log(value);
        this.setState({
          value: value,
        });
      console.log("The value is "+value)}}
        fuseConfigs={{
          threshold: 0.05,
        }}
        value=""
        inputBoxHeight='31.6px'
      /></div><button type='button' className={s.antBtn} style={{margin:"0 5px 0 5px"}} onClick={this.onSelectChange}>Search</button></div>
    );

  };

  getSelecter = () => (
    // <Cascader
    //   options={peopleInfo}
    //   onChange={this.onSelectChange}
    //   placeholder="Please select"
    //   changeOnSelect
    //   size="middle"
    //   bordered="true"
    //   expandTrigger="hover"
    // />
    <Casd options={peopleInfo} onChange={this.onSelectChange} />
  );

  getPicNum = () => {
    const { picNum } = this.state;
    return picNum ? (
      <div style={{ marginTop:'10px' }}>
      <span style={{ marginLeft: '20px', fontSize: '18px', fontWeight: '600' }}>
        {picNum} pictures in total
      </span></div>
    ) : null;
  };

  getPeopleInfo = () => {
    const { peopleName, peopleID } = this.state;
    if (peopleName === 'default') {
      return null;
    }

    const { nationality, born_date } = getPeopleTextById(peopleID);
    return (
      <div className={s.infoTextBox}>
        <div style={{ minWidth: '40%' }}>
          <div>
            <span className={s.infoLabel}>People_id:</span>
            <span className={s.infoValue}>{peopleID}</span>
          </div>
          <div>
            <span className={s.infoLabel}>Name:</span>
            <span className={s.infoValue}>{peopleName}</span>
          </div>
        </div>
        <div style={{ minWidth: '40%' }}>
          <div>
            <span className={s.infoLabel}>Nationality:</span>
            <span className={s.infoValue}>{nationality}</span>
          </div>
          <div>
            <span className={s.infoLabel}>Date of birth:</span>
            <span className={s.infoValue}>{born_date}</span>
          </div>
        </div>
      </div>
    );
  };

  getContent = () => (
    <div className={s.root}>
      {this.getPromptText()}
      {this.getSearchBox()}
      {/* {this.getSelecter()} */}
      {this.getPicNum()}
      {this.getPeopleInfo()}
      {this.getPictures()}
    </div>
  );

  getPictures = () => {
    const { picList, picNum, peopleName } = this.state;
    if (peopleName === 'default') return <div className={s.emptyPicBox} />;
    if (picNum) return this.showPeoplePictures(picList);
    return null;
  };

  showPeoplePictures = pic_list => {
    const list = [];
    pic_list.forEach(item => {
      list.push(
        <PeoplePictureCard
          picId={item}
          peopleId={this.state.peopleID}
          peopleName={this.state.peopleName}
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

export default withStyles(s)(PeopleDataset);
