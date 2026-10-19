
import food from '../assets/Rectangle 44.jpg'
const Group23: React.FC = () => {
  return (
    <div className="restaurant-page">
      <div className="restaurant-banner">
       

        <div className="restaurant-info">
          <p className="restaurant-title">I'm lovin' it!</p>

          <h1>McDonald’s East London</h1>

          <div className="restaurant-details">
            <div className="detail-badge">
              <span className="detail-icon">▤</span>
              <span>Minimum Order: 12 GBP</span>
            </div>

            <div className="detail-badge">
              <span className="detail-icon">♿</span>
              <span>Delivery in 20–25 Minutes</span>
            </div>
          </div>

          <div className="opening-status">
            <span>◷</span>
            <span>Open until 3:00 AM</span>
          </div>
        </div>

        <div className="restaurant-image">
          <img src={food}/>
        </div>

        <div className="rating-card">
          <div className="rating-number">3.4</div>
          <div className="rating-stars">★★★★</div>
          <div className="rating-reviews">1,360 reviews</div>
        </div>
      </div>

      <div className="offers-section">
        <h2>All Offers from McDonald’s East London</h2>

        <div className="menu-search">
          <span className="search-icon">⌕</span>
          <input
            type="text"
            placeholder="Search from menu..."
           
          />
        </div>
      </div>
    </div>
  );
};

export default Group23;