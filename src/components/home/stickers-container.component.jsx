import { useEffect } from "react";
import { Col, Card, Row, Button } from "react-bootstrap";
import { useCategoryState } from "../../context/category/provider";
import { FaShoppingBasket } from "react-icons/fa";

import styles from "./home.module.scss";
import { useCardDispatch, useCardState } from "../../context/card/provider";
import { addToCartAction } from "../../context/action/cardAction";
const StickerContainer = () => {
  const stickers = useCategoryState();
  const dispatch = useCardDispatch();
  const state = useCardState();
  useEffect(() => {
    // console.log(state);
  }, [state]);
  // console.log(stickers);
  // console.log("render","color:'red")
  return (
    <>
      <h2 className="text-center mt-5" style={{ color: "#32325d" }}>
        برنامه نویسی
      </h2>
      <Row>
        {stickers
          ? stickers.map((item, index) => (
              <Col className={styles.card_collection_container} lg={4} md={6}>
                <Card>
                  <Card.Img
                    className={styles.card_collection_image}
                    width={200}
                    height={200}
                    src={item.image}
                  />
                  <Button
                    className={styles.add_to_card_button}
                    onClick={()=>dispatch(
                      addToCartAction(item)
                    )}
                  >
                    <FaShoppingBasket />
                  </Button>
                  <Card.Body>
                    <Card.Title  style={{color:'#6B7C93'}} className="text-center">
                      {item.title}
                    </Card.Title>
                    <Card.Text style={{color:'#6B7C93'}} className="text-center">{item.price}</Card.Text>
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
