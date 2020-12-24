import { Col, Container, Row } from "react-bootstrap";
import HomeContent from "../components/home/content.component";
import { useCategoryAction } from "../context/category/provider";
import { useGetAllCategory } from "../hooks";
import stickers from "./api/data";
import Head from "next/head";

const Home = (props) => {
  const setData = useCategoryAction();
  setData(stickers);
  return (
    <>
      <Head>
        <title>استیکر ملیا</title>
        <meta property="og:title" content="استیکر ملیا" />
        <meta property="og:type" content="فروشگاه آنلاین استیکر" />
        <meta property="og:url" content="فروشگاه آنلاین استیکر" />
        <meta property="og:image" content="فروشگاه آنلاین استیکر" />
      </Head>
      <Container>
        <HomeContent />
      </Container>
    </>
  );
};

export default Home;

// export async function getServerSideProps() {
//   const data = await useGetAllCategory();
//   return {
//     props: {
//       data: data,
//     },
//   };
// }
