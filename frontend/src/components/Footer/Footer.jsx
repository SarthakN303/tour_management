import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

import { quick_links, quick_links2 } from "../../assets/data/stuff";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="3">
              <div className="logo">
                <img src={logo} alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis, eos.
                </p>
                <div className="social__links d-flex align-items-center gap-4">
                  <span>
                    <Link to="#">
                      <i className="ri-youtube-fill"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="#">
                      <i className="ri-github-line"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="#">
                      <i className="ri-facebook-circle-line"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="#">
                      <i className="ri-instagram-line"></i>
                    </Link>
                  </span>
                </div>
              </div>
            </Col>

            <Col lg="3">
              <h5 className="footer__link-title">Discover</h5>

              <ListGroup className="footer__quick-links">
                {quick_links.map((item, index) => (
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col lg="3">
              <h5 className="footer__link-title">Quick Links</h5>

              <ListGroup className="footer__quick-links">
                {quick_links2.map((item, index) => (
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col lg="3">
              <h5 className="footer__link-title">Contacts</h5>

              <ListGroup className="footer__quick-links">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                      <i className="ri-map-pin-line"></i>
                      Address:
                    </span>
                  </h6>

                  <p className="mb-0">Latur, Maharashtra</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                      <i className="ri-mail-line"></i>
                      Email:
                    </span>
                  </h6>

                  <p className="mb-0">travelworld@gmail.com</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                      <i className="ri-phone-fill"></i>
                      Phone:
                    </span>
                  </h6>

                  <p className="mb-0">+0123456789</p>
                </ListGroupItem>
              </ListGroup>
            </Col>

            <Col lg="12" className="text-center pt-5">
              <p className="copyright">
                copyright {year}, desgin and developed by webque. All rights
                reserved
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
