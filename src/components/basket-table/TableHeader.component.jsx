import {useMemo} from 'react'

const TableHeader = () => {
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
    <div>
      <thead className="d-flex flex-row justify-content-around text-center">
        {columns.map((item) => (
          <tr>
            <th>{item.Header}</th>
          </tr>
        ))}
      </thead>
    </div>
  );
};

export default TableHeader;
