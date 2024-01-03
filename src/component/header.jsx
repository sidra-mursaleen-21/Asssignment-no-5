import Logo from "./logo";
import image from "/image-1.png";
import image_2 from '/image-2.png';
import Button from "./button";

function Header() {
  return (
    <>
      <header>
        <nav>
          <Logo image={image_2}  />

          <ul>
            <li>home</li>
            <li>shop</li>
            <li>mens</li>
            <li>pages</li>
            <li>blog</li>
            <li>contact</li>
          </ul>
          <div className="icon-container">
            <i class="fa-solid fa-cart-shopping"></i>
            <p>2 Items</p>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </nav>
        <div className="header">
          <div className="header-content">
            <img width={"500px"} src={image} alt="image" />
            <div>
              <h3>30% off</h3>
              <h2>comfort chair</h2>
              <p>collect from daxone & get 30% discount.</p>
              <Button/>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
