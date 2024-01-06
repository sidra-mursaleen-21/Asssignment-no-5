import Link_list from "./link-list";
import logo_image from "/logo.png";
import Logo from "./logo";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-box1">
            <Logo image={logo_image}/>
            <p>Follow us:</p>
            <div className="icon">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-pinterest-p"></i>
            </div>
          </div>
          <Link_list
            name="usefull link"
            list1="shopping cat"
            list2="wishlist"
            list3="checkout"
            list4="support"
          />
               <Link_list
            name="about us"
            list1="about"
            list2="products"
            list3="trems & conditions"
            list4="help center"
          />
          <div className="footer-box3">
            <h2>newsletter</h2>
            <p>subscribe to get all new updates</p>
            <input placeholder="enter your email" type="search" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
