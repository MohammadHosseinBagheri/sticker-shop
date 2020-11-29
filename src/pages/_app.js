import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "../styles/globals.css";

import Header from "../components/header/header.component";
import CategoryProvider from "../context/category/provider";
import CardProvider from "../context/card/provider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CardProvider>
        <CategoryProvider>
          <Header />
          <Component {...pageProps} />
        </CategoryProvider>
      </CardProvider>
    </>
  );
}

export default MyApp;
