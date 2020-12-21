import Head from "next/head";
import { Container } from "react-bootstrap";
import Content from "../components/customer-content/content.component";
import WithBasket from "../hoc/with-basket.component";

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

export default WithBasket(Customer);
