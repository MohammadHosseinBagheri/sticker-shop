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
import InputContainer from "../form/input-container.component";
import styles from './form.module.scss'
const FormContaner = (props) => {
  const { handleCheckbox, formik, state, citiesList, isGift } = props;
  return (
    <Col lg={7} md={7} sm={12} className={`p-5 ${styles.form_container}`}>
      <form style={{ direction: "rtl" }} onSubmit={formik.handleSubmit}>
        <Row className="d-flex ">
          <InputContainer
            formik={formik}
            value={formik.values.email}
            error={formik.errors.email}
            placeholder="ایمیل"
            name="email"
            touched={formik.touched.email}
          />
          <InputContainer
            formik={formik}
            value={formik.values.name}
            error={formik.errors.name}
            placeholder="نام"
            name="name"
            touched={formik.touched.name}
          />
          <InputContainer
            formik={formik}
            value={formik.values.lastName}
            error={formik.errors.lastName}
            placeholder="نام خانوادگی"
            name="lastName"
            touched={formik.touched.lastName}
          />
          <InputContainer
            formik={formik}
            value={formik.values.phone}
            error={formik.errors.phone}
            placeholder="تلفن"
            name="phone"
            touched={formik.touched.phone}
          />
          <InputContainer
            formik={formik}
            value={formik.values.address}
            error={formik.errors.address}
            placeholder="آدرس"
            name="address"
            touched={formik.touched.address}
          />

          <Col
            sm={12}
            lg={12}
            md={12}
            xl={12}
            className="form-group d-flex justify-content-start flex-row align-items-center "
          >
            <FaCity />
            <select
              style={{ width: 200 }}
              name="state"
              onChange={formik.handleChange}
              value={formik.values.state}
              className="form-control m-2"
            >
              {state
                ? state.map((item) => (
                    <option key={item.name}>{item.name}</option>
                  ))
                : null}
            </select>
            <select
              style={{ width: 200 }}
              className="form-control m-2"
              name="city"
              onChange={formik.handleChange}
              value={formik.values.city}
            >
              {citiesList
                ? citiesList.map((item) => (
                    <option key={item.name}>{item.name}</option>
                  ))
                : null}
            </select>
          </Col>
        </Row>
        <div className="d-flex flex-row justify-content-start align-items-center ">
          <input type="checkbox" checked={isGift} onClick={handleCheckbox} />
          <h6>کد تخفیف دارید ؟ </h6>
          {isGift && (
            <div className="d-flex flex-row align-items-center m-2">
              <input
                style={{
                  width: 200,
                  margin: 2,
                }}
                className="form-control "
                placeholder="کد تخفیف را وارد کنید"
              />
              <FaGift />
            </div>
          )}
        </div>
        <button type="submit">ارسال</button>
      </form>
    </Col>
  );
};

export default FormContaner;
