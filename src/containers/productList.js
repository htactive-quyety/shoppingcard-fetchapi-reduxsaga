import React from 'react'
import '../asset/css/productList.css'
import { Row, Col } from 'antd'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



const ProductList = () => {
  const todos = useSelector(state => state.todos.productList);
  return (
    
    <div className='content'>
      
      <Row>
        <Col span={2}></Col>
        <Col span={20}>
          <div className='flex-container'>
            {todos.map((contact, index) => (
              <div className='showProduct' key={contact.id}>
                <Link to={`/product-detail/${contact.id}` } >
                <img src={contact.image} alt="img product" />
                <div className='productInfor'>
                <strong>{contact.name} &#10084;</strong>
                  <Row>
                    <Col span={12} className='price'>
                      <p>&#8363;{contact.price} </p>
                    </Col>
                    <Col span={12} className='buyed'>
                      Đã bán 6
                  </Col>
                  </Row>
                </div>
                </Link>
              </div>
              ))}
          </div>
        </Col>
        <Col span={2}></Col>
      </Row>
      
    </div>
    
  )
}

export default ProductList;