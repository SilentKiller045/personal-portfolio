import { Container, Row } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="align-items-center">
        <br></br>
        <center>
          <Row className="align-items-center">
            <div className="social-icon" >
              <a href="https://www.linkedin.com/in/sameer-b-103912129/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/SameerBramhecha"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/sameer_bramhecha/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p >Copyright 2023. All Rights Reserved</p>
          </Row>
        </center>
      </Container>
    </footer >
  )
}
