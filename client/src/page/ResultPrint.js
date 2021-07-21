import React, {useState, useEffect} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Row, Col, Card, Button, Form ,Input} from 'antd';

const ResultPrint = () => {
    const [address, setAddress] = useState(JSON.parse(localStorage.getItem('address')));
    const [header,setHeader] = useState('');
    const [value, setValue] = useState('');
    const setFrom = (value) => {
        setHeader(value.data)
        console.log(value)
        // window.print()
    }

    const printPage = (value) => {
        console.log(value)
        window.print()
    }

    const clearData = () => {
        localStorage.removeItem('address');
        setAddress('');
    }

    return (<>
        <Form name="nest-messages" onFinish={setFrom}>
            <Form.Item name={'data'} label="Introduction">
                {/*<Input.TextArea rows={10}/>*/}
                <ReactQuill theme="snow" value={value} onChange={setValue}/>
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button type="button" onClick={printPage}>Print</Button>
            </Form.Item>
        </Form>

            <Card title="Results" id="print_template" style={{ width: '100%' }}>
            <Row gutter={[16,16]}>
                {address && address.map((v,i) => (<Col span={24} style={{textAlign:'left',border:'1px solid #ccc',padding:'5px' }} key={i}>
                    {header}
                    <p>{v.address}</p>
                    {v.code}
                <div className={'PageBreak'} />
                </Col>
                ))}
            </Row>
        </Card>

        </>
    );
};

export default ResultPrint
