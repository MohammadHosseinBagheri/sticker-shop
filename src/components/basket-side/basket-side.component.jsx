import { useCardState } from "../../context/card/provider";
import { Col } from "react-bootstrap";
const BasketSide = () => {
  const cardItem = useCardState();
  console.log(cardItem);
  return (
    <Col className="d-none d-md-flex justify-content-end" style={{maxHeight:400,overflowY:'scroll'}} lg={4} sm={0} md={4}>
      <Col>
        {cardItem?.map((item) => (
          <>
            <div
              className="d-flex flex-row justify-content-between align-items-center"
              style={{ width: "100%", padding: 5, margin: 5 }}
            >
            <h6>{item.price}</h6>
              <strong>{item.title}</strong>
              <div style={{ position: "relative" }}>
                <img
                  className="rounded"
                  src={item.image}
                  width={65}
                  height={65}
                />
                <strong
                  style={{
                    position: "absolute",
                    top: -5,
                    right: -5,
                    width: 18,
                    height: 18,
                    background: "#6B7C93",
                    color: "white",
                    borderRadius: 100,
                    alignSelf: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  {item.quantity}
                </strong>
              </div>
            </div>
            <hr />
          </>
        ))}
      </Col>
    </Col>
  );
};

export default BasketSide;
