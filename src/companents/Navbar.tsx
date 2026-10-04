import logo from '../assets/LOGO 1.jpg';
import {Link} from "react-router-dom"


function Navbar()  {
  return (
    <header className="navbar-wrapper">
      <div className="top-bar">
        <div className="icon">
        
          <span>
            Get 5% Off your first order.
            <a href="#"> Promo: ORDERS</a>
          </span>
        </div>

        <div className="location">
          <span className="location-icon">●</span>
          <span>Regent Street, A4, A4201, London</span>
          <a href="#">Change Location</a>
        </div>

    
        <div className="cart-info">
          <div className="cart-icon">🛍️</div>
          <div className="cart-items">23 Items</div>
          <div className="cart-price">GBP 79.89</div>
          <button className="cart-button">↓</button>
        </div>
      </div>

      <div className="main-navbar">
       
        <div className="navbar-logo">
          <img src={logo} alt="Sayt Loqosu" className="logo-img" />
        </div>

        <nav className="nav">

          <Link to="/">Home</Link>

          <Link to="/Browsemenu">Browse Menu</Link>

          <Link to="/Specialoffers">Special Offers</Link>

          <Link to="/Restaurants">Restaurants</Link>

          <Link to="/Trackorder">Track Order</Link>

        </nav>

       
        <div className="auth-buttons">
          <button className="login-btn">
            <span>Login</span>
          </button>
          <button className="login-btn">
            <span>Signup</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;