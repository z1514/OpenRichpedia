import React from 'react';

import withStyles from 'isomorphic-style-loader/withStyles';
import { MdPhotoSizeSelectActual, MdAccountBox } from 'react-icons/md';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Uploader from '../../components/Uploader/Uploader';

import s from './Visualization.less';
import Spinner from '../../components/Spinner/Spinner';
// import * as echarts from 'echarts';
if(typeof document !== 'undefined')
var echarts = require('echarts');
class Visualization extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const ROOT_PATH =
      'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';//这是啥?
    const chartDom = document.getElementById('main');
    const myChart = echarts.init(chartDom);
    let option;
    myChart.showLoading();
    myChart.hideLoading();

    const Path_json = 'richpedia4.json';
    console.log(Path_json);
    fetch(Path_json, {
      method: 'GET',
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(graph) {
        graph.nodes.forEach(function(node) {
          node.symbolSize = 10;
        });
        (option = {
          title: {
            text: 'Richpedia',
            top: 'top',
            textStyle: {
              color: '#77628c',
            },
          },
          legend: [
            {
              // selectedMode: 'single',
              data: graph.categories.map(function(a) {
                return a.name;
              }),
            },
          ],

          tooltip: {
            formatter: '{c}',
          },
          animationDuration: 1500,
          animationEasingUpdate: 'quinticInOut',
          series: [
            {
              name: 'Richpedia',
              type: 'graph',
              layout: 'force',
              data: graph.nodes,
              links: graph.links,
              categories: graph.categories,
              roam: true,
              force: {
                repulsion: 100,
              },
              label: {
                show: false,
                position: 'right',
                formatter: '{b}',
              },
              edgeLabel: {
                show: false,
                formatter: '{c}',
              },
              scaleLimit: {
                min: 0.4,
                max: 3,
              },
              lineStyle: {
                color: 'source',
                curveness: 0.3,
              },
              emphasis: {
                focus: 'adjacency',
                lineStyle: {
                  width: 10,
                },
                edgeLabel: {
                  show: true,
                },
              },
            },
          ],
        }),
          myChart.setOption(option);
        // var myChart = echarts.init(document.getElementById('main'));
        //  myChart.setOption({
        //         title: {
        //             text: 'ECharts 入门示例'
        //         },
        //         tooltip: {},
        //         legend: {
        //             data:['销量']
        //         },
        //         xAxis: {
        //             data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        //         },
        //         yAxis: {},
        //         series: [{
        //             name: '销量',
        //             type: 'bar',
        //             data: [5, 20, 36, 10, 10, 20]
        //         }]
        //     });
      });
    this.setState({
      isLoading: false,
    });
  }

//   getContent = () => (
//     <div className={s.root}>
//       <Card className={s.card}>
//         <div className={s.cc}>
//           <div className={s.title}>
//             We provide two subjects for you to understand how Richpedia Dataset{' '}
//             works and know about relationships among the data.
//           </div>

//           <div className={s.contentBox} style={{ background: '#e9f0f1' }}>
//             <a href="/dataset/city_sight" className={s.link}>
//               <div className={s.content} style={{ color: '#94b7bc' }}>
//                 <MdPhotoSizeSelectActual />
//                 <span style={{ marginLeft: '15px' }}>City & Sight</span>
//               </div>
//             </a>
//           </div>
//           <div className={s.contentBox} style={{ background: '#f4e3ea' }}>
//             <a href="/dataset/people" className={s.link}>
//               <div className={s.content} style={{ color: '#c692a9' }}>
//                 <MdAccountBox />
//                 <span style={{ marginLeft: '15px' }}>People</span>
//               </div>
//             </a>
//           </div>
//         </div>
//       </Card>
//     </div>
//   );

  render() {
    if(typeof document === 'undefined')
    {

    }
    else{
    return (
      <div className={s.root}>
        {/* <div>{this.state.isLoading ? <Spinner /> : this.getContent()}</div> */}
        <div className={s.echart}>
          <Card className={s.chartcard}>
            <div id="main" className={s.echartcontent} />
          </Card>
        </div>
      </div>
    );}
  }
}

export default withStyles(s)(Visualization);
