import { useFormik } from "formik";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaAddressBook,
    FaGift,
  FaMailBulk,
  FaPhone,
  FaUser,
  FaVoicemail,
} from "react-icons/fa";

const Content = () => {
  const [gift, setGift] = useState("");
  const [isGift, setIsGift] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      address: "",
      name: "",
      lastName: "",
      phone: "",
    },
  });

  const handleCheckbox = (event) => {
    setIsGift((prevState) => !prevState);
  };

  return (
    <form>
      <Row className="d-flex justify-content-center">
        <Col
          sm={12}
          lg={5}
          md={12}
          xl={5}
          className="form-group d-flex flex-row align-items-center "
        >
          <FaMailBulk />
          <input
            className="form-control ml-1"
            placeholder="ایمیل"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Col>
        <Col
          sm={12}
          lg={5}
          md={12}
          xl={5}
          className="form-group d-flex flex-row align-items-center "
        >
          <FaUser />
          <input
            className="form-control"
            placeholder="نام"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Col>
        <Col
          sm={12}
          lg={5}
          md={12}
          xl={5}
          className="form-group d-flex flex-row align-items-center "
        >
          <FaUser />
          <input
            className="form-control"
            placeholder="نام خانوادگی"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Col>
        <Col
          sm={12}
          lg={5}
          md={12}
          xl={5}
          className="form-group d-flex flex-row align-items-center "
        >
          <FaPhone />
          <input
            className="form-control"
            placeholder="تلفن"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Col>
        <Col
          sm={12}
          lg={12}
          md={12}
          xl={12}
          className="form-group d-flex flex-row align-items-center "
        >
          <FaAddressBook />
          <input
            className="form-control"
            placeholder="آدرس"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Col>
      </Row>
      <div className="d-flex flex-row justify-content-end align-items-center ">
        {isGift && (
          <div className="d-flex flex-row align-items-center m-2" >
            <input
              style={{
                width: 200,
                margin:2
              }}
              className="form-control "
              placeholder="کد تخفیف را وارد کنید"
            />
            <FaGift />
          </div>
        )}
        <h6>کد تخفیف دارید ؟ </h6>
        <input type="checkbox" checked={isGift} onClick={handleCheckbox} />
      </div>
    </form>
  );
};

export default Content;
