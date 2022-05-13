import React from "react";
import Table from "react-bootstrap/Table";

const ProductList = ({ products }) => {
  return (
    <div className="product-List">
      <h2>Product List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price ($)</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={product.ProductId}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
