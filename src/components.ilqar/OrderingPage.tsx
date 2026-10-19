import { useState, useEffect } from "react";
import "./OrderingPage.css";

// Doğru import yolu (eyni qovluqdadırlar)
import { products as mockProducts, type Product } from "./Products";
import DeliveryModal from "../components.ilqar/Deliverymodal";

import Rectangle44 from "../assets.ilqar/Rectangle 44.svg";
import Order from "../assets.ilqar/Order Completed.svg";
import Motocross from "../assets.ilqar/Motocross.svg";
import Clock from "../assets.ilqar/Clock.svg";
import Search from "../assets.ilqar/Search More.svg";
import RestaurantMenu from "../assets.ilqar/Restaurant Menu.svg";
import ForwardButton from "../assets.ilqar/Forward Button.svg";
import Clockk from "../assets.ilqar/Clock (1).svg";
import FullShoppingBasket from "../assets.ilqar/Full Shopping Basket.svg";
import Rectangle46 from "../assets.ilqar/Rectangle 46.svg";
import Remove from "../assets.ilqar/Remove.svg";
import Remsmiling from "../assets.ilqar/smiling-woman-looking-smartphone-screen-260nw-2473271405.jpg";
import ForwardButtonn from "../assets.ilqar/Forward Button (1).svg";
import DeliveryScooter from "../assets.ilqar/Delivery Scooter.svg";
import NewStore from "../assets.ilqar/New Store.svg";
import Checkout from "../assets.ilqar/Rectangle 83.svg";
import Tracking from "../assets.ilqar/Tracking.svg";
import IDVerified from "../assets.ilqar/ID Verified.svg";
import Rectangle52 from "../assets.ilqar/Rectangle 52.svg";
import Sol from "../assets.ilqar/sol.svg";
import Sag from "../assets.ilqar/sag.svg";
import Ellipse3 from "../assets.ilqar/Ellipse 3.svg";
import Mcdonalds from "../assets.ilqar/Rectangle 13.svg";

const ICONS = {
  chili: "/icons/chili.svg",
  leaf: "/icons/leaf.svg",
  reviewClock: "/icons/review-clock.svg",
  plus: "/icons/plus.svg",
};
// 
const categories = [
  "Pizzas",
  "Garlic Bread",
  "Calzone",
  "Kebabas",
  "Salads",
  "Cold drinks",
  "Happy Meal®️",
  "Desserts",
  "Hot drinks",
  "Sauces",
  "Orbit®️",
];

const PIZZA_DESC =
  "1 McChicken™️, 1 Big Mac™️, 1 Royal\nCheeseburger, 3 medium sized French Fries ,\n3 cold drinks";

const basketItems = [
  { qty: "1x", price: "£27.90", name: '12" Vegitarian Pizza', desc: "No Mushrooms + green peppers" },
  { qty: "1x", price: "£17.90", name: '17" Tandoori Pizza', desc: "No Mushrooms + green peppers" },
  { qty: "2x", price: "£4.90", name: "Coke Coca Cola", desc: "" },
];

const deliveryHours: [string, string][] = [
  ["Monday", "12:00 AM–3:00 AM, 8:00 AM–3:00 AM"],
  ["Tuesday", "8:00 AM–3:00 AM"],
  ["Wednesday", "8:00 AM–3:00 AM"],
  ["Thursday", "8:00 AM–3:00 AM"],
  ["Friday", "8:00 AM–3:00 AM"],
  ["Saturday", "8:00 AM–3:00 AM"],
  ["Sunday", "8:00 AM–12:00 AM"],
];

const operationalHours: [string, string][] = [
  ["Monday", "8:00 AM–3:00 AM"],
  ["Tuesday", "8:00 AM–3:00 AM"],
  ["Wednesday", "8:00 AM–3:00 AM"],
  ["Thursday", "8:00 AM–3:00 AM"],
  ["Friday", "8:00 AM–3:00 AM"],
  ["Saturday", "8:00 AM–3:00 AM"],
  ["Sunday", "8:00 AM–3:00 AM"],
];

const REVIEW_TEXT =
  "The positive aspect was undoubtedly the efficiency of\nthe service. The queue moved quickly, the staff was\nfriendly, and the food was up to the usual McDonald's\nstandard – hot and satisfying.";

const reviews = [1, 2, 3].map((id) => ({
  id,
  name: "St Glx",
  location: "South London",
  date: "24th September, 2023",
  text: REVIEW_TEXT,
}));

const similarRestaurants = [
  { name: "McDonald’s London", logo: Mcdonalds, bg: "#da291c" },
  { name: "Papa Johns", logo: Mcdonalds, bg: "#0b6a35" },
  { name: "KFC West London", logo: Mcdonalds, bg: "#e8272d" },
  { name: "Texas Chicken", logo: Mcdonalds, bg: "#ffffff" },
  { name: "Burger King", logo: Mcdonalds, bg: "#f5a340" },
  { name: "Shaurma 1", logo: Mcdonalds, bg: "#ffffff" },
];

const RatingStars = () => (
  <div className="rating-stars">
    <span>★★★</span>
    <span className="half">★</span>
    <span className="off">★</span>
  </div>
);

export default function OrderingPage() {
  const [activeCategory, setActiveCategory] = useState("Pizzas");
  const [productList, setProductList] = useState<Product[]>(mockProducts);
  
  const [apiData, setApiData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<string>("default");

  // Delivery / postcode modal
  const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState<boolean>(false);
  const [orderMode, setOrderMode] = useState<"delivery" | "collection">("delivery");
  const [deliveryPostcode, setDeliveryPostcode] = useState<string | null>(null);

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    if (cat === "Pizzas") {
      setIsDeliveryModalOpen(true);
    }
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Məlumatı əldə etmək mümkün olmadı!');
        }
        return response.json();
      })
      .then((json) => {
        setApiData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleSort = (order: string) => {
    setSortOrder(order);
    setIsSortOpen(false);

    let sorted = [...productList];
    if (order === "asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (order === "desc") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (order === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    setProductList(sorted);
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "100px", fontSize: "20px", fontWeight: "600" }}>
        Məlumatlar yüklənir, zəhmət olmasa gözləyin...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "100px", color: "red", fontSize: "18px", fontWeight: "600" }}>
        Xəta baş verdi: {error}
      </div>
    );
  }

  return (
    <div className="restaurant-page">
      <DeliveryModal
        open={isDeliveryModalOpen}
        onClose={() => setIsDeliveryModalOpen(false)}
        onDelivery={(postcode) => {
          setOrderMode("delivery");
          setDeliveryPostcode(postcode);
        }}
        onCollect={() => {
          setOrderMode("collection");
          setDeliveryPostcode(null);
        }}
      />

      <div className="container">

        {apiData && (
          <div style={{ background: "#f8f9fa", padding: "15px 20px", marginBottom: "20px", borderRadius: "8px", border: "1px solid #ddd" }}>
            <h4 style={{ margin: "0 0 8px 0", color: "#0b873e" }}>API-dən Gələn Test Məlumatı (JSONPlaceholder):</h4>
            <p style={{ margin: 0, fontSize: "14px" }}><strong>Başlıq:</strong> {apiData.title}</p>
          </div>
        )}

        <section className="hero">
          <div className="hero-text">
            <p className="hero-tagline">Desi Flavours with a blend of Italian aesthetics!</p>
            <h1 className="hero-title">Tandoori Pizza London</h1>
            <div className="hero-pills">
              <span className="pill">
                <img className="icon-24" src={Order} alt="" />
                Minimum Order: 12 GBP
              </span>
              <span className="pill">
                <img className="icon-24" src={Motocross} alt="" />
                Delivery in 20-25 Minutes
              </span>
            </div>
          </div>

          <div className="hero-rating">
            <div className="rating-score">3.4</div>
            <RatingStars />
            <div className="rating-count">1,360 reviews</div>
          </div>

          <div className="hero-photo">
            <img src={Rectangle44} alt="Tandoori Pizza London" />
          </div>

          <div className="open-badge">
            <img className="icon-24" src={Clock} alt="" />
            Open until 3:00 AM
          </div>
        </section>

        <div className="order-header">
          <h2 className="order-title">Order from Tandoori Pizza London</h2>
          <label className="search-box">
            <img className="icon-16" src={Search} alt="" />
            <input type="text" placeholder="Search from menu..." />
          </label>
        </div>

        <div className="order-layout">
          <aside>
            <nav className="sidebar-menu">
              <div className="sidebar-head">
                <img className="icon-40" src={RestaurantMenu} alt="" />
                Menu
              </div>
              <ul className="sidebar-list">
                {categories.map((cat) => (
                  <li key={cat} className="sidebar-item">
                    <button
                      type="button"
                      className={`category-btn ${activeCategory === cat ? "is-active" : ""}`}
                      onClick={() => handleCategoryClick(cat)}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="promo">
              <img className="promo-img" src={Remsmiling} alt="First order discount" />
              <span className="promo-badge">-20%</span>
              <div className="promo-text">
                <span className="promo-label">Special Offer</span>
                <span className="promo-title">First Order Discount</span>
              </div>
              <button type="button" className="promo-plus" aria-label="Show offer">
                <img className="icon-14" src={ICONS.plus} alt="" />
              </button>
            </div>
          </aside>

          {/* Middle: Products from Mock Data */}
          <main>
            <div className="menu-head" style={{ position: "relative" }}>
              <h2 className="menu-title">Products</h2>
              
              <div style={{ position: "relative" }}>
                <button 
                  type="button" 
                  className="sort-btn"
                  onClick={() => setIsSortOpen(!isSortOpen)}
                >
                  {sortOrder === "asc" ? "Qiymət: Artan" : sortOrder === "desc" ? "Qiymət: Azalan" : sortOrder === "name" ? "Ada görə (A-Z)" : "Sort by Pricing"}
                  <img className="icon-20" src={ForwardButton} alt="" />
                </button>

                {isSortOpen && (
                  <div className="sort-popup-dropdown">
                    <button type="button" onClick={() => handleSort("asc")}>Qiymətə görə (Artan)</button>
                    <button type="button" onClick={() => handleSort("desc")}>Qiymətə görə (Azalan)</button>
                    <button type="button" onClick={() => handleSort("name")}>Ada görə (A-Z)</button>
                  </div>
                )}
              </div>
            </div>

            {productList.map((product) => (
              <article className="pizza-card" key={product.id}>
                <h3 className="pizza-name">{product.name}</h3>
                <div className="pizza-spice">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      className={i < Math.round(product.rating) ? "spice-icon" : "spice-icon is-off"}
                      src={ICONS.chili}
                      alt=""
                    />
                  ))}
                </div>
                <p className="pizza-desc">{PIZZA_DESC}</p>

                <div className="size-row">
                  <button type="button" className="size-btn is-selected">
                    <span>Standard</span>
                    <span className="price-tag">${product.price}</span>
                  </button>
                </div>

                <img className="pizza-img" src={Rectangle46} alt={product.name} />
              </article>
            ))}
          </main>

          {/* Right: basket */}
          <aside>
            <div className="open-box">
              <img className="icon-38" src={Clockk} alt="" />
              Open until 3:00 AM
            </div>

            <div className="basket">
              <div className="basket-head">
                <img className="icon-48" src={FullShoppingBasket} alt="" />
                My Basket
              </div>

              {basketItems.map((item, i) => (
                <div className="basket-item" key={i}>
                  <span className="qty">{item.qty}</span>
                  <div className="basket-item-text">
                    <div className="basket-price">{item.price}</div>
                    <div className="basket-name">{item.name}</div>
                    {item.desc && <div className="basket-desc">{item.desc}</div>}
                  </div>
                  <img className="icon-19 basket-trash" src={Remove} alt="" />
                </div>
              ))}

              <div className="basket-summary">
                <div className="summary-row">
                  <span className="summary-label">Sub Total:</span>
                  <span className="summary-value">£127.90</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Discounts:</span>
                  <span className="summary-value">-3.00</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Delivery Fee:</span>
                  <span className="summary-value">2.50</span>
                </div>
              </div>

              <div className="basket-controls">
                <div className="total-box">
                  <span className="total-label">Total to pay</span>
                  <span className="total-amount">£127.90</span>
                </div>
                <button type="button" className="pill-btn">
                  Choose your free item..
                  <img className="icon-19" src={ForwardButton} alt="" />
                </button>
                <button type="button" className="pill-btn">
                  Apply Coupon Code here
                  <img className="icon-19" src={ForwardButtonn} alt="" />
                </button>
              </div>

              <div className="basket-footer">
                <div className="delivery-tabs">
                  <div className={`delivery-tab ${orderMode === "delivery" ? "is-active" : ""}`}>
                    <img className="icon-30" src={DeliveryScooter} alt="" />
                    <span className="tab-title">Delivery</span>
                    <span className="tab-sub">
                      {deliveryPostcode ? deliveryPostcode : "Starts at 17:50"}
                    </span>
                  </div>
                  <div className={`delivery-tab ${orderMode === "collection" ? "is-active" : ""}`}>
                    <img className="icon-30" src={NewStore} alt="" />
                    <span className="tab-title">Collection</span>
                    <span className="tab-sub">Starts at 16:50</span>
                  </div>
                </div>
                <button type="button" className="checkout-btn">
                  <img className="icon-24" src={Checkout} alt="" />
                  Checkout!
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* ---------- Delivery / contact / operational times ---------- */}
        <section className="info-card">
          <div className="info-left">
            <div>
              <h3 className="info-heading">
                <img className="icon-32" src={Tracking} alt="" />
                Delivery information
              </h3>
              {deliveryHours.map(([day, time]) => (
                <p className="info-line" key={day}>
                  <strong>{day}:</strong> {time}
                </p>
              ))}
              <p className="info-line">
                <strong>Estimated time until delivery:</strong> 20 min
              </p>
            </div>

            <div>
              <h3 className="info-heading">
                <img className="icon-32" src={IDVerified} alt="" />
                Contact information
              </h3>
              <p className="info-line">
                If you have allergies or other dietary
                <br />
                restrictions, please contact the restaurant.
              </p>
              <p className="info-line">
                <strong>Phone number</strong>
              </p>
              <p className="info-line info-value">+934443-43</p>
              <p className="info-line">
                <strong>Website</strong>
              </p>
              <p className="info-line info-value">http://mcdonalds.uk/</p>
            </div>
          </div>

          <div className="info-right">
            <h3 className="info-heading">
              <img className="icon-32" src={Clock} alt="" />
              Operational Times
            </h3>
            {operationalHours.map(([day, time]) => (
              <p className="info-line" key={day}>
                <strong>{day}:</strong> {time}
              </p>
            ))}
          </div>
        </section>

        {/* ---------- Map ---------- */}
        <section className="map-card">
          <img className="map-img" src={Rectangle52} alt="Map" />
          <div className="map-info">
            <h3 className="map-name">McDonald’s</h3>
            <div className="map-area">South London</div>
            <p className="map-address">
              Tooley St, London Bridge, London SE1 2TF,
              <br />
              United Kingdom
            </p>
            <div className="map-label">Phone number</div>
            <div className="map-value">+934443-43</div>
            <div className="map-label">Website</div>
            <div className="map-value">http://mcdonalds.uk/</div>
          </div>
        </section>
      </div>

      {/* ---------- Customer reviews ---------- */}
      <section className="reviews">
        <div className="container">
          <div className="reviews-head">
            <h2 className="section-title">Customer Reviews</h2>
            <div className="carousel-btns">
              <button type="button" className="carousel-btn" aria-label="Previous reviews">
                <img className="icon-24" src={Sol} alt="" />
              </button>
              <button type="button" className="carousel-btn" aria-label="Next reviews">
                <img className="icon-24" src={Sag} alt="" />
              </button>
            </div>
          </div>

          <div className="reviews-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.id}>
                <div className="review-top">
                  <img className="review-avatar" src={Ellipse3} alt="" />
                  <span className="review-divider" />
                  <div className="review-who">
                    <div className="review-name">{review.name}</div>
                    <div className="review-place">{review.location}</div>
                  </div>
                  <div className="review-meta">
                    <div className="review-stars">★★★★★</div>
                    <div className="review-date">
                      <img className="icon-14" src={ICONS.reviewClock} alt="" />
                      {review.date}
                    </div>
                  </div>
                </div>
                <p className="review-text">{review.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="reviews-rating">
          <div className="rating-score">3.4</div>
          <RatingStars />
          <div className="rating-count">1,360 reviews</div>
        </div>
      </section>

      {/* ---------- Similar restaurants ---------- */}
      <div className="container">
        <h2 className="similar-title">Similar Restaurants</h2>
        <div className="similar-grid">
          {similarRestaurants.map((r, index) => (
            <article className="similar-card" key={index}>
              <div className="similar-logo" style={{ backgroundColor: r.bg }}>
                <img src={r.logo} alt="" />
              </div>
              <div className="similar-name">{r.name}</div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}