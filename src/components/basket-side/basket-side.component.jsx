import { useCardState, usePrice } from "../../context/card/provider";
import { Col } from "react-bootstrap";
import styles from "./basket-side.module.scss";
import BasketSideItem from "./basket-side-item.component";
const BasketSide = () => {
  const cardItem = useCardState();
  const price = usePrice();
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
      <div style={{direction:'rtl'}} className="d-flex flex-column mt-2 justify-content-end">
        <h5 style={{textAlign:'right'}}>کد تخفیف</h5>
        <strong style={{ color: "#6B7C93",textAlign:'right' }}>
          مبلغ کل سبد خرید : {price} تومان{" "}
        </strong>
        <p style={{ color: "#6B7C93",textAlign:'right' }} className="mt-2" >هزینه ارسال : 0</p>
        <p style={{ color: "#6B7C93",textAlign:'right' }} >هزینه قابل پرداخت : 0</p>
      </div>
    </Col>
  );
};

export default BasketSide;
