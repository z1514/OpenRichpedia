import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './Download.less';
import Spinner from '../../components/Spinner/Spinner';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';



class Download extends React.Component {
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

  getInfo = () => (
      <div className={s.paraText}>
      <p>
        You can download images of city&sight, images of people and triples of relationship from here
        through BaiduYun. Because the image entity folder is relatively
        large, we split it into serveral parts. The extraction code is 0000.
      </p>
      <div>
        <ul>
          <li>
            <span
              style={{ display: 'block', fontSize: '23px', fontWeight: '700' }}
            >
              Image
            </span>
            <span style={{ display: 'block' }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://pan.baidu.com/s/1lt-SmWUX5GAmLRNWggDkXQ"
              >
                City&Sight
              </a>
            </span>
            <span style={{ display: 'block' }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://pan.baidu.com/s/1tUnmlA7Fb90pPZwhxy-jow"
              >
                People
              </a>
            </span>
            {/* <span style={{ display: 'block' }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/open?id=15aoYUdCB5_bhagz3TlbBhkA3MLGBJv9P"
              >
                Image2
              </a>
            </span>
            <span style={{ display: 'block' }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/open?id=1TiATEauW91_ptJz4qCk0Kn1p_6gojXTf"
              >
                Image3
              </a>
            </span> */}
          </li>
          <li>
            <span
              style={{ display: 'block', fontSize: '23px', fontWeight: '700' }}
            >
              NT Files
            </span>
            <span style={{ display: 'block' }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://pan.baidu.com/s/1sndHDroLfx__f0mUjH1RGQ"
              >
                Triples
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );

  getContent = () => (
    <div>
      {/* <HeaderMenu /> */}
      <div className={s.root}>
        <h1 className={s.title}>Download</h1>
        {this.getInfo()}
      </div>
    </div>
  );

  render() {
    return <div>{this.state.isLoading ? <Spinner /> : this.getContent()}</div>;
  }
}

export default withStyles(s)(Download);
