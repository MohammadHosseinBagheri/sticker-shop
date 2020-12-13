import { useCardDispatch, useCardState } from "../../context/card/provider";
import * as types from "../../constant/types";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { Button } from "react-bootstrap";

import {
  removeFromCardAction,
  deleteCardAction,
  addToCartAction,
} from "../../context/action/cardAction";

const TableBody = () => {
    const dispatch = useCardDispatch();
    const cardState = useCardState();
  return (
    <tbody style={{ width: "100%" }}>
      {cardState?.map((item) => (
        <>
          <tr className="d-flex flex-row justify-content-around text-center m-3 ">
            <td style={{ width: "100%" }}>
              <img src={item.image} width="50%" height="50%" />
            </td>
            <td
              style={{
                width: "100%",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {item.quantity}
            </td>
            <td
              style={{ width: "100%" }}
              className="d-flex justify-content-center align-items-center"
            >
              <Button
                onClick={() => dispatch(addToCartAction(item))}
                style={{ width: 50, height: 50 }}
                className="bg-success border-success mr-3"
              >
                <FaPlus />
              </Button>
              <Button
                style={{ width: 50, height: 50 }}
                onClick={() => dispatch(deleteCardAction(item))}
                className="bg-warning border-warning mr-3"
              >
                <FaTrash />
              </Button>
              <Button
                style={{ width: 50, height: 50 }}
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
  );
};

export default TableBody;
