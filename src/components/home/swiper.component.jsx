import { Col, Card, Button } from "react-bootstrap";
import { FaShoppingBasket } from "react-icons/fa";

import styles from "./home.module.scss";
const MySwiper = ({ item, index }) => {
  return (
    <Col
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Card className={styles.card_container}>
        <div className={styles.add_to_card}>
          <FaShoppingBasket color="white" />
        </div>
        <Card.Img width={200} height={200} src={item.image} />
        <Card.Body className={styles.card_body_container}>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MySwiper;
