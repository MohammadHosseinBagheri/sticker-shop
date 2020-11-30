import { Container } from "react-bootstrap";
import FooterContainer from "./footer-container.component";

const Footer = () => {
  return (
    <>
      <hr />
      <Container>
        <FooterContainer />
      </Container>
      <hr />
      <span
        style={{
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
          direction: "rtl",
          color: "#32325D",
        }}
      >
        @۱۳۹۹ - این سایت صرفا برای نمونه کار و طراحی برگرفته از سایت گیکتوری است و
        هیچ جنبه دیگری ندارد
      </span>
    </>
  );
};

export default Footer;
