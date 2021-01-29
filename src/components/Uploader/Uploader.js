import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import axios from 'axios';
import $ from 'jquery';
import { Upload, message, Image, Modal, Input } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import s from 'antd/dist/antd.css';
import Button from '@material-ui/core/Button';

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
    src: '',
    isModalVisible: false,
    value: '',
    filename: '',
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
          });
          console.log(obj.state.filename);
        },
        error(error) {
          console.log('出现错误');
          console.log(error);
        },
      });
    }
  };

  handleQuery = () => {
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
        console.log(result.src);
        console.log(result.filename);
        console.log(obj);
        obj.setState({
          src: result.src,
          filename: result.filename,
          value: result.content,
          isModalVisible: true,
        });
        console.log(obj.state.filename);
        console.log('处理成功');
        obj.handleClear();
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
        <Button
          variant="outlined"
          size="large"
          style={{ margin: '0 5px 0 0' }}
          onClick={this.handleFile}
        >
          <input type="file" id="file" onChange={this.handleFile} />
        </Button>
        <Button
          variant="outlined"
          size="large"
          style={{ margin: '0 0 0 5px' }}
          onClick={this.handleQuery}
        >
          Apply
        </Button>
        <Button
          variant="outlined"
          size="large"
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

  getUpload() {
    return (
      <div style={{ height: '300px', width: '1000px' }}>
        <Image
          style={{
            display: 'inline-flex',
            marginTop: '5px',
            maxHeight: '300px',
          }}
          width={250}
          src="uploads/abc.jpg"
          fallback="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <TextArea
          id="textArea"
          style={{ display: 'inline-flex', width: '600px', marginLeft: '20px' }}
          value={this.state.value}
          onChange={this.onChange}
          placeholder="请输入标题"
          autoSize={{ minRows: 10, maxRows: 12 }}
        />
      </div>
    );
  }

  handleOk = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  getModal() {
    return (
      <Modal
        title="处理结果"
        visible={this.state.isModalVisible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <Image
          width={300}
          src="uploads/abc.jpg"
          fallback="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <p>{this.state.value}</p>
      </Modal>
    );
  }

  render() {
    return (
      <div>
        {this.getUpload()}
        {this.getButton()}
        {this.getModal()}
      </div>
    );
  }
}

export default withStyles(s)(Uploader);
