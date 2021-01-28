import React from "react";
import withStyles from 'isomorphic-style-loader/withStyles';
import { Upload, message ,Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import s from 'antd/dist/antd.css'

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
  

class Uploader extends React.Component{
    render(){
        return(<div><div style={{height:"400px",width:"1000px",}}><Dragger  {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
          </Dragger></div>
          <div style={{width:'auto'}}>
          <Button size='large' style={{ margin: '10px 10px 0 0', }}>Apply</Button>
          <Button size='large' style={{ margin: '10px 0 0 5px', }}z>Cancel</Button>
          </div>
          </div>);
    }
}

export default withStyles(s)(Uploader)