import "../components.ilqar/Orderhero.css";
import partnerImg from "../assets.ilqar/Group 8.svg";
import riderImg from "../assets.ilqar/Group 16.svg";
import ManAndGirl from "../assets.ilqar/man and girl.svg"

const OrderHero = () => {
  return (
    <section className="oh">
      {/* ===== HERO BANNER ===== */}
      <div className="oh-hero">
        {/*
          SOL TARAF: Çift fotoğrafı / SVG alanı (BOŞ BIRAKILDI).
          Kendi SVG'ni veya <img> etiketini bu div'in İÇİNE koy.
          Örnek:
            <div className="oh-hero__image">
              <img src="/couple.svg" alt="" />
            </div>
        */}
        <div className="oh-hero__image">
  <img src={ManAndGirl} alt="Hero Banner" />
</div>

        <div className="oh-hero__content">
          <h1 className="oh-hero__title">
            Order
            <span className="oh-logo" aria-hidden="true">
              <span className="oh-logo__text">.UK</span>
            </span>
            ing is more
          </h1>

          <div className="oh-hero__pill">
            <span className="oh-hero__pill-accent">Personalised</span>
            <span> &amp; Instant</span>
          </div>

          <p className="oh-hero__subtitle">
            Download the Order.uk app for faster ordering
          </p>

          <div className="oh-stores">
            <a href="#" className="oh-store" aria-label="Download on the App Store">
              <svg className="oh-store__icon" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#fff"
                  d="M16.37 12.63c-.03-2.7 2.2-4 2.3-4.06-1.25-1.83-3.2-2.08-3.9-2.11-1.66-.17-3.24.98-4.08.98-.84 0-2.14-.96-3.52-.93-1.81.03-3.48 1.05-4.41 2.67-1.88 3.26-.48 8.09 1.35 10.74.9 1.3 1.97 2.75 3.37 2.7 1.35-.05 1.86-.87 3.5-.87 1.63 0 2.09.87 3.52.84 1.45-.02 2.37-1.32 3.26-2.62 1.03-1.5 1.45-2.95 1.48-3.02-.03-.01-2.84-1.09-2.87-4.32zM13.7 4.67c.74-.9 1.24-2.15 1.1-3.4-1.07.04-2.36.71-3.13 1.61-.69.8-1.29 2.07-1.13 3.29 1.19.09 2.4-.6 3.16-1.5z"
                />
              </svg>
              <span className="oh-store__text">
                <small>Download on the</small>
                <strong>App Store</strong>
              </span>
            </a>

            <a href="#" className="oh-store" aria-label="Get it on Google Play">
              <svg className="oh-store__icon" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#00d7fe" d="M3.6 1.5c-.3.3-.5.8-.5 1.4v18.2c0 .6.2 1.1.5 1.4l.1.1L13.9 12.4v-.2L3.7 1.4l-.1.1z" />
                <path fill="#ffce00" d="M17.3 15.8l-3.4-3.4v-.2l3.4-3.4.1.1 4 2.3c1.1.6 1.1 1.7 0 2.3l-4 2.2-.1.1z" />
                <path fill="#f6314d" d="M17.4 15.7L13.9 12.3 3.6 22.6c.4.4 1 .4 1.7.1l12.1-7z" />
                <path fill="#00f076" d="M17.4 8.9L5.3 1.9c-.7-.4-1.3-.3-1.7.1l10.3 10.3 3.5-3.4z" />
              </svg>
              <span className="oh-store__text">
                <small>GET IT ON</small>
                <strong>Google Play</strong>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ===== CARDS ===== */}
      <div className="oh-cards">
        {/* Business card */}
        <article className="oh-card oh-card--business">
          <img className="oh-card__image" src={partnerImg} alt="Chef holding a rolling pin" />

          <div className="oh-card__tab">Earn more with lower fees</div>

          <div className="oh-card__body">
            <span className="oh-card__kicker">Signup as a business</span>
            <h2 className="oh-card__title">Partner with us</h2>
            <button type="button" className="oh-btn">
              Get Started
            </button>
          </div>
        </article>

        {/* Rider card */}
        <article className="oh-card oh-card--rider">
          <img className="oh-card__image" src={riderImg} alt="Delivery rider giving a thumbs up" />

          <div className="oh-card__tab">Avail exclusive perks</div>

          <div className="oh-card__body">
            <button type="button" className="oh-btn">
              Get Started
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default OrderHero;