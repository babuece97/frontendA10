import React from 'react';
import { Card } from 'react-bootstrap';

const Goods = ({item}) => {
    return (
        <Card className='my-3 p-3 '>
            <a href= {`/item/${item._id}`}>
            <Card.Img src={item.image}   />
            </a>
            <Card.Body>
                <a href={`/item/${item._id}`}>
                    <Card.Title as ='div'>
                    <strong>{item.name}</strong>
                    </Card.Title>
                </a>
                <Card.Text as ="h3">tk {item.price}
                </Card.Text>
                <button > Buy noww</button>
            </Card.Body>
        </Card>
    );
};

export default Goods;