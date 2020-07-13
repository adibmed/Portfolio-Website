import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => (
  <div id="footer">
    <Container>
        <Row>
            <div role="list" className="sm ui mini  horizontal list w-100" id="sm">
              <div role="listitem" className="item">
              <a href="https://facebook.com/adibemohamed" target="_blank">
                <img src="./icons/facebook.png" className="ui small image" />
                </a>
              </div>
              <div role="listitem" className="item">
              <a href="https://instagram.com/adibemohamed" target="_blank">
                <img src="./icons/instagram.png" className="ui small image" />
                </a>
              </div>
              <div role="listitem" className="item">
              <a href="https://twitter.com/adibemohamed" target="_blank">
                <img src="./icons/twitter.png" className="ui small image" />
                </a>
              </div>
              <div role="listitem" className="item">
              <a href="https://linkedin.com/adibemohamed" target="_blank">
                <img src="./icons/linkedin.png" className="ui small image" />
                </a>
              </div>
              <div role="listitem" className="item">
              <a href="https://github.com/adibemohamed" target="_blank">
                <img src="./icons/github.png" className="ui small image" />
                </a>
              </div>
              <div role="listitem" className="item">
              <a href="https://youtube.com/adibemohamed" target="_blank">
                <img src="./icons/youtube.png" className="ui small image" />
                </a>
              </div>
          </div>
        </Row>
    </Container>
  </div>
)

export default Footer;
