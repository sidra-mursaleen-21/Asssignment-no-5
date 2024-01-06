import Logo from "./logo";
import image from "/image-1.webp";
import image_2 from "/image-2.png";
import Button from "./button";

function Header() {
  const hamburgerNavbar = () => {
    let nav_menu = document.querySelector(".nav-menu");

    nav_menu.classList.toggle("active");
  };

  return (
    <>
      <header>
        <nav>
          <Logo image={image_2} />
          <ul className="nav-menu">
            <li>home</li>
            <li>shop</li>
            <li>mens</li>
            <li>pages</li>
            <li>blog</li>
            <li>contact</li>
            <div className="icon-container">
              <i className="fa-solid fa-cart-shopping"></i>
              <p>2 Items</p>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </ul>
          <button onClick={hamburgerNavbar} className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </nav>
        <div className="header">
          <div className="header-content">
            <div className="header-image-conatiner" >
            <img width={"300px"} height={"100%"} src={image} alt="image" />
            </div>
            <div className="content-box" >
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
