import { useCardState } from "../context/card/provider";
import { useRouter } from "next/router";

const WithBasket = (WrapComponent) => {
  const Basket = ({ ...otherProps }) => {
    const router = useRouter();
    var card = useCardState();

    if (card.length === 0) {
      router.replace("/");
    }
    return <WrapComponent {...otherProps} />;
  };

  return Basket;
};

export default WithBasket;
