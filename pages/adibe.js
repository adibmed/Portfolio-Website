import BNavbar from "../components/nav";
import { Container, Row, Col } from "react-bootstrap";

import Footer from "../components/footer";
const Adibe = () => (
  <div className="xh-100">
    <BNavbar />
    <Container className="pt-5 h-100-wf about">
      <Row className="justify-content-center">
        <Col>
          <h1 className="pt-5">
            <i aria-hidden="true" className="smile outline icon"></i> Who Am I ?
          </h1>
          <div className="ui divider"></div>
          <h4>
            Hi,I'm <b>Adibe</b> .I'am a software developer.I am from
            <a href="https://www.google.com/maps/place/Maroc/@33.0739529,-8.6114369,7z/" target="_blank"> Morocco</a> <i className="ma flag"></i>.
              I like to build things. I am passionate about building awesome tools using code. Also I am interested in electronics engineering as well as I am interested 
              in design and art . I like to combine the three fields which makes people see something artistic, physical and functional.I like this life cycle of learning and building,
               It makes me in an increasing loop..(coming soon !).
          </h4>
          <h1><small>please </small>don't leave earth without lifting a good imprint.</h1>
        </Col>
      </Row>
    </Container>
    <Footer />
  </div>
);

export default Adibe;
