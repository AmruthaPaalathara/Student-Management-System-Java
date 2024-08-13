import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function AppHeader() {
    return (
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Student Management</Navbar.Brand>
          <Nav className="auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Attendance</Nav.Link>
            <Nav.Link href="#">Grade</Nav.Link>
            <Nav.Link href="#">Course</Nav.Link>
            <Nav.Link href="#">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}