import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            I AM FOOTER
            <Container>
               <Row>
                   <Col className='text-center py-7'>
                       Copyright &copy;letsbuy

                   </Col>
               </Row>
            </Container>
        </footer>
    );
};

export default Footer;