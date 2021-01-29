import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import axios from 'axios';
import $ from 'jquery';
import { Upload, message, Image } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import s from 'antd/dist/antd.css';
import Button from '@material-ui/core/Button';

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
      $.ajax({
        url: '/api/visualLink/',
        data,
        type: 'Post',
        dataType: 'json',
        cache: false, // 上传文件无需缓存
        processData: false, // 用于对data参数进行序列化处理 这里必须false
        contentType: false, // 必须
        success(result) {
          console.log('已经连接');
          console.log(result);
        },
        error(error) {
          console.log('出现错误');
          console.log(error);
        },
      });
    }
  };

  getButton() {
    return (
      <div style={{ margin: '10px 0px' }}>
        <Button
          variant="outlined"
          size="large"
          style={{ margin: '0 5px 0 0' }}
          onClick={this.handleQuery}
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

  getUpload() {
    return (
      <div style={{ height: '200px', width: '400px' }}>
        <Image
          width={200}
          src={this.state.src}
          fallback="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.getUpload()}
        {this.getButton()}
      </div>
    );
  }
}

export default withStyles(s)(Uploader);
