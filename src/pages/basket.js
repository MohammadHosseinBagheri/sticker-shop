import { useRouter } from "next/router";
import Link from "next/link";
import { Container } from "react-bootstrap";
import {
  useCardDispatch,
  useCardState,
  usePrice,
} from "../context/card/provider";
import BasketTable from "../components/basket-table/BasketTable.component";
import Customer from "./customer";
import { FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";
import Head from "next/head";

const Basket = () => {
  const cardState = useCardState();
  const dispatch = useCardDispatch();
  const price = usePrice();
  const router = useRouter();
  useEffect(() => {
    if (cardState.length === 0) {
      router.replace("/");
    }
  }, [cardState]);

  return (
    <>
    <Head >
      <title>سبد خرید</title>
    </Head>
    <Container>
      <BasketTable />
      <div className="d-flex flex-row justify-content-between">
        <h2 style={{ direction: "rtl" }}>قیمت کل:{price}$</h2>
        <Link href="/customer">
          <a
            style={{ background: "#00E676" }}
            className="align-self-center p-2 rounded-sm "
          >
            ادامه مراحل و پرداخت
            <FaArrowRight />
          </a>
        </Link>
      </div>
    </Container>
    </>
  );
};

export default Basket;
