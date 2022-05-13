import { useState } from "react";
import "./App.css";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  const [productList, setProductList] = useState([]);

  const onProductFormSubmit = (productDetails) => {
    const newproduct = {
      ...productDetails,
      ProductId: Math.random().toString(),
    };
    setProductList((prevProducts) => {
      return [...prevProducts, newproduct];
    });
  };

  return (
    <div className="App">
      <h1 className="form-heading">Product Form</h1>
      <ProductForm onSubmit={onProductFormSubmit} />
      {productList.length > 0 && <ProductList products={productList} />}
    </div>
  );
}

export default App;
