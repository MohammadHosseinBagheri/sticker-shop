import { Col, Row } from "react-bootstrap";
import MyLink from "../link/link.component";
const HeaderContent = () => {
  return (
    <Row>
      <Col className="d-sm-none d-md-flex justify-content-between align-items-center p-5">
        <MyLink href="/custom" title="طرح دلخواه" />
        <MyLink href="/fantasy" title="استیکر های فانتزی" />
        <MyLink href="/" title="استیکر" />
        <div> logo </div>
      </Col>
    </Row>
  );
};

export default HeaderContent;
