import styles from "./basket-side.module.scss";
const BasketSideItem = (props) => {
  const { item } = props;
  return (
    <>
      <div
        className={`d-flex flex-row justify-content-between align-items-center ${styles.basket_side_item_container} `}
        style={{ width: "100%", padding: 5, margin: 5 }}
      >
        <h6>{item.price}</h6>
        <strong>{item.title}</strong>
        <div style={{ position: "relative" }}>
          <img className="rounded" src={item.image} width={65} height={65} />
          <strong className={`${styles.basket_side_item_quantity}`}>
            {item.quantity}
          </strong>
        </div>
      </div>
      <hr />
    </>
  );
};

export default BasketSideItem;
