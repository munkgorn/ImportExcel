import React from 'react';
import { Upload, Button, message, Row, Col, Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const UploadExcel = () => {
    const props = {
        name: 'excel',
        method: 'POST',
        maxCount: 1,
        action: 'https://import-excel-server.vercel.app/upload/',
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file.response);
            localStorage.setItem('address', JSON.stringify(info.file.response))
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };

    return (
        <Card style={{ width: '100%' }}>
        <Row>
            <Col span={24} style={{textAlign:'center'}}>
                <h1>Upload file excel here</h1>
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Select excel</Button>
                </Upload>
            </Col>
        </Row>
        </Card>
    )
}

export default UploadExcel
