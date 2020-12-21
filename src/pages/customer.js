import Head from "next/head";
import { Container } from "react-bootstrap";
import Content from "../components/customer-content/content.component";

const Customer = () => {
  return (
    <>
      <Head>
        <title>اطلاعات مشتریان</title>
      </Head>
      <Container>
        <Content />
      </Container>
    </>
  );
};

export default Customer;
