import product_image from "/product-detail-image.webp";

export default function Product_detail() {
  return (
    <div className="product-detail">
      <div className="product-image">
        <img width={"100%"} height={"100%"} src={product_image} alt="image" />
      </div>
      <div className="product-detail-content">
        <p>life style</p>
        <h2>LaaVista Depro,FX 829 v1</h2>
        <div className="reviews-container">
          <div>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
          <p>40+ reviews</p>
        </div>
        <h3>Color:</h3>
        <div className="circle-container">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <h3>Size:</h3>
        <div className="size-container">
          <div className="size">S</div>
          <div className="size">P</div>
          <div className="size">XL</div>
          <div className="size">XXL</div>
        </div>
        <p>
          $210.00<del>$230.00</del>
        </p>
        <div className="quantity">
          <span>+</span>
          <span>02</span>
          <span>-</span>
        </div>
        <p className="cart" >Add To Cart</p>
      </div>
    </div>
  );
}
