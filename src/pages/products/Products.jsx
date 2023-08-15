import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID"},
  { field: "title", headerName: "name"},
  { field: "category", headerName: "category"},
  {
    field: "price",
    headerName: "price",
    type: "number",
  },
  {
    field: "count",
    headerName: "count",
    type: "number",
  },
  {
    field: "rate",
    headerName: "rate",
    type: "number",
  },
];

const rows = [
  { id: 1, title: "Snow", category: "Jon", price: 35, count: 20, rate: 2.3 },
  {
    id: 2,
    title: "Lannister",
    category: "Cersei",
    price: 42,
    count: 20,
    rate: 2.3,
  },
  {
    id: 3,
    title: "Lannister",
    category: "Jaime",
    price: 45,
    count: 20,
    rate: 2.3,
  },
  { id: 4, title: "Stark", category: "Arya", price: 16, count: 20, rate: 2.3 },
  {
    id: 5,
    title: "Targaryen",
    category: "Daenerys",
    price: null,
    count: 20,
    rate: 2.3,
  },
  {
    id: 6,
    title: "Melisandre",
    category: null,
    price: 150,
    count: 20,
    rate: 2.3,
  },
  {
    id: 7,
    title: "Clifford",
    category: "Ferrara",
    price: 44,
    count: 20,
    rate: 2.3,
  },
  {
    id: 8,
    name: "Frances",
    category: "Rossini",
    price: 36,
    count: 20,
    rate: 2.3,
  },
  {
    id: 9,
    name: "Roxie",
    category: "Harvey",
    price: 65,
    count: 20,
    rate: 2.3,
    count: 20,
    rate: 2.3,
  },
];

const Products = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Products;
