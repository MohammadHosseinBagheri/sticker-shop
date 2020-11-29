import { Col, Card, Row, Button } from "react-bootstrap";
import { useCategoryState } from "../../context/category/provider";
import { FaShoppingBasket } from 'react-icons/fa';

import styles from "./home.module.scss";
const StickerContainer = () => {
  const stickers = useCategoryState();
  console.log(stickers);
  return (
    <>
      <h2 className="text-center mt-5" style={{color:'#32325d'}}>برنامه نویسی</h2>
      <Row>
        {stickers
          ? stickers.map((item, index) => (
              <Col className={styles.card_collection_container} lg={4} md={6}>
                <Card>
                  <Card.Img className={styles.card_collection_image} width={200} height={200} src={item.image} />
                  <Button className={styles.add_to_card_button}><FaShoppingBasket/></Button>
                  <Card.Body>
                    <Card.Title className="text-center">
                      {item.title}
                    </Card.Title>
                    <Card.Text className="text-center">{item.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          : null}
      </Row>
    </>
  );
};

export default StickerContainer;
