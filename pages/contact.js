import Header from "../components/header";
import Footer from "../components/footer";
import BNavbar from "../components/nav";
import { Container, Row, Col } from "react-bootstrap";
import { render } from "react-dom";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from "semantic-ui-react";

const Contact = () => (
  <div className="h-100">
    <BNavbar />
    <Container className="pt-5 h-100-wf">
      <Row className="justify-content-center">
        <Col>
          <h1 className="pt-5">
            <i aria-hidden="true" className="mail icon"></i>Contact Me
          </h1>
          <div className="ui divider"></div>
          <p>
            For contact, you can message me on this email{" "}
            <i aria-hidden="true" className="mail icon"></i>
            <a href="mailto:mr.eladib.mohamed@gmail.com">
              mr.eladib.mohamed@gmail.com
            </a>
            .Or message me on social media.
          </p>
        </Col>
      </Row>
    </Container>

    <Footer />
  </div>
);

export default Contact;
