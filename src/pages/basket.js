import { useMemo } from "react";
import { Button, Container } from "react-bootstrap";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useTable } from "react-table";
import { useCardDispatch, useCardState } from "../context/card/provider";

import * as types from "../constant/types";
import {
  removeFromCardAction,
  deleteCardAction,
} from "../context/action/cardAction";

const Basket = () => {
  const cardState = useCardState();
  const dispatch = useCardDispatch();
  const columns = useMemo(
    () => [
      {
        Header: "نام محصول",
        accessor: "name",
      },
      {
        Header: "تعداد محصول",
        accessor: "quantity",
      },
      {
        Header: "عملبات",
        accessor: "action",
      },
    ],
    []
  );
  return (
    <Container>
      <table style={{ width: "100%" }} className="mb-5">
        <thead className="d-flex flex-row justify-content-around text-center">
          {columns.map((item) => (
            <tr>
              <th>{item.Header}</th>
            </tr>
          ))}
        </thead>
        <tbody style={{ width: "100%" }}>
          {cardState?.map((item) => (
            <>
              <tr className="d-flex flex-row justify-content-around text-center m-3 ">
                <td style={{ width: "100%" }}>{item.title}</td>
                <td style={{ width: "100%" }}>{item.quantity}</td>
                <td
                  style={{ width: "100%" }}
                  className="d-flex justify-content-center "
                >
                  <Button className="bg-success border-success mr-3">
                    <FaPlus />
                  </Button>
                  <Button
                    onClick={() => dispatch(deleteCardAction(item))}
                    className="bg-warning border-warning mr-3"
                  >
                    <FaTrash />
                  </Button>
                  <Button
                    className="bg-danger border-danger mr-3"
                    onClick={() => dispatch(removeFromCardAction(item))}
                  >
                    <FaMinus />
                  </Button>
                </td>
              </tr>
              <hr />
            </>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Basket;
