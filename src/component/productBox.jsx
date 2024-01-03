function Productbox(prop) {
  return (
    <>
      <div className="product-box" >
        <div className="product-image-box" >
          <img src={prop.image} alt="product image" />
        </div>
        <p>chair</p>
        <h3>Golden easy spot chair</h3>
        <h4>$210.00</h4>
      </div>
    </>
  );
}

export default Productbox;
