import { Container, Grid } from "@mui/material";

import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/mainbody/Mainbody";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Rightbar />
      </Container>
    </>
  );
}

export default App;
