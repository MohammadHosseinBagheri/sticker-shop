import { Container } from "react-bootstrap";
import HeaderContent from "./header-content.component";

const Header = () => {
  return (
    <Container style={{marginTop:'30px',marginBottom:'100px'}} >
      <HeaderContent />
    </Container>
  );
};

export default Header;
