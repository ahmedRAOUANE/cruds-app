import { Link } from "react-router-dom";

import {
  tableCellClasses,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  ToggleButtonGroup,
} from "@mui/material";
import Button from "@mui/joy/Button";
import { useEffect, useState } from "react";

function createData(id, name, category, price) {
  return { id, name, category, price };
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Products = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRows(data);
      });
  }, []);

  const removeProduct = (productID) => {
    fetch(`http://localhost:9000/products`, {
      method: "DELETE",
    })
      .then((res) => {
        console.log(res);
        res.json();
      })
      .then((newData) => {
        console.log(newData);
      });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "25px",
        }}
      >
        <Typography component="h3" variant="h5">
          Products
        </Typography>
        <Button color="success">
          <Link
            to="/products/add-product"
            style={{
              textDecoration: "none",
              textTransform: "capitalize",
              color: "#fff",
            }}
          >
            Add Product
          </Link>
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>name</StyledTableCell>
              <StyledTableCell>category</StyledTableCell>
              <StyledTableCell>price</StyledTableCell>
              <StyledTableCell>operations</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell>{row.title}</StyledTableCell>
                <StyledTableCell>{row.category}</StyledTableCell>
                <StyledTableCell>{row.price}</StyledTableCell>
                <StyledTableCell>
                  <ToggleButtonGroup>
                    <Button color="primary" style={{ padding: "10px" }}>
                      edite
                    </Button>
                    <Button color="neutral" style={{ padding: "10px" }}>
                      <Link
                        to={`/products/${row.id}`}
                        style={{
                          textDecoration: "none",
                          textTransform: "capitalize",
                          color: "#fff",
                        }}
                      >
                        view
                      </Link>
                    </Button>
                    <Button
                      onClick={() => removeProduct(row.id)}
                      color="danger"
                      style={{ padding: "10px" }}
                    >
                      delete
                    </Button>
                  </ToggleButtonGroup>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Products;
