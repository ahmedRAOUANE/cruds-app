import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Detailes = () => {
  let { productID } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productID}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, []);

  return (
    <Container>
      <Card sx={{ display: "flex" }}>
        <div>
          <CardMedia title={product.title}>
            <img src={product.image} alt="23" style={{ maxWidth: "400px" }} />
          </CardMedia>
        </div>
        <div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {product.description}
            </Typography>
            <Typography variant="body2" color="text.danger">
              {product.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </div>
      </Card>
    </Container>
  );
};

export default Detailes;
