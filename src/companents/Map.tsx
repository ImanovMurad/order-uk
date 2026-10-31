
import React from "react";
import map from '../assets/Rectangle 52 (1).jpg'

const Map: React.FC = () => {
  return (
    <div className="rectangle52-container">

    <div className="restaurant-map">
   
     <img src={map}/>

    
      <div className="rectangle52-info">
        <h2>McDonald’s</h2>

        <h3>South London</h3>

        <p className="restaurant-address">
          Tooley St, London Bridge, London SE1 2TF,
          <br />
          United Kingdom
        </p>

        <div className="info-item">
          <h4>Phone number</h4>
          <a href="tel:+93444343">+934443-43</a>
        </div>

        <div className="info-item">
          <h4>Website</h4>
          <a
            href="http://mcdonalds.uk/"
            target="_blank"
            rel="noreferrer"
          >
            
          </a>
        </div>
      </div>

     
      <div className="map-location">
        <div className="location-label">
          <strong>McDonald’s</strong>
          <span>South London</span>
        </div>

        <button
          className="location-arrow"
          type="button"
          aria-label="Geri qayıt"
          onClick={() => window.history.back()}
        >
          <span>‹</span>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Map;
