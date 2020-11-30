import Link from "next/link";
import { Button, Col, Row } from "react-bootstrap";
import {
  FaTelegram,
  FaPhone,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import styles from "./footer.module.scss";
const FooterContainer = () => {
  return (
    <Row className={styles.footer_container}>
      <Col className="d-flex flex-column align-items-end">
      <h5 style={{color:'#32325D'}}> بازی </h5>
          <Link href="#">
              <a style={{color:'#32325D'}} >Among Us</a>
          </Link>
          <Link href="#">
              <a style={{color:'#32325D'}} >Dota</a>
          </Link>
          <Link href="#">
              <a style={{color:'#32325D'}} >Fifa</a>
          </Link>
      </Col>
      <Col className="d-none d-md-flex flex-column align-items-end">
      <h5 style={{color:'#32325D'}}> کامپیوتر </h5>
          <Link href="#">
              <a style={{color:'#32325D'}} >برنامه نویسی</a>
          </Link>
          <Link href="#">
              <a style={{color:'#32325D'}} >Network</a>
          </Link>
      </Col>
      <Col className="d-none d-md-flex flex-column align-items-end">
          <h5 style={{color:'#32325D'}}>فیلم و سریال</h5>
          <Link href="#">
              <a style={{color:'#32325D'}} >Friends</a>
          </Link>
          <Link href="#">
              <a style={{color:'#32325D'}} >Money Heist</a>
          </Link>
          <Link href="#">
              <a style={{color:'#32325D'}} >Rick And Morty</a>
          </Link>
          <Link href="#">
              <a style={{color:'#32325D'}} >John Wick</a>
          </Link>
      </Col>
      <Col className="d-flex flex-column align-items-end">
        <img src="/img/logo.png" width={100} height={100} />
        <Button className="d-flex align-items-center justify-content-center m-1" style={{backgroundColor:'#606CEC',borderColor:'#606CEC'}}  >
          09390540490
          <FaPhone />
        </Button>
        <div className="d-flex flex-row">
          <Button
          className="m-1"
            style={{
              width: 50,
              backgroundColor: "#606CEC",
              borderColor: "#606CEC",
            }}
          >
            <FaTelegram />
          </Button>
          <Button
          className="m-1"
            style={{
              width: 50,
              backgroundColor: "#606CEC",
              borderColor: "#606CEC",
            }}
          >
            <FaTwitter />
          </Button>
          <Button
          className="m-1"
            style={{
              width: 50,
              backgroundColor: "#606CEC",
              borderColor: "#606CEC",
            }}
          >
            <FaInstagram />
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default FooterContainer;
