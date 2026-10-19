
import untitled from '../assets/Untitled-1_1-removebg-preview.png';
import untitled1 from '../assets/Untitled-2 1.jpg'

function Rectangle2()  {
  return (
    <div className="rectangle2">
      <div className="hero-orange-bg"></div>
      <div className="rectangle2-content">
        <p className="rectangle2-text">
          Order Restaurant food, takeaway and groceries.
        </p>

        <h1>
          Feast Your Senses.
          <br />
          <span>Fast and Fresh</span>
        </h1>

        <p className="rectangle2-text-1">
          Enter a postcode to see what we deliver
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="e.g. EC4R 3TE"
          />

          <button>
            Search
          </button>
        </div>
      </div>
      <div className="hero-woman">
        <img
        src={untitled} alt="woman"/>
      </div>

      <div className="hero-food">
        <img
          src={untitled1} alt="woman"/>
      </div>

      <div className="notification notification-one">
        <div className="notification-header">
          <p>
            Order<span>▮</span>
          </p>

          <span>now</span>
        </div>

        <p>We've received your order!</p>

        <span>Awaiting Restaurant acceptance</span>
      </div>

      <div className="notification notification-two">
        <div className="notification-header">
          <p>
            Order<span>▮</span>
          </p>
          <span>now</span>
        </div>
        <p>
          Order Accepted! &nbsp; ☑️
        </p>

        <span>Your order will be delivered shortly</span>
      </div>

      <div className="notification notification-three">
        <div className="notification-header">
          <p>
            Order<span>▮</span>
          </p>
          <span>now</span>
        </div>
        <p>
          Your rider's nearby 🎉
        </p>
        <span>They're almost there – get ready!</span>
      </div>

      <div className="step-number number-one">1</div>
      <div className="step-number number-two">2</div>
      <div className="step-number number-three">3</div>
    </div>
  );
};

export default Rectangle2;