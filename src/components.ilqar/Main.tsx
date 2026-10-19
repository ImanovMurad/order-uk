import { useState } from "react";
import "./Main.css"
import orderfood from "../assets.ilqar/order-food 1.svg"
import Trackprogress from "../assets.ilqar/Track Progress.svg"
import GetyourOrder from "../assets.ilqar/GetyourOrder!.svg"


const IMAGE_PLACE_ORDER = orderfood; 
const IMAGE_TRACK_PROGRESS = Trackprogress; 
const IMAGE_GET_ORDER = GetyourOrder; 

const TABS = [
  { id: "faq", label: "Frequent Questions", style: { color: "red" } }, 
  { id: "about", label: "Who we are?" },
  { id: "partner", label: "Partner Program" },
  { id: "support", label: "Help & Support" },
];

const QUESTIONS = [
  { id: "how-it-works", label: "How does Order.UK work?" },
  { id: "payment", label: "What payment methods are accepted?" },
  { id: "tracking", label: "Can I track my order in real-time?" },
  {
    id: "discounts",
    label: "Are there any special discounts or promotions available?",
  },
  { id: "area", label: "Is Order.UK available in my area?" },
];

const STEPS = [
  {
    id: "place-order",
    title: "Place an Order!",
    text: "Place order through our website or Mobile app",
    imageSrc: IMAGE_PLACE_ORDER,
  },
  {
    id: "track-progress",
    title: "Track Progress",
    text: "Your can track your order status with delivery time",
    imageSrc: IMAGE_TRACK_PROGRESS,
  },
  {
    id: "get-order",
    title: "Get your Order!",
    text: "Receive your order at a lighting fast speed!",
    imageSrc: IMAGE_GET_ORDER,
  },
];

function KnowMoreSection() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const [activeQuestion, setActiveQuestion] = useState(QUESTIONS[0].id);

  return (
    <section className="know-more" aria-labelledby="know-more-title">
      <header className="know-more__header">
        <h2 id="know-more-title" className="know-more__title">
          Know more about us!
        </h2>

        <nav className="know-more__tabs" aria-label="About Order.UK">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`know-more__tab${
                activeTab === tab.id ? " know-more__tab--active" : ""
              }`}
              aria-current={activeTab === tab.id ? "page" : undefined}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      <div className="know-more__card">
        <ul className="know-more__questions">
          {QUESTIONS.map((question) => (
            <li key={question.id} className="know-more__questions-item">
              <button
                type="button"
                className={`know-more__question${
                  activeQuestion === question.id
                    ? " know-more__question--active"
                    : ""
                }`}
                aria-current={
                  activeQuestion === question.id ? "true" : undefined
                }
                onClick={() => setActiveQuestion(question.id)}
              >
                {question.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="know-more__panel">
          <ul className="know-more__steps">
            {STEPS.map((step) => (
              <li key={step.id} className="know-more__steps-item">
                <article className="step-card">
                  <h3 className="step-card__title">{step.title}</h3>

                  <div className="step-card__media">
                    {/* Decorative image: the heading above already names the step */}
                    <img
                      className="step-card__image"
                      src={step.imageSrc}
                      alt=""
                      loading="lazy"
                      draggable="false"
                    />
                  </div>

                  <p className="step-card__text">{step.text}</p>
                </article>
              </li>
            ))}
          </ul>

          <p className="know-more__description">
            Order.UK simplifies the food ordering process. Browse through our
            diverse menu, select your favorite dishes, and proceed to checkout.
            Your delicious meal will be on its way to your doorstep in no time!
          </p>
        </div>
      </div>
    </section>
  );
}

export default KnowMoreSection;