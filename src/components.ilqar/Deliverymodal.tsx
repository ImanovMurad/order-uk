import { useEffect, useState } from "react";
import "./DeliveryModal.css";
import {
  checkPostcode,
  formatPostcode,
  modalImages,
  MINIMUM_DELIVERY,
} from "../components.ilqar/Postcodemock ";

type Step = "choose" | "postcode";
type PostcodeState = "idle" | "loading" | "error" | "invalid" | "success";

type Props = {
  open: boolean;
  onClose: () => void;
  onDelivery?: (postcode: string) => void;
  onCollect?: () => void;
};

const MapIcon = () => (
  <svg className="dm-map-icon" viewBox="0 0 64 64" aria-hidden="true">
    <path
      d="M4 14l16-6 24 8 16-6v40l-16 6-24-8-16 6z"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <path d="M20 8v40M44 16v40" stroke="currentColor" strokeWidth="4" />
    <circle cx="46" cy="18" r="13" fill="currentColor" />
    <circle cx="46" cy="18" r="5" fill="#fff" />
  </svg>
);

export default function DeliveryModal({ open, onClose, onDelivery, onCollect }: Props) {
  const [step, setStep] = useState<Step>("choose");
  const [value, setValue] = useState("");
  const [state, setState] = useState<PostcodeState>("idle");
  const [submitted, setSubmitted] = useState("");

  useEffect(() => {
    if (open) {
      setStep("choose");
      setValue("");
      setState("idle");
      setSubmitted("");
    }
  }, [open]);

  // ESC ile kapat
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleFind = async () => {
    if (!value.trim()) return;
    setState("loading");
    const result = await checkPostcode(value);
    setSubmitted(result.postcode);
    setValue(result.postcode);

    if (result.status === "ok") {
      setState("success");
      onDelivery?.(result.postcode);
    } else if (result.status === "invalid") {
      setState("invalid");
    } else {
      setState("error");
    }
  };

  const handleChange = () => {
    setState("idle");
    setValue("");
  };

  const handleCollect = () => {
    onCollect?.();
    onClose();
  };

  const isSuccess = state === "success";
  const isError = state === "error" || state === "invalid";

  const image = isSuccess ? modalImages.success : isError ? modalImages.error : modalImages.idle;
  const emoji = isSuccess ? "👍" : isError ? "🛵" : "🚴";

  return (
    <div className="dm-overlay" onClick={onClose} role="presentation">
      <div
        className={`dm-modal ${step === "choose" ? "dm-modal--choose" : ""}`}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="dm-close" aria-label="Close" onClick={onClose}>
          ✕
        </button>

        {step === "choose" && (
          <div className="dm-choose">
            <h2 className="dm-choose-title">Order Now</h2>
            <p className="dm-choose-sub">
              Minimum Delivery is <strong>£{MINIMUM_DELIVERY}</strong>
            </p>

            <button
              type="button"
              className="dm-big-btn dm-big-btn--dark"
              onClick={() => setStep("postcode")}
            >
              <span className="dm-big-icon">🛵</span>
              Deliver my order
            </button>

            <button type="button" className="dm-big-btn dm-big-btn--orange" onClick={handleCollect}>
              <span className="dm-big-icon">🏪</span>
              I will come &amp; Collect
            </button>

            <div className="dm-or">
              <span />
              <b>or</b>
              <span />
            </div>
            <button type="button" className="dm-link" onClick={onClose}>
              Cancel &amp; Go back
            </button>
          </div>
        )}

        {step === "postcode" && (
          <div className="dm-postcode">
            <div className="dm-photo">
              {image ? (
                <img src={image} alt="" />
              ) : (
                <div className={`dm-photo-fallback ${isSuccess ? "is-success" : isError ? "is-error" : ""}`}>
                  <span>{emoji}</span>
                </div>
              )}
            </div>
            <div className="dm-stripe" />

            <div className="dm-content">
              <h2 className="dm-title">
                {isSuccess ? (
                  <>
                    You’re All Set!
                    <br />
                    <span className="dm-hl dm-hl--green">Post Code</span> Submitted
                  </>
                ) : (
                  <>
                    Please Enter Your
                    <br />
                    <span className={`dm-hl ${isError ? "dm-hl--red" : ""}`}>Post Code</span>
                  </>
                )}
              </h2>

              <p className="dm-text">
                To start placing delivery order, please
                <br />
                enter your full postcode here
              </p>

              <form
                className="dm-field"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (isSuccess) handleChange();
                  else handleFind();
                }}
              >
                <input
                  className="dm-input"
                  type="text"
                  placeholder="eg. AA1 1BB"
                  value={value}
                  readOnly={isSuccess}
                  maxLength={8}
                  autoFocus
                  onChange={(e) => {
                    setValue(e.target.value.toUpperCase());
                    if (isError) setState("idle");
                  }}
                />
                {isSuccess ? (
                  <button type="submit" className="dm-find dm-find--dark">
                    Change
                  </button>
                ) : (
                  <button
                    type="submit"
                    className={`dm-find ${isError ? "dm-find--dark" : ""}`}
                    disabled={state === "loading"}
                  >
                    {state === "loading" ? "..." : "Find"}
                  </button>
                )}
              </form>

              {state === "error" && (
                <p className="dm-msg dm-msg--error">Sorry, we don’t do delivery to your area.</p>
              )}
              {state === "invalid" && (
                <p className="dm-msg dm-msg--error">Please enter a valid UK postcode.</p>
              )}
              {isSuccess && <p className="dm-msg dm-msg--ok">We deliver to your area.</p>}

              <div className="dm-bottom">
                <MapIcon />
                <div className="dm-or dm-or--small">
                  <span />
                  <b>or</b>
                  <span />
                </div>
                <button type="button" className="dm-link dm-link--small" onClick={handleCollect}>
                  I want to come and collect
                </button>
              </div>

              {isSuccess && submitted && (
                <button type="button" className="dm-continue" onClick={onClose}>
                  Continue with {formatPostcode(submitted)}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}