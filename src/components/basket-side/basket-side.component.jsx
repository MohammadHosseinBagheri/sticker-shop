import { useCardState } from "../../context/card/provider";
import { Col } from "react-bootstrap";
import styles from "./basket-side.module.scss";
import BasketSideItem from "./basket-side-item.component";
import BasketSidePrice from "./basket-side-price.component";
const BasketSide = () => {
  const cardItem = useCardState();

  return (
    <Col
      className={`d-none d-md-flex justify-content-end flex-column ${styles.basket_side_container} `}
      lg={3}
      md={4}
    >
      <Col>
        {cardItem?.map((item, index) => (
          <BasketSideItem key={index} item={item} />
        ))}
      </Col>
      <BasketSidePrice />
    </Col>
  );
};

export default BasketSide;
