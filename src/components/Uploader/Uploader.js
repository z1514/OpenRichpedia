import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { MdPhotoSizeSelectActual, MdAccountBox } from 'react-icons/md';
import {
  Table,
  Tag,
  Space,
  Button,
  Card,
  Col,
  Row,
  Upload,
  message,
  Image,
  Modal,
  Input,
} from 'antd';
import axios from 'axios';
import $ from 'jquery';

import {
  InboxOutlined,
  CloudUploadOutlined,
  TagFilled,
  SearchOutlined,
} from '@ant-design/icons';
import s from 'antd/dist/antd.css';
// import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Record } from 'web-dev-server/build/lib/Applications/Registers/Record';

import { TrafficRounded } from '@material-ui/icons';
import se from './Uploader.css';

const { TextArea } = Input;
const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: false,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

class Uploader extends React.Component {
  state = {
    src:
      'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
    resultSrc: '',
    resultEntity: [],
    resultPosition: [],
    showDetect: false,
    showLink: false,
    showTest: false,
    value: '',
    filename: '',
    fall:
      'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
    uploading: false,
    showPreview: false,
  };

  sendExample = name => {
    this.setState({
      showTest: false,
      uploading: true,
      filename: name,
    });
    const obj = this;
    const formData = new FormData();
    formData.append('fileName', name);
    const data = formData;
    $.ajax({
      url: '/api/Example/',
      data,
      type: 'Post',
      dataType: 'json',
      cache: false, // 上传文件无需缓存
      processData: false, // 用于对data参数进行序列化处理 这里必须false
      contentType: false, // 必须
      success(result) {
        console.log('测试已经连接');
        console.log(obj);
        obj.setState({
          src: result.img,
          resultSrc: result.img_wbb,
          value: 'font',
          fall:
            'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
          uploading: false,
        });
        message.success('测试成功');
        console.log(obj.state.filename);
      },
      error(error) {
        console.log('测试出现错误');
        console.log(error);
        message.error('测试出错');
        obj.setState({
          uploading: false,
        });
      },
    });
  };

  getTest() {
    return (
      <Modal
        title="Examples"
        visible={this.state.showTest}
        onOk={this.handleTest}
        onCancel={this.handleTest}
        width={1000}
      >
        <div className="site-card-wrapper">
          <Row gutter={24}>
            <Col span={6}>
              <Card title="Ex 1" bordered>
                <Image src="data/imgs/10.jpg" fallback={this.state.fall} />
                <Button
                  type="primary"
                  style={{ margin: '3px auto' }}
                  block
                  size="small"
                  shape="round"
                  onClick={() => {
                    this.sendExample('10.jpg');
                  }}
                >
                  Test
                </Button>
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Ex 2" bordered>
                <Image src="data/imgs/18711.jpg" fallback={this.state.fall} />
                <Button
                  type="primary"
                  style={{ margin: '3px auto' }}
                  block
                  size="small"
                  shape="round"
                  onClick={() => {
                    this.sendExample('18711.jpg');
                  }}
                >
                  Test
                </Button>
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Ex 3" bordered>
                <Image src="data/imgs/15050.jpg" fallback={this.state.fall} />
                <Button
                  type="primary"
                  style={{ margin: '3px auto' }}
                  block
                  size="small"
                  shape="round"
                  onClick={() => {
                    this.sendExample('15050.jpg');
                  }}
                >
                  Test
                </Button>
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Ex 4" bordered>
                <Image src="data/imgs/15050.jpg" fallback={this.state.fall} />
                <Button
                  type="primary"
                  style={{ margin: '3px auto' }}
                  block
                  size="small"
                  shape="round"
                  onClick={() => {
                    this.sendExample('15050.jpg');
                  }}
                >
                  Test
                </Button>
              </Card>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={6}>
              <Card title="Ex 5" bordered>
                <Image src="data/imgs/10.jpg" fallback={this.state.fall} />
                <Button
                  type="primary"
                  style={{ margin: '3px auto' }}
                  block
                  size="small"
                  shape="round"
                  onClick={() => {
                    this.sendExample('10.jpg');
                  }}
                >
                  Test
                </Button>
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Ex 6" bordered>
                <Image src="data/imgs/10.jpg" fallback={this.state.fall} />
                <Button
                  type="primary"
                  style={{ margin: '3px auto' }}
                  block
                  size="small"
                  shape="round"
                  onClick={() => {
                    this.sendExample('10.jpg');
                  }}
                >
                  Test
                </Button>
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Ex 7" bordered>
                <Image src="data/imgs/18711.jpg" fallback={this.state.fall} />
                <Button
                  type="primary"
                  style={{ margin: '3px auto' }}
                  block
                  size="small"
                  shape="round"
                  onClick={() => {
                    this.sendExample('18711.jpg');
                  }}
                >
                  Test
                </Button>
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Ex 8" bordered>
                <Image src="data/imgs/15050.jpg" fallback={this.state.fall} />
                <Button
                  type="primary"
                  style={{ margin: '3px auto' }}
                  block
                  size="small"
                  shape="round"
                  onClick={() => {
                    this.sendExample('15050.jpg');
                  }}
                >
                  Test
                </Button>
              </Card>
            </Col>
          </Row>
        </div>
      </Modal>
    );
    // return(<div></div>);
  }

  handleTest = () => {
    this.setState({
      showTest: false,
    });
  };

  handleFile = e => {
    const input = e.target;
    const { files } = e.target;
    console.log(e.target.files);
    if (files && files[0]) {
      const file = files[0];
      if (file.size > 1024 * 1024 * 3) {
        message.error('图片大小不能超过3M');
        input.value = '';
        return false;
      }
      const formData = new FormData();
      formData.append('file', files[0]);
      formData.append('content', 'photo');
      const data = formData;
      const obj = this;
      this.setState({
        uploading: true,
      });
      $.ajax({
        url: '/api/VisualLink/',
        data,
        type: 'Post',
        dataType: 'json',
        cache: false, // 上传文件无需缓存
        processData: false, // 用于对data参数进行序列化处理 这里必须false
        contentType: false, // 必须
        success(result) {
          console.log('已经连接');
          console.log(result.src);
          console.log(result.filename);
          console.log(obj);
          obj.setState({
            src: result.src,
            filename: result.filename,
            fall:
              'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
            uploading: false,
          });
          message.success('上传成功');
          console.log(obj.state.filename);
        },
        error(error) {
          console.log('出现错误');
          console.log(error);
          message.error('上传出错');
          obj.setState({
            uploading: false,
          });
        },
      });
    }
  };

  handleDetect = () => {
    console.log(this.state);
    if (this.state.filename === '') {
      console.log('文件为空');
      message.error('请上传文件');
      return false;
    }
    if (this.state.value === '') {
      console.log('文本为空');
      console.log(this.state.value);
      message.error('请输入对应的文本信息');
      return false;
    }
    const formData = new FormData();
    formData.append('fileName', this.state.filename);
    formData.append('text', this.state.value);
    const data = formData;
    const obj = this;
    $.ajax({
      url: '/api/dealImage/',
      data,
      type: 'Post',
      dataType: 'json',
      cache: false, // 上传文件无需缓存
      processData: false, // 用于对data参数进行序列化处理 这里必须false
      contentType: false, // 必须
      success(result) {
        console.log('已经连接');
        console.log(result);
        console.log(result.src);
        console.log(result.filename);
        console.log(result.names);
        console.log(obj);
        obj.setState({
          src: result.img,
          resultSrc: result.img_wbb,
          showDetect: true,
          fall:
            'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
        });
        console.log(obj.state.filename);
        console.log('处理成功');
        // obj.handleClear();
      },
      error(error) {
        console.log('Apply部分');
        console.log('出现错误');
        console.log(error);
      },
    });
  };

  handleLink = () => {
    console.log(this.state);
    if (this.state.filename === '') {
      console.log('文件为空');
      message.error('请上传文件');
      return false;
    }
    if (this.state.value === '') {
      console.log('文本为空');
      console.log(this.state.value);
      message.error('请输入对应的文本信息');
      return false;
    }
    const formData = new FormData();
    formData.append('fileName', this.state.filename);
    formData.append('text', this.state.value);
    const data = formData;
    const obj = this;
    $.ajax({
      url: '/api/linkImage/',
      data,
      type: 'Post',
      dataType: 'json',
      cache: false, // 上传文件无需缓存
      processData: false, // 用于对data参数进行序列化处理 这里必须false
      contentType: false, // 必须
      success(result) {
        console.log('已经连接');
        console.log(result);
        console.log(result.src);
        console.log(result.filename);
        console.log(`link${result.names}`);
        console.log(obj);
        obj.setState({
          src: result.img,
          resultSrc: result.img_wbb,
          showLink: true,
          resultEntity: result.names,
          resultPosition: result.boxes,
          fall:
            'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
        });
        console.log(obj.state.filename);
        console.log('处理成功');
        // obj.handleClear();
      },
      error(error) {
        console.log('Apply部分');
        console.log('出现错误');
        console.log(error);
      },
    });
  };

  handleClear = () => {
    this.setState({
      filename: '',
    });
    const up = document.getElementById('file');
    up.value = '';
  };

  getButton() {
    return (
      <div style={{ margin: '10px 0px' }}>
        {/* <Button
          variant="outlined"
          size="large"
          style={{ margin: '0 5px 0 0' }}
          onClick={this.handleFile}
        >
          <input type="file" id="file" onChange={this.handleFile} />
        </Button> */}
        <Button
          type="primary"
          shape="round"
          style={{ margin: '0 5px 0 0' }}
          onClick={this.handleDetect}
        >
          Detection
        </Button>
        <Button
          type="primary"
          shape="round"
          style={{ margin: '0 5px 0 5px' }}
          onClick={this.handleLink}
        >
          Linking
        </Button>
        <Button
          type="primary"
          shape="round"
          style={{ margin: '0 0 0 5px' }}
          onClick={this.handleClear}
        >
          Cancel
        </Button>
      </div>
    );
  }

  onChange = ({ target: { value } }) => {
    console.log(value);
    this.setState({ value });
    console.log('文本格式变化');
  };

  getProcess = () => {
    const { uploading } = this.state;
    if (uploading === true) {
      return (
        <div>
          <LinearProgress
            style={{
              marginTop: '10px',
              marginLeft: '20px',
              marginRight: '20px',
            }}
          />
        </div>
      );
    }
  };

  getUpload() {
    return (
      <div
        style={{
          height: '580px',
          width: '900px',
          borderRadius: '5px',
          border: '1px solid black',
        }}
      >
        <h2
          style={{
            margin: '10px 20px',
            fontSize: '24px',
            fontWeight: '700',
            color: '#77628c',
          }}
        >
          Title
        </h2>
        <TextArea
          id="textArea"
          style={{ display: 'block', width: '800px', margin: '10px 20px' }}
          value={this.state.value}
          onChange={this.onChange}
          placeholder="请输入标题"
          autoSize={{ minRows: 3, maxRows: 9 }}
        />
        <h2
          style={{
            margin: '10px 20px',
            fontSize: '24px',
            fontWeight: '700',
            color: '#77628c',
          }}
        >
          Image
        </h2>
        {/* <Image
          style={{
            display:"block",
            margin:'10px 20px',
            marginLeft:'20px',
            maxHeight: '300px',
          }}
          width={250}
          src={this.state.src}
          fallback={this.state.fall}
        /> */}
        <div
          style={{
            margin: '10px 20px',
            display: 'block',
            height: '300px',
            width: '800px',
            borderRadius: '5px',
            border: '1px solid #e8e8e8',
            background: '#ddddff',
          }}
          onClick={this.handlePreview}
        >
          <a href="javascript:void(0);">
            <div
              style={{
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                fontSize: '50px',
                color: '#9393ff',
              }}
            >
              <MdPhotoSizeSelectActual />
              <span style={{ marginLeft: '15px' }}>Image</span>
            </div>
          </a>
        </div>
        <div>
          <Button
            type="primary"
            shape="round"
            icon={<CloudUploadOutlined />}
            style={{ margin: '10px 10px 0 20px', display: 'inline-flex' }}
            onClick={this.handleUpdate}
          >
            Update
          </Button>
          <Button
            type="primary"
            shape="round"
            icon={<TagFilled />}
            style={{ margin: '10px 20px 0 0', display: 'inline-flex' }}
            onClick={this.handleEx}
          >
            Example
          </Button>
          {this.getProcess()}
          <p
            style={{
              marginLeft: '20px',
              fontSize: '5px',
              marginTop: '0px',
              display: 'block',
              color: '#9393ff',
            }}
          >
            {this.state.filename}
          </p>
        </div>

        <input
          type="file"
          id="file"
          style={{ opacity: '0' }}
          onChange={this.handleFile}
        />
      </div>
    );
  }

  handleEx = () => {
    this.setState({
      showTest: true,
    });
  };

  handlePreview = () => {
    const { filename } = this.state;
    if (filename === '') {
      message.error('Please upload the file');
      return false;
    }

    this.setState({
      showPreview: true,
    });
  };

  handleUpdate = () => {
    $('#file').trigger('click');
  };

  handleOk = () => {
    this.setState({
      showPreview: false,
    });
  };

  handleCancel = () => {
    this.setState({
      showPreview: false,
    });
  };

  getPreview() {
    return (
      <Modal
        title="Updated Image"
        visible={this.state.showPreview}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <Image width={300} src={this.state.src} fallback={this.state.fall} />
      </Modal>
    );
  }

  handleDetectOk = () => {
    this.setState({
      showDetect: false,
    });
  };

  handleDetectCancel = () => {
    this.setState({
      showDetect: false,
    });
  };

  getDetect() {
    return (
      <Modal
        title="Entity Detect"
        visible={this.state.showDetect}
        onOk={this.handleDetectOk}
        onCancel={this.handleDetectCancel}
      >
        <Image
          width={300}
          src={this.state.resultSrc}
          fallback={this.state.fall}
        />
      </Modal>
    );
  }

  handleLinkOk = () => {
    this.setState({
      showLink: false,
    });
  };

  handleLinkCancel = () => {
    this.setState({
      showLink: false,
    });
  };

  drawCanvas = record => {};

  reCanvas = record => {};

  getLink() {
    const columns = [
      {
        title: 'Entity',
        dataIndex: 'entity',
        key: 'entity',
      },
      {
        title: 'Position',
        dataIndex: 'position',
        key: 'position',
      },
      {
        title: 'Confidence',
        dataIndex: 'confidence',
        key: 'confidence',
      },
    ];
    const data = [];
    for (let i = 0; i < this.state.resultEntity.length; i++) {
      let position = '';
      for (let j = 0; j < 4; j++) {
        position += `${this.state.resultPosition[i][j].toFixed(2)} `;
      }
      const confidence = this.state.resultPosition[i][4].toFixed(4);
      data.push({
        key: `'${i + 1}'`,
        entity: this.state.resultEntity[i],
        position,
        confidence,
      });
    }

    return (
      <Modal
        width={1000}
        title="Link Result"
        visible={this.state.showLink}
        onOk={this.handleLinkOk}
        onCancel={this.handleLinkCancel}
      >
        <Image
          width={300}
          src={this.state.resultSrc}
          fallback={this.state.fall}
        />
        {/* <Table onRow={(record)=>{
          console.log(record);
        }} size='small' bordered columns={columns} dataSource={data} /> */}
        <Table
          onRow={record => {
            return {
              onClick: event => {}, // 点击行
              onDoubleClick: event => {},
              onContextMenu: event => {},
              onMouseEnter: event => {
                console.log(record);
              }, // 鼠标移入行
              onMouseLeave: event => {
                console.log(record);
              },
            };
          }}
          size="small"
          bordered
          columns={columns}
          dataSource={data}
        />
      </Modal>
    );
  }

  render() {
    return (
      <div>
        {this.getUpload()}
        {this.getButton()}
        {this.getPreview()}
        {this.getDetect()}
        {this.getLink()}
        {this.getTest()}
      </div>
    );
  }
}

export default withStyles(s)(Uploader);
