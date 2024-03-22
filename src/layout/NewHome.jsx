import React, { useState } from "react";
import "../Styling/css/components/card.css";
import "../Styling/css/components/loader.css";
import "../Styling/css/components/newHome.css";
import "../Styling/css/components/btn.css";
import "../Styling/css/components/home.css";
import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import Footer from "../components/Footer";
import PlayerComponent from "../components/Video";
import { useCart } from "../tools/CartContext";
import { handleAddToCart } from "../tools/CartHandlers";
import { useAuthHeader, useIsAuthenticated } from "react-auth-kit";

const slides = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/blogimgupload-3998a.appspot.com/o/Glee%2F6dc65678-3836-476a-83f1-c88b7f945068.jpg?alt=media&token=563bfedb-be7f-4259-ba8f-7eed99e0f2ba",
    id: 1,
  },
];
const bundles = [
  {
    previewImage:
      "https://firebasestorage.googleapis.com/v0/b/blogimgupload-3998a.appspot.com/o/Glee%2Fbundles-logo%2F1.png?alt=media&token=a7bb144b-3373-4e47-a0cc-cc999b727fd2",
    id: 100,
    title: "Shampoo & Conditioner",
    priceEg: 950,
    weight: "(350 + 350)",
  },
  {
    previewImage:
      "https://firebasestorage.googleapis.com/v0/b/blogimgupload-3998a.appspot.com/o/Glee%2Fbundles-logo%2F2.png?alt=media&token=f614ae62-b6b6-4539-89ae-2cdf0edb1d3f",
    id: 200,
    title: "Shampoo & Serum",
    priceEg: 1000,
    weight: "(350 + 50)",
  },
  {
    previewImage:
      "https://firebasestorage.googleapis.com/v0/b/blogimgupload-3998a.appspot.com/o/Glee%2Fbundles-logo%2F3.png?alt=media&token=c41ea716-749b-4f1b-b591-62e381dbeaad",
    id: 300,
    title: " Conditioner & Serum",
    priceEg: 1000,
    weight: "(350 + 50)",
  },
  {
    previewImage:
      "https://firebasestorage.googleapis.com/v0/b/blogimgupload-3998a.appspot.com/o/Glee%2Fbundles-logo%2F4.png?alt=media&token=ee83717d-8a41-4ad3-8735-219e8b7ada30",
    id: 400,
    title: "Shampoo, Serum & Conditioner",
    priceEg: 1400,
    weight: "(350 + 50 + 350)",
  },
];
const data = [
  {
    title: "ARGANILLA ARGAN OIL NOURISHING SHAMPOO",
    previewImage:
      "https://firebasestorage.googleapis.com/v0/b/blogimgupload-3998a.appspot.com/o/Glee%2FBlack%20Grey%20Minimal%20Color%20Branding%20Inclusive%20Skincare%20Instagram%20Post%20(1).png?alt=media&token=4cecdfb4-0649-43c6-bc55-a8d131f9dab1",
    firstImage:
      "https://firebasestorage.googleapis.com/v0/b/blogimgupload-3998a.appspot.com/o/Glee%2FIMG_5824.JPG?alt=media&token=9360fb83-f182-4dde-84d3-885acf0f622c",
    secondImage:
      "https://firebasestorage.googleapis.com/v0/b/blogimgupload-3998a.appspot.com/o/Glee%2FIMG_5570.JPG?alt=media&token=d0edfac4-80be-4ff5-861a-e059e16e98f0",
    id: 1,
    weight: 350,
    quantity: 300,
    priceEg: 500,
    first_available: "December 2023",
    expiry_date: "December 2026",
    product_batch: "S001",
    description:
      "<p>Promotes Hair Growthin Cases of Damaged Hair Moisturize and Soften Hair Strengthen Hair and Nourish Scalp. <ul><li>No SULFATES</li>NO PARABIENS<li>NO FORMALDEHYDE</li><li>NO DEA</li><li>NO ARTIFICIAL DYES</li><li>NO GLUTEN</li><li>NO PABA</li><li>NO MINERAL OIL</li><li>NO PETROLATUM</li><li>NO PARAFFIN</li><li>NO ANIMAL TESTING</li></ul></p>",

    suggestedUseData:
      "Apply Generously Amount to Wet Hair and Rub Gently for 3 Minutes Then Rinse Thoroughly with Water and Repeat the Use as When Needed.",

    otherIngredData:
      "<p>Aqua, Disodium Lauryl Sulfosuccinate, Glycerin, Cocamidopropyl Betaine, Cocamide Methyl Mea, Guar Hydroxypropyltrimonium Chloride, Sodium Lauroamphoacetate, Palmitamidopropyltrimonium Chloride, Peg-7 Glyceryl Cocoate, Polyquaternium-10, Hydrolyzed Barley Protein, Parfum, Piroctone Olamine, Disodium Edta, Phenoxyethanol, Sodium Benzoate, Sodium Hydroxide, Argania Spinosa Kernel Oil, Simmondsia Chinensis Seed Oil, Olea Europaea Fruit Oil, Helianthus Annuus Seed Oil, Butyrospermum Parkii Butter, Cocos Nucifera Oil, Panthenol, Hydrolyzed Wheat Protein, Hydrolyzed Keratin, Tocopherol, Rosmarinus Officinalis Leaf Extract, Serenoa Serrulata Fruit Extract, Panax Ginseng Extract, Caffeine, Ginkgo Biloba Leaf Extract.</p>",
    warning:
      "<ul><li>Avoid Contact With Eyes</li><li>Store at a Temperature Not Exceeding 30 C, In a Dry Place. </li><li>Keep Out Of Reach Of Children.</li><li>For External Use Only.</li></ul>",
  },
  {
    title: "ARGANILLA ARGAN OIL CONDITIONER",
    previewImage:
      "https://firebasestorage.googleapis.com/v0/b/blogimgupload-3998a.appspot.com/o/Glee%2FBlack%20Grey%20Minimal%20Color%20Branding%20Inclusive%20Skincare%20Instagram%20Post.png?alt=media&token=610bb7ef-551c-4642-92d5-c1b83489e6a1",
    firstImage:
      "https://firebasestorage.googleapis.com/v0/b/blogimgupload-3998a.appspot.com/o/Glee%2FIMG_5823.JPG?alt=media&token=2e4e692f-4672-4db9-8495-a33cf913db3f",
    secondImage:
      "https://firebasestorage.googleapis.com/v0/b/blogimgupload-3998a.appspot.com/o/Glee%2FIMG_5823.JPG?alt=media&token=2e4e692f-4672-4db9-8495-a33cf913db3f",
    id: 2,
    weight: 350,
    quantity: 300,
    priceEg: 500,
    first_available: "December 2023",
    expiry_date: "December 2026",
    product_batch: "B001",
    description:
      "<p>Promotes Hair Growth in Cases of Damaged Hair, Moisturize and Soften Hair, Strengthen Hair and Nourish Scalp. <ul><li>No SULFATES</li>NO PARABIENS<li>NO FORMALDEHYDE</li><li>NO DEA</li><li>NO ARTIFICIAL DYES</li><li>NO GLUTEN</li><li>NO PABA</li><li>NO MINERAL OIL</li><li>NO PETROLATUM</li><li>NO PARAFFIN</li><li>NO ANIMAL TESTING</li></ul></p>",

    suggestedUseData:
      "After Shampooing, Apply a Generous Amount on the Hair to the Ends, Leave for 5-10 Minutes and Massage Well, Then Rinse Thoroughly with Water. Use Is Repeated When Needed.",

    otherIngredData:
      "<p>Aqua, Cetyl Alcohol, Glycerin, Sorbitol Dimethicone, Argania Spinosa Kernel Oil, Hydroxyethylcellulose, Parfum, Phenoxyethanol, Citric Acid, Oryza Sativa Bran Extract, Aloe Barbadensis Leaf Juice, Cocos Nucifera Oil, Panthenol, Simmondsia Chinensis Seed Oil, Caprylic/Capric Triglyceride, Polyquaternium-10, Disodium EDTA, BHT, Triglyceride Hydrolyzed Wheat Protein, Hydrolyzed Keratin, Tocopherol, Rosmarinus Officinalis Leaf Extract, Serenoa Serrulata Fruit Extract, Panax Ginseng Extract, Ginkgo Biloba Leaf Extract.</p>",
    warning:
      "<ul><li>Avoid Contact With Eyes</li><li>Store at a Temperature Not Exceeding 30 C, In a Dry Place. </li><li>Keep Out Of Reach Of Children.</li><li>For External Use Only.</li></ul>",
  },
  {
    title: "ARGANILLA ARGAN OIL HAIR SERUM",
    previewImage:
      "https://firebasestorage.googleapis.com/v0/b/blogimgupload-3998a.appspot.com/o/Glee%2Fserum%20(1).png?alt=media&token=01ae2ea5-14ef-4e40-ab28-de4b9d955247",
    firstImage:
      "https://firebasestorage.googleapis.com/v0/b/blogimgupload-3998a.appspot.com/o/Glee%2F1%20(1).png?alt=media&token=c9cb66af-4c39-4214-bc39-632e8512719f",
    secondImage:
      "https://firebasestorage.googleapis.com/v0/b/blogimgupload-3998a.appspot.com/o/Glee%2F2%20(1).png?alt=media&token=08e3c8ab-6e97-4c1b-93d3-bd5e3a00ad5c",
    id: 3,
    weight: 160,
    quantity: 50,
    priceEg: 550,
    first_available: "December 2024",
    expiry_date: "December 2027",
    product_batch: "S001",
    description:
      "<p>Promotes Hair Growthin Cases of Damaged Hair Moisturize and Soften Hair Strengthen Hair and Nourish Scalp. <ul><li>No SULFATES</li>NO PARABIENS<li>NO FORMALDEHYDE</li><li>NO DEA</li><li>NO ARTIFICIAL DYES</li><li>NO GLUTEN</li><li>NO PABA</li><li>NO MINERAL OIL</li><li>NO PETROLATUM</li><li>NO PARAFFIN</li><li>NO ANIMAL TESTING</li></ul></p>",

    suggestedUseData:
      "On Clean and Damp Hair, Apply a Small Quantity on Hair of Scalp, Then Rub Gently for 3-5 Minutes, and Repeat the Use as When Needed.",

    otherIngredData:
      "<p>Cyclopentasiloxane, Dimethiconol, Dimethicone Argania Spinosa Kernel Oil, Linum Usitatissimum Seed Oil, Parfum, BHT, Caprylic/Capric Triglyceride, Tocopherol, Simmondsia Chinensis Seed Oil, CI 26100, CI 47000.</p>",
    warning:
      "<ul><li>Avoid Contact With Eyes</li><li>Store at a Temperature Not Exceeding 30 C, In a Dry Place. </li><li>Keep Out Of Reach Of Children.</li><li>For External Use Only.</li></ul>",
  },
];
const cards = [
  {
    title: "Unleash the Power of Argan Oil for Luxurious Hair Care",
    content: `Glee Herb unlocks the secrets of Morocco's "liquid gold," argan oil. Our exquisite argan oil-infused shampoos, conditioners, and serums elevate your hair care routine to new heights. Experience the transformative power of nature's most precious oil, formulated for ultimate nourishment and shine.`,
  },
  {
    title: "Nourish, Restore, Transform: The Glee Herb Argan Oil Collection",
    content:
      "Dry, damaged, or lackluster hair? Glee Herb's argan oil collection offers a solution for every hair concern. Our shampoos gently cleanse and revitalize, while conditioners deeply nourish and detangle. For an extra touch of luxury, our argan oil serums provide intense hydration, manageability, and a radiant, healthy shine.",
  },
  {
    title: "Confidence & Care: The Glee Herb Argan Oil Collection",
    content:
      "Experience the peace of mind that comes with knowing your hair is in good hands. Glee Herb's argan oil collection is formulated with the highest quality ingredients, ensuring the best possible care plus, our dedicated customer support team is always here to answer your questions and provide assistance.",
  },
];
function NewHome({ toggleCart }) {
  const [hovered, setHovered] = useState(null);
  const { dispatch } = useCart();
  const autha = useAuthHeader();
  const isAuth = useIsAuthenticated();
  const userToken = autha().slice(6);
  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div>
      <div className="home-container">
        <div className="home-video">
          <PlayerComponent />
        </div>
        <div className="popular-header-container">
          <h2>Our Products</h2>
        </div>
        <div className="popular-container row gap-3">
          {data.map((product, index) => (
            <div className=" col-9-xs col-5-sm col-4-md col-3-xl">
              <Link to={`/product/${product.id}`}>
                <div
                  className={`popular-product-card ${
                    hovered === index ? "product-hovered" : ""
                  }`}
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={
                      hovered === index
                        ? product.firstImage
                        : product.previewImage
                    }
                    className="product-img "
                  />
                  <div className="popular-product-info">
                    <h2 className="popular-product-title">{product.title}</h2>
                    <h3 className="popular-product-price">
                      {product.priceEg} L.E.
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="popular-header-container">
          <h2>Bundles</h2>
        </div>
        <div className="popular-container row gap-20">
          {bundles.map((product) => (
            <div
              className="popular-product-card col-9-xs col-5-sm col-5-md col-4-xl cursor-pointer	"
              onClick={() => {
                toggleCart();
                handleAddToCart(dispatch, userToken, isAuth(), product);
              }}
            >
              <div className="popular-product-img">
                <img src={product.previewImage} />
              </div>
              <div className="popular-product-info">
                <h2 className="popular-product-title">
                  {product.title}
                  <br />
                </h2>
                <br />

                <h3 className="popular-product-price">
                  {product.priceEg} L.E.
                </h3>
              </div>
            </div>
          ))}
          <div className="banner">
            <h2 className="banner-header">What is Glee Herb</h2>
            <div className="banner-cards">
              {cards.map((card) => {
                return (
                  <div className="banner-single-card">
                    <div className="banner-card-title">{card.title}</div>
                    <div className="banner-card-content">{card.content}</div>
                  </div>
                );
              })}
            </div>
            <div className="banner-question">
              <h2>Have a question? Well, we’ve got some answers.</h2>
              <Link className="contact-btn" to={"/inquiry"}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-slider">
        <ImageSlider slides={slides} />
      </div>

      <Footer />
    </div>
  );
}

export default NewHome;
