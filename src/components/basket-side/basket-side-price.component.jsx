import { useFormik } from "formik";
import { usePrice } from "../../context/card/provider";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
const BasketSidePrice = () => {
  const price = usePrice();
  const formik = useFormik({
    initialValues: {
      giftCode: "",
    },
    validationSchema: Yup.object({
      giftCode: Yup.string(),
    }),
    onSubmit: (value) => console.log(value),
  });
  return (
    <div
      style={{ direction: "rtl" }}
      className="d-flex flex-column mt-2 justify-content-end"
    >
      <form onSubmit={formik.handleSubmit} className="d-flex flex-row">
        <input
        name="giftCode"
          className="form-control mb-2"
          placeholder="کدتخفیف"
          value={formik.values.giftCode}
          onChange={formik.handleChange}
        />
        <Button className="mr-2 mb-2" type="submit">
          ثبت
        </Button>
      </form>
      <strong style={{ color: "#6B7C93", textAlign: "right" }}>
        مبلغ کل سبد خرید : {price} تومان{" "}
      </strong>
      <p style={{ color: "#6B7C93", textAlign: "right" }} className="mt-2">
        هزینه ارسال : 0
      </p>
      <p style={{ color: "#6B7C93", textAlign: "right" }}>
        هزینه قابل پرداخت : 0
      </p>
    </div>
  );
};

export default BasketSidePrice;
