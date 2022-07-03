import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  Divider,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory, useParams } from "react-router-dom";
import { useOrderForm } from "../hooks/components/order/form/useOrderForm";
import { useGetOrderItemById } from "../hooks/api/order/useOrder";
import OrderItemList from "../../app/mainDisplay/webPagesComponents/OrderItemList";
import CartColumns from "../../app/mainDisplay/webPagesComponents/CartColumns";
import ShippingColumn from "../../app/mainDisplay/webPagesComponents/ShippingColumn";
import ShippingItem from "../../app/mainDisplay/webPagesComponents/ShippingItem";
import AdminOrderDetailTotal from "../components/order/detail/AdminOrderDetailTotal";

const OrderDetail = () => {
  const history = useHistory();
  const { id } = useParams();
  const { handleMarkDeliver } = useOrderForm();
  const { data, isLoading, isError } = useGetOrderItemById(id);
  const subtotal = data?.orderItems.reduce(
    (acc, item) => acc + item.price * item.countInStock,
    0
  );

  return isLoading ? (
    <>Loading....</>
  ) : isError ? (
    <>Something went wrong...</>
  ) : (
    <div>
      <Grid container direction="row">
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 4,
          }}>
          <Container maxWidth={false}>
            <Box>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  m: -1,
                }}>
                <Typography sx={{ m: 1 }} variant="h4">
                  <IconButton
                    color="primary"
                    onClick={() => history.push("/admin/orders")}
                    aria-label="go back"
                    style={{ marginBottom: "5px" }}
                    component="span">
                    <ArrowBackIcon />
                  </IconButton>
                  Order Details
                </Typography>
                {data?.isDelivered ? (
                  <Button variant="contained" sx={{ m: 2 }} disabled>
                    Delivered
                  </Button>
                ) : data?.isPaid ? (
                  <Button
                    variant="contained"
                    sx={{ m: 2 }}
                    onClick={() => handleMarkDeliver(id)}>
                    Mark As Delivered
                  </Button>
                ) : (
                  <Button variant="contained" sx={{ m: 2 }} disabled>
                    Order Not Paid
                  </Button>
                )}
              </Box>
            </Box>
            <Box sx={{ flexGrow: 1, mt: 5 }}>
              <Paper elevation={24}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={6}>
                        <List
                          sx={{
                            width: "100%",
                            maxWidth: 360,
                            bgcolor: "background.paper",
                          }}>
                          <ListItem alignItems="flex-start">
                            <ListItemText
                              primary={
                                <Typography
                                  sx={{ display: "inline" }}
                                  component="span"
                                  variant="h6"
                                  color="text.primary">
                                  Customer Name
                                </Typography>
                              }
                              sx={{ fontSize: "20" }}
                              secondary={
                                <React.Fragment>
                                  <Typography
                                    sx={{ display: "inline" }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary">
                                    {data?.user?.name}
                                  </Typography>
                                </React.Fragment>
                              }
                            />
                          </ListItem>
                        </List>
                      </Grid>
                      <Grid item xs={6}>
                        <List
                          sx={{
                            width: "100%",
                            maxWidth: 360,
                            bgcolor: "background.paper",
                          }}>
                          <ListItem alignItems="flex-start">
                            <ListItemText
                              primary={
                                <Typography
                                  sx={{ display: "inline" }}
                                  component="span"
                                  variant="h6"
                                  color="text.primary">
                                  Customer Email
                                </Typography>
                              }
                              sx={{ fontSize: "20" }}
                              secondary={
                                <React.Fragment>
                                  <Typography
                                    sx={{ display: "inline" }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary">
                                    {data?.user?.email}
                                  </Typography>
                                </React.Fragment>
                              }
                            />
                          </ListItem>
                        </List>
                      </Grid>
                    </Grid>
                    <Divider />
                  </Grid>
                </Grid>
                <div style={{ marginTop: "50px" }}></div>
                <Typography sx={{ m: 2 }} variant="h5">
                  Order Items
                </Typography>
                <CartColumns />
                {data?.orderItems.map((item, index) => {
                  return (
                    <OrderItemList key={item._id} {...item} index={index} />
                  );
                })}
                <hr />
                <br />
                <Typography sx={{ m: 2 }} variant="h5">
                  Shipping Address
                </Typography>
                <ShippingColumn />
                <ShippingItem {...data?.shippingAddress} />
                <hr />
                <br />
                <span style={{ padding: "30px" }}>
                  {" "}
                  Payment Method: {data?.paymentMethod}
                </span>
                <hr />
                <AdminOrderDetailTotal
                  total_amount={subtotal}
                  tax_fee={data?.taxPrice}
                  total={data?.totalPrice}
                  shipping_fee={data?.shippingPrice}
                />
              </Paper>
            </Box>
          </Container>
        </Box>
      </Grid>
    </div>
  );
};

export default OrderDetail;
