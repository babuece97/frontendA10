import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Goods from '../components/Goods'
import products from '../products'

const HomeScreen = () => {
    return (
        <>
            <h1> Latest products</h1>
            <Row>
                {products.map(item=>(
                    
                <Col sm = {12} md={6} lg={4} xl={3}>
                 <Goods item={item} />

                </Col>
                
                ))}
            </Row>
        </>
    );
};

export default HomeScreen;