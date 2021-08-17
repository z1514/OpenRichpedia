import React, { useEffect, useState, Component } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
// import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Alert, AlertTitle } from '@material-ui/lab';
import axios from 'axios';
// import { func } from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import Uploader from '../../components/Uploader/Uploader';
import Dataset from '../dataset/Dataset';
// import Visualization from '../visualization/Visualization';
import Relation from '.../../components/Relation/Relation'
import Nav from '../../components/Nav/Nav';
// import ECharts from '../../components/ECharts/ECharts'
import s from './Sparql.less';
import Spinner from '../../components/Spinner/Spinner';
// import * as d3 from "d3";

// const EchartsReact = typeof document !== 'undefined' && require('echarts-for-react').default;
class Sparql extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      current: 'Home',
      sparqlS: s.navLinkActive,
      linkS: s.navLink,
      queryS: s.navLink,
      visualS: s.navLink,
      relationS: s.navLink,
      isQuerying: false,
      num: 100,
      message: 'SELECT ?s ?p ?o { ?s <rpo:sameAs> ?o . }',
      isClear: false,
      isHidden: true,
      result: [],
      isResult: false,
      isOverflow: false,
      header: [],
      item: [],
    };
    this.handleQuery = this.handleQuery.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleExtend = this.handleExtend.bind(this);

    // this.handleResult = this.handleResult.bind(this);
  }

  // 挂载?
  componentDidMount() {
    this.setState({
      isLoading: false,
    });
  }

  handleClick = e => {
    console.log('click', e);
    this.setState({
      current: e
    });
    if (e === 'Sparql') {
      this.setState({
        sparqlS: s.navLinkActive,
        linkS: s.navLink,
        queryS: s.navLink,
        visualS: s.navLink,
        relationS:s.navLink
      });
    }
    else if (e === 'Link') {
      this.setState({
        sparqlS: s.navLink,
        linkS: s.navLinkActive,
        queryS: s.navLink,
        visualS: s.navLink,
        relationS:s.navLink
      });
    }
    else if(e ==='Query'){
      this.setState({
        sparqlS: s.navLink,
        linkS: s.navLink,
        queryS: s.navLinkActive,
        visualS: s.navLink,
        relationS:s.navLink
      });
    }
    else if(e === 'Visual'){
      this.setState({
        sparqlS: s.navLink,
        linkS: s.navLink,
        queryS: s.navLink,
        visualS: s.navLinkActive,
        relationS:s.navLink
      });
    }
    else{
      this.setState({
        sparqlS: s.navLink,
        linkS: s.navLink,
        queryS: s.navLink,
        visualS: s.navLink,
        relationS:s.navLinkActive
      });
    }
  };

  handleChange = value => {
    this.setState({
      current: value,
    });
    console.log('Sparql内部处理完毕');
  };

  handleQuery() {
    if (this.state.isClear) {
      console.log('You enter query!');
      this.setState(prevState => ({
        isHidden: false,
      }));
      return;
    }
    this.setState(prevState => ({
      isHidden: true,
      isQuerying: true,
      num: 100,
    }));
    axios
      .get('/Richpedia', {
        params: {
          query: this.state.message,
        },
      })
      .then(response => {
        console.log(response);
        this.handleResult(response);
        const h = [];
        for (let i = 0; i < response.data.names.length; i++) {
          let head;
          if (response.data.values[0][i] == null) {
          } else if (i == 0)
            head = (
              <TableCell key={response.data.names[i].toString()}>
                {response.data.names[i]}
              </TableCell>
            );
          else
            head = (
              <TableCell key={response.data.names[i].toString()} align="left">
                {response.data.names[i]}
              </TableCell>
            );
          h.push(head);
          if (i >= this.state.num) break;
        }
        this.setState(prevState => ({
          header: h,
        }));
        const items = [];
        for (let i = 0; i < response.data.values.length; i++) {
          const item = [];
          for (let j = 0; j < response.data.values[i].length; j++) {
            let row;
            let arr;
            let str;
            if (response.data.values[i][j] == null) {
            } else {
              if (j == 0) {
                if (response.data.values[i][j] != null)
                  arr = response.data.values[i][j].split(
                    '<http://rich.wangmengsd.com/resource/',
                  );
                if (arr != null && arr.length > 1) {
                  str = arr[1];
                  str = str.split('>')[0];
                  console.log(str);
                  if (str.search('jpg') > -1) {
                    row = (
                      <TableCell align="left">
                        <a href={`/img/${str}`} target="_blank">
                          <img
                            style={{ margin: '10px', padding: '10px' }}
                            width="150px"
                            src={`/img/${str}`}
                            alt={str}
                            title={response.data.values[i][j]}
                          />
                        </a>
                      </TableCell>
                    );
                  } else {
                    row = (
                      <TableCell component="th" scope="row">
                        {response.data.values[i][j]}
                      </TableCell>
                    );
                  }
                } else {
                  row = (
                    <TableCell component="th" scope="row">
                      {response.data.values[i][j]}
                    </TableCell>
                  );
                }
              } else {
                if (response.data.values[i][j] != null)
                  arr = response.data.values[i][j].split(
                    '<http://rich.wangmengsd.com/resource/',
                  );
                if (arr != null && arr.length > 1) {
                  str = arr[1];
                  str = str.split('>')[0];
                  console.log(str);
                  if (str.search('jpg') > -1) {
                    row = (
                      <TableCell align="left">
                        <a href={`/img/${str}`} target="_blank">
                          <img
                            style={{ margin: '10px', padding: '10px' }}
                            width="150px"
                            src={`/img/${str}`}
                            alt={str}
                            title={response.data.values[i][j]}
                          />
                        </a>
                      </TableCell>
                    );
                  } else {
                    row = (
                      <TableCell align="left">
                        {response.data.values[i][j]}
                      </TableCell>
                    );
                  }
                } else {
                  row = (
                    <TableCell align="left">
                      {response.data.values[i][j]}
                    </TableCell>
                  );
                }
              }

              item.push(row);
            }
          }
          const r = (
            <TableRow key={response.data.values[i].toString()}>{item}</TableRow>
          );
          items.push(r);
          if (i >= this.state.num) break;
        }
        this.setState(prevState => ({
          item: items,
          isQuerying: false,
        }));
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        this.setState(prevState => ({
          isQuerying: false,
        }));
        console.log(this.state.result);
        if (this.state.num >= this.state.result.values.length)
          this.setState(prevState => ({
            isOverflow: true,
          }));
      });
  }

  handleResult(res) {
    this.setState(prevState => ({
      result: res.data,
      isResult: true,
    }));
  }

  handleTest = () => {
    axios
      .get('/api/visualLink', {
        params: {
          photo: 'test',
        },
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleClear() {
    {
      this.setState(prevState => ({
        isResult: false,
        num: 200,
        isOverflow: false,
      }));
    }
    if (this.state.isClear) {
      console.log('It has been cleared!');
    } else {
      this.setState(prevState => ({
        message: '',
        isClear: true,
        isResult: false,
      }));
    }
  }

  handleMessage(event) {
    const mes = event.target.value;
    let truth;
    if (mes.length == 0) {
      truth = true;
    } else {
      truth = false;
    }
    this.setState(prevState => ({
      message: mes,
      isClear: truth,
    }));
    console.log(this.state.message);
  }

  handleHomeClick = e=>{
    this.setState({
      current:e
    });
  }


  handleExtend() {
    console.log(this.state.result);
    for (let i = this.state.num; i < this.state.result.values.length; i++) {
      const item = [];
      for (let j = 0; j < this.state.result.values[i].length; j++) {
        let row;
        let arr;
        let str;
        if (j == 0) {
          if (this.state.result.values[i][j] != null)
            arr = this.state.result.values[i][j].split(
              '<http://rich.wangmengsd.com/resource/',
            );
          if (arr != null && arr.length > 1) {
            str = arr[1];
            str = str.split('>')[0];
            console.log(str);
            row = (
              <TableCell align="left">
                <a href={`/img/${str}`} target="_blank">
                  <img
                    style={{ margin: '10px', padding: '10px' }}
                    width="150px"
                    src={`/img/${str}`}
                    alt={str}
                    title={this.state.result.values[i][j]}
                  />
                </a>
              </TableCell>
            );
          } else {
            row = (
              <TableCell component="th" scope="row">
                {response.data.values[i][j]}
              </TableCell>
            );
          }
        } else {
          if (this.state.result.values[i][j] != null)
            arr = this.state.result.values[i][j].split(
              '<http://rich.wangmengsd.com/resource/',
            );
          if (arr != null && arr.length > 1) {
            str = arr[1];
            str = str.split('>')[0];
            console.log(str);
            row = (
              <TableCell align="left">
                <a href={`/img/${str}`} target="_blank">
                  <img
                    style={{ margin: '10px', padding: '10px' }}
                    width="150px"
                    src={`/img/${str}`}
                    alt={str}
                    title={this.state.result.values[i][j]}
                  />
                </a>
              </TableCell>
            );
          } else {
            row = (
              <TableCell align="left">
                {this.state.result.values[i][j]}
              </TableCell>
            );
          }
        }

        item.push(row);
      }
      const r = (
        <TableRow key={this.state.result.values[i].toString()}>{item}</TableRow>
      );
      this.state.item.push(r);
      if (i >= this.state.num + 100) break;
    }
    if (this.state.num + 100 >= this.state.result.values.length)
      this.setState(prevState => ({
        isOverflow: true,
      }));
    else {
      this.setState(
        prevState => ({
          num: this.state.num + 100,
        }),
        () => {
          console.log(this.state.num);
        },
      );
    }
  }

  getInfo = () => {
    const e1 =
      'SELECT ?s ?p ?o { ?s <rpo:imageof> <http://rich.wangmengsd.com/resource/rps/282> . }';
    const e2 =
      'SELECT ?s ?p ?o { ?s <rpo:sameAs> <http://rich.wangmengsd.com/resource/9.jpg> . }';
    return (
      <div className={s.paraText}>
        <p>
          You can use SPARQL language here to query n-triples.
          <div>Examples:</div>
          <div>{e1}</div>
          <div>{e2}</div>
        </p>
      </div>
    );
  };

  getButton = () => {
    // const classes = useStyles();
    return (
      <div style={{ margin: '10px 0px' }}>
        <Button
          variant="outlined"
          size="large"
          style={{ margin: '0 5px 0 0' }}
          onClick={this.handleQuery}
        >
          Execute
        </Button>
        <Button
          variant="outlined"
          size="large"
          style={{ margin: '0 0 0 5px' }}
          onClick={this.handleClear}
        >
          Clear
        </Button>
        {/* <Button variant="outlined" size="large" style={{ margin: '0 0 0 5px', }} onClick={this.handleTest}>Test</Button> */}
      </div>
    );
  };

  getTextField = () => (
    <div>
      <TextField
        id="standard-multiline-static"
        label="SPARQL"
        fullWidth
        multiline
        rows={15}
        value={this.state.message}
        variant="outlined"
        ref="myInput"
        InputProps={{
          style: {
            color: '#7700b3',
            fontWeight: '100',
            fontSize: '14px',
            fontFamily: 'sans-serif',
          },
        }}
        onChange={this.handleMessage}
        onBlur={this.handleMessage}
      />
    </div>
  );

  getAlert = () => {
    if (this.state.isHidden) return;
    return (
      <div>
        <Alert severity="info">Please enter your command</Alert>
      </div>
    );
  };

  getResult = () => {
    if (this.state.isResult === false) return;

    return (
      <div>
        <Alert style={{ margin: '10px' }} severity="success">
          <AlertTitle>Querying Success</AlertTitle>There are{' '}
          {this.state.result.values.length} n-triples in our querying results!
        </Alert>
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>{this.state.header}</TableRow>
            </TableHead>
            <TableBody>{this.state.item}</TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };

  getMore = () => {
    if (this.state.isResult === false || this.state.isOverflow === true) return;
    return (
      <div>
        <Button color="primary" onClick={this.handleExtend}>
          show more...
        </Button>
      </div>
    );
  };

  getWait = () => {
    if (this.state.isQuerying === false) return;
    return (
      <div>
        <LinearProgress />
      </div>
    );
  };

  getNavigator = () => {
    // return (
    //   <Nav handleChange={this.handleChange} current={this.state.current} />
    // );
    return (
      <ul className={s.nav}>
        <li>
          <a className={this.state.sparqlS} onClick={() => this.handleClick("Sparql")} href='#sparql'>Sparql
          </a>
        </li>
        <li>
          <a className={this.state.linkS} onClick={() => this.handleClick("Link")} href='#link'>Link
          </a>
        </li>
        <li>
          <a className={this.state.queryS} onClick={() => this.handleClick("Query")} href='#query'>Query
          </a>
        </li>
        {/* <li>
          <a className={this.state.visualS} onClick={() => this.handleClick("Visual")} href='#visual'>Visualization
          </a>
        </li> */}
        <li>
          <a className={this.state.relationS} onClick={() => this.handleClick("Relation")} href='#relation'>Relation
          </a>
        </li>
      </ul>
    );
  };

  getUploader = () => {
    return <Uploader />;
  };

  getDataset = () => {
    return <Dataset />
  }

  // getVisualization = () => {
  //   if(typeof document === 'undefined')
  //   {
  //     ;
  //   }
  //   else{
  //   return <Visualization/>}
  // }

  getRelation = () => {
    return <Relation />
  }

  
  getHome = () => {
    return (<div className={s.cardsRow}>
      <div className={s.myCard} >
        <div className={s.ppCard}>
          <div className={s.CardHeader}>
            <a href="/tutorial" className={s.textMuted}>
              <h5 className={s.cardTitle} align="center"> Tutorial </h5></a>
            <h6 className={s.cardSubTitile} align="center">
            Tutorial will show how to use Richpedia.
            </h6>
            <center><img className={s.cardsImg} width="80%" src="tutorial.png" /></center>

          </div>
        </div>
      </div>
      <div className={s.myCard} >
        <div className={s.ppCard}>
          <div className={s.CardHeader}>
            <a href="/ontology" className={s.textMuted}>
              <h5 className={s.cardTitle} align="center"> Ontology </h5></a>
            <h6 className={s.cardSubTitile} align="center">
            The ontology of richpedia.
            </h6>
            <center><img className={s.cardsImg} width="80%" src="ontology.png" /></center>

          </div>
        </div>
      </div>
      <div className={s.myCard} >
        <div className={s.ppCard}>
          <div className={s.CardHeader}>
            <a href="#sparql" className={s.textMuted} onClick={() => this.handleClick("Sparql")}>
              <h5 className={s.cardTitle} align="center"> SPARQL </h5></a>
            <h6 className={s.cardSubTitile} align="center">
            You can use SPARQL language here to query n-triples.
            </h6>
            <center><img className={s.cardsImg} width="80%" src="sparql.png" /></center>

          </div>
        </div>
      </div>
      <div className={s.myCard}>
        <div className={s.ppCard}>
          <div className={s.CardHeader}>
            <a href="#link" className={s.textMuted} onClick={() => this.handleClick("Link")}>
              <h5 className={s.cardTitle} align="center">Visual Entity Linking </h5></a>
            <h6 className={s.cardSubTitile} align="center">
              You can experience more fine-grained visual entity linking than simple object detection.
                </h6>
            <center><img className={s.cardsImg} width="80%" src="link.png" /></center>
          </div>
        </div>
      </div>
      <div className={s.myCard}>
        <div className={s.ppCard}>
          <div className={s.CardHeader}>
            <a href="#query" className={s.textMuted} onClick={() => this.handleClick("Query")}>
              <h5 className={s.cardTitle} align="center">Query</h5></a>
            <h6 className={s.cardSubTitile} align="center">
            We provide two topics for you to understand how Richpedia Dataset works and know about relationships among the data.
                </h6>
            <center><img className={s.cardsImg} width="80%" src="query.png" /> </center>
          </div>
        </div>
        </div>
        {/* <div className={s.myCard}>
        <div className={s.ppCard}>
          <div className={s.CardHeader}>
            <a href="#visual" className={s.textMuted} onClick={() => this.handleClick("Visual")}>
              <h5 className={s.cardTitle} align="center">Visualization</h5></a>
            <h6 className={s.cardSubTitile} align="center">
              We provide visualization tools to show our knowledge graph.
                </h6>
            <center><img className={s.cardsImg} width="80%" src="visual.png" /></center>
          </div>
        </div>
      </div> */}
      <div className={s.myCard}>
        <div className={s.ppCard}>
          <div className={s.CardHeader}>
            <a href="#visual" className={s.textMuted} onClick={() => this.handleClick("Relation")}>
              <h5 className={s.cardTitle} align="center">Relation Extraction</h5></a>
            <h6 className={s.cardSubTitile} align="center">
            You can experience scene graph generation by uploading images.
                </h6>
            <center><img className={s.cardsImg} width="80%" src="relation.png" /></center>
          </div>
        </div>
      </div>
    </div>);
  }

  getMap = () =>{
    return(<div id ="chart-container" className={s.image}>
      <a href="https://clustrmaps.com/site/1bb5p"  title="Visit tracker"><img src="//www.clustrmaps.com/map_v2.png?d=miROstjyDjjeXJ4tbQfTcOnnJ9yRKr-HFSMmsE4Ik7U&cl=ffffff" /></a>
       {/* <ECharts/> */}
       </div>);
  }
  getContent = () => {
    const { current } = this.state;
    if (current === 'Home') {
      return (<div className={s.root}>
        <h1 className={s.title}>Home</h1>
        <div>{this.getHome()}</div>
        <div>{this.getMap()}</div>
      </div>);
    }
    else if (current === 'Sparql') {
      return (
        <div>
          <div>{this.getNavigator()}</div>
          <div className={s.root}>
            <h1 className={s.title}>SPARQL</h1>
            {this.getInfo()}
            {this.getTextField()}
            {this.getButton()}
            {this.getAlert()}
            {this.getWait()}
            {this.getResult()}
            {this.getMore()}
          </div>
        </div>
      );
    }
    else if (current === 'Link') {
      return (
        <div>
          <div>{this.getNavigator()}</div>
          <div className={s.root}>
            <h1 className={s.title}>Multi-Modal Entity Linking</h1>
            {this.getUploader()}
          </div>
        </div>
      );
    }
    else if (current === 'Query'){
      return (<div>
        <div>{this.getNavigator()}</div>
        <div className={s.root}>
          {this.getDataset()}
        </div>
      </div>);
    }
    else if (current === 'Visual'){
      return(<div>
        <div>{this.getNavigator()}</div>
        <div className={s.root}>
          {/* {this.getVisualization()} */}
        </div>
      </div>);
    }
    else{
      return(<div>
        <div>{this.getNavigator()}</div>
        <div className={s.root}>
        <h1 className={s.title}>Relation Extraction</h1>
          {this.getRelation()}
        </div>
      </div>);
    }
  };

  render() {
    return <div>{this.state.isLoading ? <Spinner /> : this.getContent()}</div>;
  }
}

export default withStyles(s)(Sparql);
