import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './Tutorial.less';
import Spinner from '../../components/Spinner/Spinner';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import step1 from './resource/step1.jpg';
import step2 from './resource/step2.jpg';
import step3 from './resource/step3.jpg';
import step4 from './resource/step4.jpg';
import step5 from './resource/step5.jpg';
import step6 from './resource/step6.jpg';
import step7 from './resource/step7.jpg';
import step8 from './resource/step8.jpg';
import step9 from './resource/step9.jpg';



class Tutorial extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
    });
  }

  getQuery = () => (
    <div className={s.textRoot}>
      <p>
        {'  '}First, open the{' '}
        <a href="/" target="__blank">
          webpage
        </a>.
      </p>
      <div>
        <img src={step1} alt="step1" className={s.exampleImg} />
      </div>
      <p>
      {'  '}Then click the Query card, open the Query page. On this page, you can select city and/or sight to get knowledge of{' '}
        Richpedia Dataset.
      </p>
      <div>
        <img src={step2} alt="step2" className={s.exampleImg} />
      </div>
      <p>
        {'  '}For example, select <span className={s.strong}>Coroico</span> as{' '}
        city. Once you{"'"}ve done with choosing the city, you can immediately{' '}
        see related images and text knowledge like wikidata_id, abstract and geology position.{' '}
      </p>
      <div>
        <img src={step3} alt="step3" className={s.exampleImg} />
      </div>
      <p>
        {'  '}The same operation is also applied to the people page.
      </p>
    </div>
  );

  getSparql = () =>(<div className={s.textRoot}>
  <p>
    {'  '}Open the{' '}
    <a href="/" target="__blank">
      webpage
    </a>.
  </p>
  <div>
    <img src={step1} alt="step1" className={s.exampleImg} />
  </div>
  <p>
  {'  '}Then click the SPARQL card, open the SPARQL page. On this page, you can find a sparql search box and sparql examples.
  </p>
  <div>
    <img src={step4} alt="step4" className={s.exampleImg} />
  </div>
  <p>
    {'  '}You can enter the examples in this page, like {'\n'}
    <span className={s.strong}>{"'SELECT ?s ?p ?o { ?s <rpo:imageof> <http://rich.wangmengsd.com/resource/rps/282>}"}</span> 
    and click excute. Then the page will return the sparql query results. For this example, it will return images of resource 282. 
  </p>
  <div>
    <img src={step5} alt="step5" className={s.exampleImg} />
  </div>
</div>)

getRelation= ()=>(<div className={s.textRoot}>
  <p>
    {'  '}Open the{' '}
    <a href="/" target="__blank">
      webpage
    </a>.
  </p>
  <div>
    <img src={step1} alt="step1" className={s.exampleImg} />
  </div>
  <p>
  {'  '}Then open the relation extraction page. On this page, You can click upload button to upload your image or click the 
  example button to use our examples images to do relation extraction. Then you can click relation extraction button to see the results.
  </p>
  <div>
    <img src={step8} alt="step8" className={s.exampleImg} />
  </div>
  <p>
    {'  '}For example, you can click example button and select one of the examples. Then you can click relation extraction to see entity 
    detection and relation extraction results. 
  </p>
  <div>
    <img src={step9} alt="step9" className={s.exampleImg} />
  </div>
</div>)

getLink = () => (<div className={s.textRoot}>
  <p>
    {'  '}Open the{' '}
    <a href="/" target="__blank">
      webpage
    </a>.
  </p>
  <div>
    <img src={step1} alt="step1" className={s.exampleImg} />
  </div>
  <p>
  {'  '}Then open the visual entity linking page. On this page, you can find a text box and an image button. You can click upload button to upload your image or click the 
  example button to use our examples images and captions to do entity linking. 
  </p>
  <div>
    <img src={step6} alt="step6" className={s.exampleImg} />
  </div>
  <p>
    {'  '}For example, you can click example button and select one of the examples. Then you can click obect detection and 
  entity linking button to see object detection and entity linking results.
  </p>
  <div>
    <img src={step7} alt="step7" className={s.exampleImg} />
  </div>
</div>)

  getContent = () => (
    <div>
      {/* <HeaderMenu /> */}
      <div className={s.root}>
        <h1 className={s.title}>Tutorial</h1>
        <h2 className={s.subTitle}>Query</h2>
        {this.getQuery()}
        <h2 className={s.subTitle}>SPARQL</h2>
        {this.getSparql()}
        <h2 className={s.subTitle}>Visual Entity Linking</h2>
        {this.getLink()}
        <h2 className={s.subTitle}>Relation Extraction</h2>
        {this.getRelation()}
      </div>
    </div>
  );

  render() {
    return <div>{this.state.isLoading ? <Spinner /> : this.getContent()}</div>;
  }
}

export default withStyles(s)(Tutorial);
