
import TableHeader from "./TableHeader.component";
import TableBody from "./TableBody.component";
const BasketTable = () => {
  return (
    <table style={{ width: "100%" }} className="mb-5">
      <TableHeader />
      <TableBody />
    </table>
  );
};

export default BasketTable;
