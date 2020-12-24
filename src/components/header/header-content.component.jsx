import { Col, Row } from "react-bootstrap";
import MyLink from "../link/link.component";
import { FaBars, FaShoppingBasket } from "react-icons/fa";
import Link from "next/link";
import { useCardState, useQuantity } from "../../context/card/provider";

import styles from "./header.module.scss";

const HeaderContent = () => {
  const cardState = useCardState();
  const quantity = useQuantity();
  // console.log(quantity, cardState);
  return (
    <Row>
      <Col className="d-flex justify-content-between align-items-center p-5">
        <Link href="/basket">
          <a className={styles.header_quantity_container}>
            <span className={styles.header_quantity}>{quantity}</span>
            <FaShoppingBasket />
          </a>
        </Link>
        <MyLink href="/custom" title="طرح دلخواه" />
        <MyLink href="/_error" title="استیکر های فانتزی" />
        <MyLink href="/" title="استیکر" />
        <div className="d-sm-flex d-md-none flex-row justify-content-center align-items-center">
          <img width={100} height={100} src="/img/logo.png" />

          <FaBars />
        </div>
      </Col>
    </Row>
  );
};

export default HeaderContent;
