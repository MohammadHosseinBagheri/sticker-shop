import { Col, Card, Button } from "react-bootstrap";
import styles from './home.module.scss'
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
        <div className={styles.add_to_card} >salam</div>
        <Card.Img width={200} height={200} src={`img/${index}.jpg`} />
        <Card.Body>
          <Card.Title>{item.label}</Card.Title>
          <Card.Text>{item.artist_name}</Card.Text>
          <Card.Text>price : {item.artist_works}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MySwiper;
