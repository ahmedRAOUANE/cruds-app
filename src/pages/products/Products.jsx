import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "name", width: 130 },
  { field: "category", headerName: "category", width: 130 },
  {
    field: "number",
    headerName: "number",
    type: "number",
    width: 90,
  },
  {
    field: "status",
    headerName: "status",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.category || ""} ${params.row.name || ""}`,
  },
];

const rows = [
  { id: 1, name: "Snow", category: "Jon", number: 35 },
  { id: 2, name: "Lannister", category: "Cersei", number: 42 },
  { id: 3, name: "Lannister", category: "Jaime", number: 45 },
  { id: 4, name: "Stark", category: "Arya", number: 16 },
  { id: 5, name: "Targaryen", category: "Daenerys", number: null },
  { id: 6, name: "Melisandre", category: null, number: 150 },
  { id: 7, name: "Clifford", category: "Ferrara", number: 44 },
  { id: 8, name: "Frances", category: "Rossini", number: 36 },
  { id: 9, name: "Roxie", category: "Harvey", number: 65 },
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
