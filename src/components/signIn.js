import React from 'react'
import { Button, Row, Col, Form, Input } from 'antd';


const SingIn = () => {





    return (
        <div className='singin'>
            <Row>
                <Col span={2}></Col>
                <Col span={6}>
                    <p></p>
                    <h3>Để có thể mua hàng bạn vui lòng đăng ký tài khoản (chưa có tài khoản) hoặc đăng nhập (đã có tài khoản)</h3>
                </Col>
                <Col span={14}>
                    <p></p>
                    <Form direction='vertical' labelCol={{ span: 7 }}
                        wrapperCol={{ span: 18 }}>
                        <Form.Item>
                            <Input placeholder="Please enter your Name"></Input>
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="Please enter your Password"></Input>
                        </Form.Item>
                        <Form.Item><Button>Đăng Nhập</Button></Form.Item>
                    </Form>
                    
                </Col>
                <Col span={2}></Col>
            </Row>
        </div>
    )
}

export default SingIn;