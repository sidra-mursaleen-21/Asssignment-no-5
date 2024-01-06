import Content from "./content";
import Productbox from "./productBox";
import Product_detail from "./Product-detail";
import product_image_1 from "/product-image-1.png";
import product_image_2 from "/product-image-2.png";
import product_image_3 from "/product-image-3.png";
import product_image_4 from "/product-image-4.png";
import product_image_5 from "/product-image-5.png";
import product_image_6 from "/product-image-6.png";
import product_image_7 from "/product-image-7.png";
import product_image_8 from "/product-image-8.png";
import image_3 from "/image-5.png";
import Button from "./button";
import { useState } from "react";

function About() {
  const [detail, showDetail] = useState(false);

  const showProductDetail = () => {
    console.log("correct");
    showDetail(!detail);
  };

  return (
    <>
      {detail ? (
        <Product_detail />
      ) : (
        <div className="main-container">
          <div className="mainbox1"></div>
          <Content heading="best sell" />
          <div className="product-container">
            <Productbox image={product_image_1} onClick={showProductDetail} />
            <Productbox image={product_image_2} onClick={showProductDetail}/>
            <Productbox image={product_image_3} onClick={showProductDetail}/>
            <Productbox image={product_image_4} onClick={showProductDetail}/>
          </div>
          <div className="mini-container">
            <div className="image-container">
              <img src={image_3} alt="image" />
            </div>
            <div className="image-content">
              <p>
                Lorem ipsum is simply dummy text of the printing and type
                setting industry.
              </p>
              <h1>
                winter discount <br />
                up to 30%
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking it's layout.
              </p>
              <Button />
            </div>
          </div>
          <Content heading="all products" />
          <div className="product-container">
            <Productbox image={product_image_1} onClick={showProductDetail} />
            <Productbox image={product_image_2} onClick={showProductDetail}/>
            <Productbox image={product_image_3} onClick={showProductDetail}/>
            <Productbox image={product_image_4} onClick={showProductDetail}/>
          </div>
          <div className="product-container">
            <Productbox image={product_image_5} onClick={showProductDetail}/>
            <Productbox image={product_image_6} onClick={showProductDetail}/>
            <Productbox image={product_image_7} onClick={showProductDetail}/>
            <Productbox image={product_image_8} onClick={showProductDetail}/>
          </div>
        </div>
      )}
    </>
  );
}

export default About;
