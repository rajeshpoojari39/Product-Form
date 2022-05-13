import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ProductForm = (props) => {
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  const { name, price, quantity } = productDetails;

  const onChangeHandler = (e) => {
    setProductDetails((prevDetails) => {
      return { ...prevDetails, [e.target.name]: e.target.value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(productDetails);
    setProductDetails({
      name: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <Form className="form" onSubmit={onSubmitHandler}>
      <Form.Group className="mb-3" controlId="formBasicProductPage">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={onChangeHandler}
          placeholder="Enter Product Name"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicProductPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={price}
          onChange={onChangeHandler}
          placeholder="Enter Price"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicProductQuantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="number"
          name="quantity"
          value={quantity}
          onChange={onChangeHandler}
          placeholder="Enter Quantity"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ProductForm;
