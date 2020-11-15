import { Col, Container, Row } from "react-bootstrap";
import HomeContent from "../components/home/content.component";
import { useCategoryAction } from "../context/category/provider";
import { useGetAllCategory } from "../hooks";

const Home = (props) => {
  const setData = useCategoryAction();
  setData(props.data);
  return (
    <Container>
      <HomeContent />
    </Container>
  );
};

export default Home;

export async function getServerSideProps() {
  const data = await useGetAllCategory();
  return {
    props: {
      completions: data.completions,
      data: data.data,
    },
  };
}
