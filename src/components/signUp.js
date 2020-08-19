import React from 'react'
import { Button, Row, Col, Form, Input } from 'antd';

const SingUp = () => {




    return (
        <div className='singup'>
            <Row>
                <Col span={6}></Col>
                <Col span={14}>
                    <p></p>
                    <Form direction='vertical' labelCol={{ span: 7 }}
                        wrapperCol={{ span: 18 }}>
                        <Form.Item>
                            <Input placeholder="Please enter your Name"></Input>
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="Please enter your Address"></Input>
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="Please enter your Phone"></Input>
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="Please enter your Password"></Input>
                        </Form.Item>
                        <Form.Item>
                            <Button>Đăng Ký</Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={4}></Col>
            </Row>

        </div>
    )
}

export default SingUp;