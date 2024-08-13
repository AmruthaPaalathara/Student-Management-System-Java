import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import student1 from '../assets/images/student1.jpeg';


export default function AppHome() {
    return (
        <section id = "home">
            <Container>
            <Row>
                <Col xs={6}>
                <Image src="{./images/student1}" thumbnail />
                </Col>
                <Col xs={6}>xs=6</Col>
            </Row>
        </Container>
        </section>
        
    )
}
