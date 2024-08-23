import { Row, Col, ListGroup, Container } from "react-bootstrap";
import { Component } from "react";

class MyFooter extends Component {
  render() {
    return (
      <>
        <footer className="bg-dark px-3" data-bs-theme="dark">
          <Container fluid>
            <Row>
              <Col className="text-center py-3 text-white-50">
                <i className="bi bi-facebook footer-icon me-2"></i>
                <i className="bi bi-instagram footer-icon me-2"></i>
                <i className="bi bi-twitter-x footer-icon me-2"></i>
                <i className="bi bi-youtube footer-icon"></i>
              </Col>
            </Row>
            <Row xs={1} sm={2} md={3} lg={4} className="justify-content-center mt-5">
              <Col className="footer-links">
                <ListGroup>
                  <ListGroup.Item><a href="#">Audio and Subtitles</a></ListGroup.Item>
                  <ListGroup.Item><a href="#">Media Center</a></ListGroup.Item>
                  <ListGroup.Item><a href="#">Privacy</a></ListGroup.Item>
                  <ListGroup.Item><a href="#">Contact Us</a></ListGroup.Item>
                </ListGroup>
              </Col>
              <Col className="footer-links">
                <ListGroup>
                  <ListGroup.Item><a href="#">Audio Description</a></ListGroup.Item>
                  <ListGroup.Item><a href="#">Investor Relations</a></ListGroup.Item>
                  <ListGroup.Item><a href="#">Legal Notices</a></ListGroup.Item>
                </ListGroup>
              </Col>
              <Col className="footer-links">
                <ListGroup>
                  <ListGroup.Item><a href="#">Help Center</a></ListGroup.Item>
                  <ListGroup.Item><a href="#">Jobs</a></ListGroup.Item>
                  <ListGroup.Item><a href="#">Cookie Preferences</a></ListGroup.Item>
                </ListGroup>
              </Col>
              <Col className="footer-links">
                <ListGroup>
                  <ListGroup.Item><a href="#">Gift Cards</a></ListGroup.Item>
                  <ListGroup.Item><a href="#">Terms of Use</a></ListGroup.Item>
                  <ListGroup.Item><a href="#">Corporate Information</a></ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default MyFooter;