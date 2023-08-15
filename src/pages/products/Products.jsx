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

function createData(id, name, category, price) {
  return { id, name, category, price };
}

const rows = [
  createData(1, "Product1", "something", 100),
  createData(2, "Product1", "something", 100),
  createData(3, "Product1", "something", 100),
  createData(4, "Product1", "something", 100),
];

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
            to="/add-product"
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
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell>{row.category}</StyledTableCell>
                <StyledTableCell>{row.price}</StyledTableCell>
                <StyledTableCell>
                  <ToggleButtonGroup>
                    <Button color="primary" style={{ padding: "10px" }}>
                      edite
                    </Button>
                    <Button color="neutral" style={{ padding: "10px" }}>
                      view
                    </Button>
                    <Button color="danger" style={{ padding: "10px" }}>
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
