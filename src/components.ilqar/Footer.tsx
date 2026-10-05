import "./Footer.css";

const appStoreIcon = "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/svgs/brands/apple.svg";
const googlePlayIcon = "";

const facebookIcon = "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/svgs/brands/facebook.svg";
const instagramIcon = "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/svgs/brands/square-instagram.svg";
const tiktokIcon = "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/svgs/brands/tiktok.svg";
const snapchatIcon = "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/svgs/brands/snapchat.svg";

const stats = [
  { value: "546+", label: "Registered Riders" },
  { value: "789,900+", label: "Orders Delivered" },
  { value: "690+", label: "Restaurants Partnered" },
  { value: "17,457+", label: "Food items" },
];

const legalLinks = [
  "Terms and conditions",
  "Privacy",
  "Cookies",
  "Modern Slavery Statement",
];

const importantLinks = [
  "Get help",
  "Add your restaurant",
  "Sign up to deliver",
  "Create a business account",
];

const bottomLinks = [
  "Privacy Policy",
  "Terms",
  "Pricing",
  "Do not sell or share my personal information",
];

function Footer() {
  const handleSubscribe = (event: React.FormEvent) => {
  event.preventDefault();
};

  return (
    <footer className="order-footer">
      <div className="stats-bar">
        {stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="footer-content">
        <div className="footer-grid">

          {/* Brand column */}
          <div className="footer-col footer-brand">
            <div className="bran-logo">
              Order
              <span className="branl-badge">
                <span className="brand-badge-text">.UK</span>
              </span>
            </div>

            <div className="store-icons">
              <a href="#" className="store-badge">
                <img
                  src={appStoreIcon}
                  alt=""
                  className="store-badge-icon store-badge-icon--mono"
                />
                <span className="store-badge-text">
                  <span className="store-badge-line1">Download on the</span>
                  <span className="store-badge-line2">App Store</span>
                </span>
              </a>
              <a href="#" className="store-badge">
                {googlePlayIcon ? (
                  <img
                    src={googlePlayIcon}
                    alt=""
                    className="store-badge-icon"
                  />
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    className="store-badge-icon"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="6,4 6,20 10,12" fill="#3BCB5B" />
                    <polygon points="6,4 10,12 16,8.5" fill="#00D2FF" />
                    <polygon points="16,8.5 10,12 16,15.5 20,12" fill="#F9385B" />
                    <polygon points="6,20 10,12 16,15.5" fill="#FFCE00" />
                  </svg>
                )}
                <span className="store-badge-text">
                  <span className="store-badge-line1">GET IT ON</span>
                  <span className="store-badge-line2">Google Play</span>
                </span>
              </a>
            </div>

            <p className="company-info">
              Company # 490039-445, Registered with House of companies.
            </p>
          </div>

          <div className="footer-col footer-newsletter">
            <h4 className="footer-heading">Get Exclusive Deals in your Inbox</h4>

            <form className="subscribe-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                className="subscribe-input"
                placeholder="youremail@gmail.com"
                required
              />
              <button type="submit" className="subscribe-btn">
                Subscribe
              </button>
            </form>

            <p className="privacy-note">
              we wont spam, read our <a href="#">email policy</a>
            </p>

            <div className="social-icons">
              <a href="#" className="icon-slot" aria-label="Facebook">
                {facebookIcon && <img src={facebookIcon} alt="Facebook" />}
              </a>
              <a href="#" className="icon-slot" aria-label="Instagram">
                {instagramIcon && <img src={instagramIcon} alt="Instagram" />}
              </a>
              <a href="#" className="icon-slot" aria-label="TikTok">
                {tiktokIcon && <img src={tiktokIcon} alt="TikTok" />}
              </a>
              <a href="#" className="icon-slot" aria-label="Snapchat">
                {snapchatIcon && <img src={snapchatIcon} alt="Snapchat" />}
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Legal Pages</h4>
            <ul className="footer-links">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Important Links</h4>
            <ul className="footer-links">
              {importantLinks.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="footer-bottom-inner">
          <p className="copyright">Order.uk Copyright 2024, All Rights Reserved.</p>
          <ul className="bottom-links">
            {bottomLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;