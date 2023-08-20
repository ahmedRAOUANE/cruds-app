import { Container, Stack, Typography } from "@mui/material";
import Button  from "@mui/joy/Button";
import Input  from "@mui/joy/Input";

const AddProduct = () => {
  return (
    <Container sx={{ maxWidth: { md: "60%" } }}>
      <Typography component="h3" variant="h5" mb={3}>
        add product
      </Typography>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Stack spacing={1}>
          <Input placeholder="product name" required />
          <Input placeholder="category" required />
          <Input placeholder="description" required />
          <Input placeholder="price" type={"number"} required />
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </Container>
  );
};

export default AddProduct;
