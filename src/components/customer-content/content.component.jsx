import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
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
import * as Yup from "yup";
import BasketSide from "../basket-side/basket-side.component";
import FormContaner from "../form/form-container.component";
import InputContainer from "../form/input-container.component";
const Content = () => {
  const [gift, setGift] = useState("");
  const [isGift, setIsGift] = useState(false);
  const [state, setState] = useState("");
  const [citiesList, setCitiesList] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      address: "",
      name: "",
      lastName: "",
      phone: "",
      state: "اردبیل",
      city: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("فرمت ایمیل صحیح نیست")
        .required(" ایمیل را وارد کنید"),
      address: Yup.string().required("آدرس را وارد کنید"),
      name: Yup.string().required("نام گیرنده را وارد کنید"),
      lastName: Yup.string().required("نام خانوادگی گیرند را وارد کنید"),
      phone: Yup.string()
        .length(11, "شماره موبایل 11 رقم است")
        .required("فیلد تلفن نمیتواند خالی بماند"),
      state: Yup.string().required("استان را انتخاب کنید"),
      city: Yup.string().required("شهرا را انتخاب کنید"),
    }),
    onSubmit: (values) => console.log(values),
  });

  const handleCheckbox = (event) => {
    setIsGift((prevState) => !prevState);
  };
  useEffect(() => {
    const getStates = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/states/getstates"
      );
      const { data } = await response;
      setState(data.data);
    };
    const postStates = async () => {
      const response = await axios.post(
        "http://localhost:3000/api/states/poststate",
        { state: formik.values.state }
      );
      setCitiesList(response.data);
    };
    getStates();
    postStates();
  }, [formik.values.state]);
  return (
    <Row>
      <FormContaner
        handleCheckbox={handleCheckbox}
        formik={formik}
        state={state}
        citiesList={citiesList}
        isGift={isGift}
      />
      <BasketSide />
    </Row>
  );
};

export default Content;
