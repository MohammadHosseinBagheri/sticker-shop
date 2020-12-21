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
              <div
                onClick={() => dispatch(addToCartAction(item))}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="btn mr-3 rounded"
              >
                <FaPlus />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => dispatch(deleteCardAction(item))}
                className="btn mr-3 rounded"
              >
                <FaTrash />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="btn mr-3 rounded"
                onClick={() => dispatch(removeFromCardAction(item))}
              >
                <FaMinus />
              </div>
            </td>
          </tr>
          <hr />
        </>
      ))}
    </tbody>
  );
};

export default TableBody;
