import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Fab,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../../axiosInterceptor";
import FilterComponent from "./FilterComponent";

const ProductPage = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    async function getProducts() {
      const { products } = await axiosInstance.get(`/api/products`);
      if (products) {
        localStorage.setItem("productData", JSON.stringify(products));
      }
    }
    getProducts();
  }, []);

  const productData = JSON.parse(localStorage.getItem("productData"));
  console.log(productData);
  return (
    <div>
      <Fab
        color="primary"
        onClick={() => handleOpen()}
        size="medium"
        variant="extended"
        aria-label="add">
        Filter
      </Fab>
      <FilterComponent open={open} handleClose={() => handleClose()} />
      <Container sx={{ py: 2 }} maxWidth="xl">
        <Typography variant="h1" sx={{ pb: 4 }}>
          Products
        </Typography>
        <Grid container spacing={2}>
          {productData &&
            productData.map((card) => (
              <Grid item xs={12} sm={4} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}>
                  <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card?.name}
                    </Typography>
                    <Typography>{card?.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProductPage;
