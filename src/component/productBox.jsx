import product_image from "/product-detail-image.webp";

function Productbox(prop) {

  return (
    <>
      <div className="product-box">
        <div onClick={prop.onClick} className="product-image-box">
          <img src={prop.image} alt="product image" />
        </div>
        <div className="product-content">
          <p>chair</p>
          <h3>Golden easy spot chair</h3>
          <h4>$210.00</h4>
        </div>
      </div>
    </>
  );
}

export default Productbox;
