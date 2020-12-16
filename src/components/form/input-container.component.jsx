import { Col, Row, Button } from "react-bootstrap";
import {
  FaAddressBook,
  FaCity,
  FaGift,
  FaMailBulk,
  FaPhone,
  FaUser,
  FaVoicemail,
} from "react-icons/fa";
const InputContainer = (props) => {
  const { formik, name, placeholder, value, error, touched } = props;
  return (
    <Col
      sm={12}
      lg={name === "address" ? 12 : 5}
      md={12}
      xl={name === "address" ? 12 : 5}
      className="form-group d-flex flex-column "
    >
      <div className="form-group d-flex flex-row align-items-center ">
        {/* <FaMailBulk /> */}
        <input
          className="form-control ml-1"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {touched && error && (
        <div className="text-danger text-right">{error}</div>
      )}
    </Col>
  );
};

export default InputContainer;
