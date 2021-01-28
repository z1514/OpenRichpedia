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

  getTutorial = () => (
    <div className={s.textRoot}>
      <p>
        {'  '}First, open the{' '}
        <a href="/dataset" target="__blank">
          webpage
        </a>.
      </p>
      <div>
        <img src={step1} alt="step1" className={s.exampleImg} />
      </div>
      <p>
        {'  '}On this page, you can select city and/or sight to get knowledge of{' '}
        Richpedia Dataset.
      </p>
      <p>
        {'  '}For example, select <span className={s.strong}>Ankara</span> as{' '}
        city. Once you{"'"}ve done with choosing the city, you can immediately{' '}
        see images having relationship{' '}
        <span className={s.strong}>rp:imageof</span> with the city you just{' '}
        selected.
      </p>
      <div>
        <img src={step2} alt="step2" className={s.exampleImg} />
      </div>
      <p>
        {'  '}You might already find out that you can interact with the pictures{' '}
        listed below when you have your mouse cursor hovering on them. Click{' '}
        your mouse and a modal with relationship information would pop up on{' '}
        this page. However, since the large dataset has been filtered to a way{' '}
        more smaller scale, we only have a small amount of the relationship{' '}
        <span className={s.strong}>rp:contain</span> which usually shows up with{' '}
        images of the cities.
      </p>
      <p>
        {'  '}This is an example of relationship{' '}
        <span className={s.strong}>rp:contain</span> with a picture of city{' '}
        <span className={s.strong}>Tokyo</span> which image ID is{' '}
        <span className={s.strong}>rp:022510</span>.
      </p>
      <div>
        <img src={step3} alt="step3" className={s.exampleImg} />
      </div>
      <p>
        {'  '}If you would like to dive deeper into the dataset, you may try{' '}
        choosing a sight within the city you{"'"}ve chosen. In this case, we{' '}
        select <span className={s.strong}>Ankara Castle</span> as our sight.
      </p>
      <div>
        <img src={step4} alt="step4" className={s.exampleImg} />
      </div>
      <p>
        {'  '}Click on any picture of a sight, you can get information about{' '}
        other pictures having the relationship{' '}
        <span className={s.strong}>rp:sameAs</span> with this one. For example:
      </p>
      <div>
        <img src={step5} alt="step5" className={s.exampleImg} />
      </div>
    </div>
  );

  getContent = () => (
    <div>
      {/* <HeaderMenu /> */}
      <div className={s.root}>
        <h1 className={s.title}>Tutorial</h1>
        <h2 className={s.subTitle}>Online Query</h2>
        {this.getTutorial()}
      </div>
    </div>
  );

  render() {
    return <div>{this.state.isLoading ? <Spinner /> : this.getContent()}</div>;
  }
}

export default withStyles(s)(Tutorial);
