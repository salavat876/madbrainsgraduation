import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <Navbar bg="dark" variant="dark">
              <Nav className="me-auto">
                <Link className="footer__navigation-item" to="/">
                  Главная
                </Link>
                <Link className="footer__navigation-item" to="/news">
                  События
                </Link>
                <Link className="footer__navigation-item" to="ugc">
                  Сообщить о проблеме
                </Link>
              </Nav>
            </Navbar>
            <div className="footer__phone">01 или 112</div>
            <div className="footer__subline">
              Единый телефон пожарных и спасателей
            </div>
            <div className="footer__phone margin-top1">
              {" "}
              <a
                className="footer__phone href-white"
                href="tel:+7 (495) 983-79-01"
              >
                +7 (495) 983-79-01
              </a>
            </div>
            <div className="footer__subline">Справочная МЧС России</div>
          </Col>
          <Col>
            <Container className="footer-tablet">
              <div className="footer-tablet__title">Ссылки</div>
              <div className="margin-top1">
                <p>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.gosuslugi.ru/"
                    className="footer-link"
                  >
                    Портал ГосУслуг
                  </a>
                </p>
                <p>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.mchs.gov.ru/"
                    className="footer-link"
                  >
                    МЧС
                  </a>
                </p>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container>
        <p className="footer__p">
          Соглашаясь на рассылку оповещений, Вы принимаете{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://xn--h1aetcc.xn--p1ai/page/agreement?roistat_referrer=&roistat_pos=&roistat=google1_g_101442568250_497547227187_&gclid=Cj0KCQiAqbyNBhC2ARIsALDwAsDe7oCba5zy6YhPLEHDcA-YL2QWHQ6jqsLN2t-HQvxWvzDrXgULOmYaAr_tEALw_wcB"
          >
            условия пользовательского соглашения
          </a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
