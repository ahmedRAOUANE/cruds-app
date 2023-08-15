import { Grid } from "@mui/material";
import { Routes, Route } from "react-router-dom";


const Rightbar = () => {
  return (
    <Grid item xs={9} padding="20px">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Products" element={<Products />} />
        <Route path="cartegories" element={<Categories />} />
      </Routes>
    </Grid>
  );
};

export default Rightbar;
