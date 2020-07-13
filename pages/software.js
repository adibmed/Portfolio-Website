import BNavbar from '../components/nav'
import Link from 'next/link'
import {
  Container, Row, Col
} from 'react-bootstrap';

import Footer from '../components/footer'

const Software = () => (
  <div className="h-100">
  <BNavbar/>
  <Container className="pt-5 h-100-wf">
  <Row  className="justify-content-center">
    <Col>
      <h1 className="pt-5"><i aria-hidden="true" className="github icon"></i> Software</h1>
        <div className="ui divider"></div>
      <p>In this section I dont know what I am going to talk about, but what I know is something which of software stuff LOL</p>
    </Col>
  </Row>
  <Row className="pt-5">
  <Col>
    <div className="ui card">
        <div className="image">
          <img src="./0_Rh4jWSuzZUXLrlb7.png" />
        </div>
        <div className="content">
          <div className="header">Matthew</div>
          <div className="meta"><span className="date">Joined in 2015</span></div>
          <div className="description">Matthew is a musician living in Nashville.</div>
        </div>
        <div className="extra content">
          <a>
            <i aria-hidden="true" className="user icon"></i>
            22 Friends
          </a>
        </div>
      </div>
    </Col>
  </Row>
</Container>


<Footer/>
</div>
)

export default Software;
