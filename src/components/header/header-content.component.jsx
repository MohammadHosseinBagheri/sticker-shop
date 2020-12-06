import { Col, Row } from "react-bootstrap";
import MyLink from "../link/link.component";
import { FaShoppingBasket } from "react-icons/fa";
import Link from "next/link";
import { useCardState, useQuantity } from "../../context/card/provider";
  
import styles from './header.module.scss'

const HeaderContent = () => {
  const cardState = useCardState();
  const quantity = useQuantity();
  // console.log(quantity, cardState);
  return (
    <Row>
      <Col className="d-sm-none d-md-flex justify-content-between align-items-center p-5">
        <Link href="/basket">
          <a className={styles.header_quantity_container}  >
            <span className={styles.header_quantity} >{quantity}</span>
            <FaShoppingBasket />
          </a>
        </Link>
        <MyLink href="/custom" title="طرح دلخواه" />
        <MyLink href="/fantasy" title="استیکر های فانتزی" />
        <MyLink href="/" title="استیکر" />
        <img width={100} height={100} src="/img/logo.png" />
      </Col>
    </Row>
  );
};

export default HeaderContent;
