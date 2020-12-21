import { useCardState } from "../context/card/provider";
import { useRouter } from "next/router";
import Home from '../pages/index'
const WithBasket = (WrapComponent) => {
  const Basket = ({ ...otherProps }) => {
    const router = useRouter();
    var card = useCardState();

    if (card.length === 0 && typeof window !== "undefined") {
      router.replace("/");
      return <Home />
    }
    return <WrapComponent {...otherProps} />;
  };

  return Basket;
};

export default WithBasket;
