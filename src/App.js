import { Container, Grid } from "@mui/material";

import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/Rightbar";
import Sidebar from "./components/sidebar/Sidebar";



function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Grid container>
          <Sidebar />
          <Rightbar />
        </Grid>
      </Container>
    </>
  );
}

export default App;
