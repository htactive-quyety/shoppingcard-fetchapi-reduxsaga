import React ,{useState}from 'react'
import { Row, Col, Rate, Menu, Dropdown,Button, Input } from 'antd'
import { CarOutlined, DownOutlined,ShoppingCartOutlined } from '@ant-design/icons'
import '../asset/css/productDetail.css'
import pd1 from '../asset/images/product2.png'
import {useSelector} from 'react-redux'
const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="#">101 - Đà Nẵng</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="#">Thành Phố Hồ Chí Minh</a>
        </Menu.Item>
    </Menu>
)
const ProductDetail = () => {
// const {id} = this.state;
// console.log(`ghkgdfgh${id}`);


    return (
        <div className='productdetail'>
            <Row>
                <Col span={3}></Col>
                <Col span={8}>
                    <img src={pd1} alt="productimg" className='productimg'/>
                </Col>
                <Col span={9}>
                    <div className='productdetail1'>
                        <div className='nameproduct'><h2> Tên Sản Phẩm</h2></div>
                        <div className='check'>
                            <Row>
                                <Col span={2}></Col>
                                <Col span={6}>
                                  5<Rate value={5} />
                                </Col>
                                <Col span={6}>
                                    <p>5 Đánh Gía</p>
                                </Col>
                                <Col span={6}>
                                    <p>20 Đã Bán</p>
                                </Col>
                                <Col span={2}></Col>
                            </Row>
                        </div>
                        <div className='priceproduct'>
                            <h1>&#8363;100.000 - &#8363;1.000.000</h1>
                        </div>
                        <div className='detail'>
                            <div>
                                <Row>
                                    <Col span={6} className='detail1'>
                                        <p>Vận Chuyển</p>
                                    </Col>
                                    
                                    <Col span={18} className='detail2'>
                                        <div>
                                            <div>
                                                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9d21899f3344277e34d40bfc08f60bc7.png" alt="" />
                                                Miễn Phí Vận Chuyển
                                            </div>
                                            <p> Miễn Phí Vận Chuyển khi đơn hàng đạt giá trị tối thiểu</p>
                                        </div>
                                        <div>
                                            <Row>
                                                <Col span={12}><CarOutlined /> Vận Chuyển Tới</Col>
                                                <Col span={12}>
                                                    <Dropdown overlay={menu} trigger={['click']}>
                                                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                            Đà Nẵng<DownOutlined />
                                                        </a>
                                                    </Dropdown>
                                                </Col>
                                            </Row>
                                        </div></Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col span={6} className='detail1'>
                                        <p>Màu Sắc</p>
                                    </Col>
                                    <Col span={18} className='detail2'>
                                        <Button>Xanh biển</Button>
                                        <Button> Đen</Button>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col span={6} className='detail1'> 
                                        <p> Size</p>
                                    </Col>
                                    <Col span={18} className='detail2'>
                                        <Button>S</Button>
                                        <Button>L</Button>
                                        <Button>XL</Button>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col span={6} className='detail1'>
                                        <p>Số Lượng</p>
                                    </Col>
                                    <Col span={18} className='detail2'>
                                    <Button className='btnplus'>+</Button>
                                    <Input style={{ width: '10%' }} value={1}/>
                                    <Button>-</Button>
                                           100 sản phẩm có sẵn
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className='btnbuy'>
                                <Row>
                                    <Col span={12}>
                                        <Button danger><ShoppingCartOutlined />Thêm Vào Giỏ Hàng</Button>
                                    </Col>
                                    <Col span={12}>
                                        <Button type='primary'>MUA NGAY</Button>
                                    </Col>
                                </Row>
                            </div>
                    </div>
                </Col>
                <Col span={4}></Col>
            </Row>
        </div>
    )
}
export default ProductDetail;