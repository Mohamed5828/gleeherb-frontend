import React, { useState, useEffect } from "react";
import "../Styling/css/components/blogPost.css";
import "../Styling/css/components/card.css";
import "../Styling/css/components/btn.css";
import "../Styling/css/components/loader.css";
import DOMPurify from "dompurify";
import { handleAddToCart } from "../tools/CartHandlers";
import { useCart } from "../tools/CartContext";
import { useAuthHeader, useIsAuthenticated } from "react-auth-kit";

function ProductPageMobile({ jsonProduct, toggleCart }) {
  const sanitizedDescription = DOMPurify.sanitize(jsonProduct.description);
  const sanitizedOtherIngredients = DOMPurify.sanitize(
    jsonProduct.otherIngredients
  );
  const sanitizedWarning = DOMPurify.sanitize(jsonProduct.warning);
  const autha = useAuthHeader();
  const isAuth = useIsAuthenticated();
  const userToken = autha().slice(6);
  const [currentImage, setCurrentImage] = useState(jsonProduct.firstImage);
  function handleClick(id) {
    setCurrentImage(id == 1 ? jsonProduct.firstImage : jsonProduct.secondImage);
  }
  const { dispatch } = useCart();

  return (
    <div>
      <div className="single-product-container">
        <div className="all-img-container-mobile">
          <div className="normal-img-container">
            <img src={currentImage} />
          </div>
          <div className="alt-img-container-mobile">
            <ul className="image-ul-mobile">
              <li
                className={
                  currentImage == jsonProduct.firstImage
                    ? `small-img-container-mobile active`
                    : `small-img-container-mobile`
                }
                onClick={() => {
                  handleClick(1);
                }}
              >
                <img className="small-img" src={jsonProduct.firstImage} />
              </li>
              <li
                className={
                  currentImage == jsonProduct.secondImage
                    ? `small-img-container-mobile active`
                    : `small-img-container-mobile`
                }
                onClick={() => {
                  handleClick(2);
                }}
              >
                <img className="small-img" src={jsonProduct.secondImage} />
              </li>
            </ul>
          </div>
          <div className="title">
            <div className="border-element">
              <h2 className="font-semibold">{jsonProduct.title}</h2>
            </div>
            <div className="border-element">
              <ul className="lite-info-ul">
                <li className="lite-info-li">
                  First Available: {jsonProduct.firstAvailable}
                </li>
                <li className="lite-info-li">
                  Best By: {jsonProduct.expiryDate}
                </li>
                <li className="lite-info-li">
                  Package Quantity: {jsonProduct.quantity} ML
                </li>
                <li className="lite-info-li">
                  Shipping Weight: {jsonProduct.weight} Gram
                </li>
              </ul>
            </div>
            <div className="price font-bold">
              Price: {jsonProduct.priceEg} L.E.
            </div>
            <button
              className="cart-btn"
              onClick={() => {
                handleAddToCart(dispatch, userToken, isAuth(), jsonProduct);
                toggleCart();
              }}
            >
              add to cart
            </button>
          </div>
        </div>
        <div className="product-overview-mobile">
          <div className="overview-title">
            <h2>Product Overview</h2>
          </div>
          <div className="overview-info">
            <div className="item-row">
              <h2 className="info-title">Suggested Use</h2>

              <div className="suggested-use">{jsonProduct.suggestedUse}</div>
              <h2 className="info-title">Other Ingredients</h2>

              <div
                className="other-ingredients"
                dangerouslySetInnerHTML={{ __html: sanitizedOtherIngredients }}
              />
              <h2 className="info-title">Description</h2>
              <div
                className="description"
                dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
              />
              <h2 className="info-title">Warning</h2>
              <div
                className="warning"
                dangerouslySetInnerHTML={{ __html: sanitizedWarning }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPageMobile;
