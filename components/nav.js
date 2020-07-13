import { Container, Navbar, Nav, Form } from "react-bootstrap";
import Head from "next/head";

const BNavbar = () => (
  <div>
    <Head>
      <title>Adibe Mohamed</title>
      <meta name="description" content="Adibe Mohamed personl | portfolio | software | website" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="UTF-8" />
      <meta name="author" content="Adibe Mohamed" />
    </Head>
    <Navbar expand="lg" fixed="top" bg="light">
      <Container>
        <Navbar.Brand href="/">Adibe Mohamed</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/adibe" active>
              Adibe
            </Nav.Link>
          </Nav>
          <Form>
            <Nav.Link href="/contact" className="purple">
              Contact
            </Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);
export default BNavbar;
