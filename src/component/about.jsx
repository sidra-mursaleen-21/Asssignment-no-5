import image_1 from "/image-3.png";
import image_2 from "/image-4.png";
import Content from "./content";
import Productbox from "./productBox";
import product_image_1 from "/product-image-1.png";
import product_image_2 from "/product-image-2.png";
import product_image_3 from "/product-image-3.png";
import product_image_4 from "/product-image-4.png";
import product_image_5 from "/product-image-5.png";
import product_image_6 from "/product-image-6.png";
import product_image_7 from "/product-image-7.png";
import product_image_8 from "/product-image-8.png";
import image_3 from "/image-5.png"
import Button from "./button";

function About() {
  return (
    <>
      <div className="main-container">
        <div className="mainbox1">
          <img height={"300px"} width={"500px"} src={image_1} alt="image" />
          <div className="mainbox-content">
            <div>
              <h2>premium home decorator</h2>
              <p>learn more</p>
            </div>
            <img height={"200px"} width={"150px"} src={image_2} alt="image" />
          </div>
        </div>
        <Content heading="best sell"/>
        <div className="product-container">
          <Productbox image={product_image_1} />
          <Productbox image={product_image_2} />
          <Productbox image={product_image_3} />
          <Productbox image={product_image_4} />
        </div>
        <div className="mini-container">
          <div className="image-container" >
            <img width={"650px"} height={"550px"} src={image_3} alt="image" />
          </div>
          <div className="image-content" >
            <p>Lorem ipsum is simply dummy text of the printing and type setting industry.</p>
          <h1>winter discount <br />up to 30%</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking it's layout.</p>
          <Button/>
          </div>
        </div>
        <Content heading="all products"/>
        <div className="product-container">
          <Productbox image={product_image_1} />
          <Productbox image={product_image_2} />
          <Productbox image={product_image_3} />
          <Productbox image={product_image_4} />
        </div>
        <div className="product-container">
          <Productbox image={product_image_5} />
          <Productbox image={product_image_6} />
          <Productbox image={product_image_7} />
          <Productbox image={product_image_8} />
        </div>
      </div>
    </>
  );
}

export default About;
