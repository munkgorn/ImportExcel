import React, {useState, useEffect} from 'react';
import { Row,Col,Card,Button } from 'antd';


const ResultPrint = () => {
    const [address, setAddress] = useState(JSON.parse(localStorage.getItem('address')));

    const printPage = () => {
        window.print()
    }

    return (
        <Card title="Results" id="print_template" extra={<Button type="button" onClick={printPage}>Print</Button>} style={{ width: '100%' }}>
            <Row>
                
                {address.map((v,i) => (<Col span={8} style={{textAlign:'left',border:'1px solid #ccc',padding:'5px'}} key={i}>
                    <p>
                        ผู้ส่ง JIANG HAO<br />
                        41/1 ซอย เอกชัย 83/1   แขวงบางบอน  เขต บางบอน กรุงเทพฯ 10150<br />
                        Tel. 062-509-5936
                    </p>
                    <p>{v.address}</p>
                    {v.code}
                </Col>))}
            </Row>
        </Card>
    )
}

export default ResultPrint
