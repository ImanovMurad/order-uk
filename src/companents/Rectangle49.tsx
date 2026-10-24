
import React from "react";


const deliveryTimes = [
  { day: "Monday", time: "12:00 AM–3:00 AM, 8:00 AM–3:00 AM" },
  { day: "Tuesday", time: "8:00 AM–3:00 AM" },
  { day: "Wednesday", time: "8:00 AM–3:00 AM" },
  { day: "Thursday", time: "8:00 AM–3:00 AM" },
  { day: "Friday", time: "8:00 AM–3:00 AM" },
  { day: "Saturday", time: "8:00 AM–3:00 AM" },
  { day: "Sunday", time: "8:00 AM–12:00 AM" },
];

const operationalTimes = [
  { day: "Monday", time: "8:00 AM–3:00 AM" },
  { day: "Tuesday", time: "8:00 AM–3:00 AM" },
  { day: "Wednesday", time: "8:00 AM–3:00 AM" },
  { day: "Thursday", time: "8:00 AM–3:00 AM" },
  { day: "Friday", time: "8:00 AM–3:00 AM" },
  { day: "Saturday", time: "8:00 AM–3:00 AM" },
  { day: "Sunday", time: "8:00 AM–3:00 AM" },
];

const Rectangle49: React.FC = () => {
  return (
    <div className="rectangle49-info">
      {/* Delivery information */}
      <div className="info-section delivery-section">
        <h2>
          <span className="rectangle49-icon">✦</span>
          Delivery information
        </h2>

        <div className="rectangle49-list">
          {deliveryTimes.map((item) => (
            <p key={item.day}>
              <strong>{item.day}:</strong> {item.time}
            </p>
          ))}
        </div>

        <p className="delivery-estimate">
          <strong>Estimated time until delivery:</strong> 20 min
        </p>
      </div>

      {/* Contact information */}
      <div className="info-section contact-section">
        <h2>
          <span className="rectangle49-icon">♧</span>
          Contact information
        </h2>

        <p className="contact-description">
          If you have allergies or other dietary restrictions, please contact
          the restaurant. The restaurant will provide food-specific information
          upon request.
        </p>

        <div className="contact-detail">
          <strong>Phone number</strong>
          <a href="tel:+93444343">+934443-43</a>
        </div>

        <div className="contact-detail">
          <strong>Website</strong>
          <a
            href="http://mcdonalds.uk/"
            target="_blank"
            rel="noreferrer"
          >
            http://mcdonalds.uk/
          </a>
        </div>
      </div>

     
      <div className="info-section operational-section">
        <h2>
          <span className="rectangle49-icon">◷</span>
          Operational Times
        </h2>

        <div className="rectangle49-list1">
          {operationalTimes.map((item) => (
            <p key={item.day}>
              <strong>{item.day}:</strong> {item.time}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rectangle49;
