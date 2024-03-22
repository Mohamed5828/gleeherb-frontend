import React from "react";
import "../Styling/css/components/blogPost.css";
import "../Styling/css/components/card.css";
import "../Styling/css/components/btn.css";
import "../Styling/css/components/loader.css";
import data from "../tools/data.json";
import ProductPageMobile from "./ProductPageMobile";
import ProductPage from "./ProductPage";

const jsonProduct = data[1];

export default function SingleProductPage({ toggleCart }) {
  const isMobile = window.innerWidth <= 599;

  return isMobile ? (
    <ProductPageMobile jsonProduct={jsonProduct} toggleCart={toggleCart} />
  ) : (
    <ProductPage jsonProduct={jsonProduct} toggleCart={toggleCart} />
  );
}
