import { useEffect, useRef, useState } from "react";
import "./Mealdealmodal.css";
import {
  FREE_TOPPINGS_LIMIT,
  mealDeal,
  toppingGroups,
  type DealItem,
} from "./Mealdealmock";

export type DealSelection = {
  stepTitle: string;
  item: DealItem;
  qty: number;
  toppings: string[];
  note: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  onComplete?: (selections: DealSelection[], total: number) => void;
  heroImage?: string;
  pizzaImage?: string;
};

type Phase =
  | { kind: "select"; stepIndex: number }
  | { kind: "customise"; stepIndex: number; pizzaNumber: number }
  | { kind: "instructions"; stepIndex: number; pizzaNumber: number };

const phases: Phase[] = (() => {
  const list: Phase[] = [];
  let pizzaNumber = 0;
  mealDeal.steps.forEach((s, stepIndex) => {
    list.push({ kind: "select", stepIndex });
    if (s.kind === "pizza") {
      pizzaNumber += 1;
      list.push({ kind: "customise", stepIndex, pizzaNumber });
      list.push({ kind: "instructions", stepIndex, pizzaNumber });
    }
  });
  return list;
})();

const allToppings = toppingGroups.flatMap((g) => g.items);

const formatPrice = (n: number) => `£${n.toFixed(2)}`;

export default function MealDealModal({ open, onClose, onComplete, heroImage, pizzaImage }: Props) {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [selected, setSelected] = useState<Record<string, string>>({}); // stepId -> itemId
  const [qtys, setQtys] = useState<Record<string, number>>({}); // `${stepId}:${itemId}` -> qty
  const [toppings, setToppings] = useState<Record<string, string[]>>({}); // stepId -> toppingIds
  const [notes, setNotes] = useState<Record<string, string>>({}); // stepId -> special request
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setPhaseIndex(0);
      setSelected({});
      setQtys({});
      setToppings({});
      setNotes({});
    }
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [phaseIndex]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const steps = mealDeal.steps;
  const phase = phases[phaseIndex];
  const step = steps[phase.stepIndex];
  const isLast = phaseIndex === phases.length - 1;

  const qtyKey = (stepId: string, itemId: string) => `${stepId}:${itemId}`;
  const getQty = (stepId: string, itemId: string) => qtys[qtyKey(stepId, itemId)] ?? 1;

  const changeQty = (stepId: string, itemId: string, delta: number) => {
    const key = qtyKey(stepId, itemId);
    setQtys((prev) => ({ ...prev, [key]: Math.max(1, (prev[key] ?? 1) + delta) }));
  };

  const stepToppings = toppings[step.id] ?? [];
  const limitReached = stepToppings.length >= FREE_TOPPINGS_LIMIT;

  const toggleTopping = (toppingId: string) => {
    setToppings((prev) => {
      const current = prev[step.id] ?? [];
      if (current.includes(toppingId)) {
        return { ...prev, [step.id]: current.filter((id) => id !== toppingId) };
      }
      if (current.length >= FREE_TOPPINGS_LIMIT) return prev;
      return { ...prev, [step.id]: [...current, toppingId] };
    });
  };

  // Seçilen her adımdaki ürün * adet
  const selections: DealSelection[] = steps.flatMap((s) => {
    const item = s.items.find((i) => i.id === selected[s.id]);
    if (!item) return [];
    const names = (toppings[s.id] ?? [])
      .map((id) => allToppings.find((t) => t.id === id)?.name)
      .filter((n): n is string => Boolean(n));
    return [
      {
        stepTitle: s.title,
        item,
        qty: getQty(s.id, item.id),
        toppings: names,
        note: (notes[s.id] ?? "").trim(),
      },
    ];
  });
  const total = selections.reduce((sum, s) => sum + s.item.price * s.qty, 0);

  const selectedItem = step.items.find((i) => i.id === selected[step.id]);
  // Seçim ekranında ürün seçilmeli, topping ve instructions ekranları opsiyonel
  const canNext = phase.kind === "select" ? Boolean(selectedItem) : true;

  const handleNext = () => {
    if (!canNext) return;
    if (!isLast) {
      setPhaseIndex(phaseIndex + 1);
    } else {
      onComplete?.(selections, total);
      onClose();
    }
  };

  const handleBack = () => {
    if (phaseIndex > 0) setPhaseIndex(phaseIndex - 1);
    else onClose();
  };

  const pizzaThumb = (
    <>
      {step.kind === "pizza" && pizzaImage ? (
        <img src={pizzaImage} alt="" />
      ) : (
        <span>{step.kind === "pizza" ? "🍕" : "🥤"}</span>
      )}
    </>
  );

  return (
    <div className="md-overlay" onClick={onClose} role="presentation">
      <div
        className="md-modal"
        role="dialog"
        aria-modal="true"
        aria-label={mealDeal.name}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="md-close" aria-label="Close" onClick={onClose}>
          ✕
        </button>

        <div className="md-scroll" ref={scrollRef}>
          <div className="md-hero">
            {heroImage ? <img src={heroImage} alt="" /> : <div className="md-hero-fallback">🍕</div>}
          </div>

          <div className="md-body">
            <nav className="md-breadcrumb" aria-label="Breadcrumb">
              <span>{mealDeal.category}</span>
              <Chevron />
              <strong>{mealDeal.name}</strong>
              {phase.kind !== "select" && (
                <>
                  <Chevron />
                  <strong>Customise Pizza {phase.pizzaNumber}</strong>
                </>
              )}
              {phase.kind === "instructions" && (
                <>
                  <Chevron />
                  <strong>Instructions</strong>
                </>
              )}
            </nav>

            {phase.kind === "select" && (
              <>
                <p className="md-step-title">{step.title}</p>

                <ul className="md-list">
                  {step.items.map((item) => {
                    const isSelected = selected[step.id] === item.id;
                    const select = () => setSelected((p) => ({ ...p, [step.id]: item.id }));
                    return (
                      <li key={item.id}>
                        <div
                          role="button"
                          tabIndex={0}
                          aria-pressed={isSelected}
                          className={`md-row ${isSelected ? "is-selected" : ""}`}
                          onClick={select}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              select();
                            }
                          }}
                        >
                          <span className="md-thumb">{pizzaThumb}</span>
                          <span className="md-sep" />
                          <span className="md-name">{item.name}</span>

                          <div className="md-qty" onClick={(e) => e.stopPropagation()}>
                            <button
                              type="button"
                              className="md-qty-btn"
                              aria-label={`Decrease ${item.name}`}
                              onClick={() => changeQty(step.id, item.id, -1)}
                            >
                              −
                            </button>
                            <span className="md-qty-val">{getQty(step.id, item.id)}</span>
                            <button
                              type="button"
                              className="md-qty-btn"
                              aria-label={`Increase ${item.name}`}
                              onClick={() => changeQty(step.id, item.id, 1)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}

            {phase.kind === "customise" && (
              <div className="md-custom">
                <div className="md-custom-head">
                  <p className="md-step-title md-step-title--custom">
                    Customise your {selectedItem?.name} Pizza
                  </p>
                  <span className="md-counter">
                    {stepToppings.length}/{FREE_TOPPINGS_LIMIT} Selected
                  </span>
                </div>

                <div className="md-promo">
                  <span className="md-thumb md-thumb--lg">{pizzaThumb}</span>
                  <span className="md-sep md-sep--promo" />
                  <p className="md-promo-text">Please select up to {FREE_TOPPINGS_LIMIT} options free!</p>
                </div>

                {toppingGroups.map((group) => (
                  <section className="md-group" key={group.id}>
                    <h3 className="md-group-label">
                      <span className="md-group-icon" aria-hidden="true">
                        {group.icon}
                      </span>
                      {group.title}
                    </h3>
                    <div className="md-group-grid">
                      {group.items.map((t) => {
                        const checked = stepToppings.includes(t.id);
                        const disabled = !checked && limitReached;
                        return (
                          <button
                            key={t.id}
                            type="button"
                            role="checkbox"
                            aria-checked={checked}
                            disabled={disabled}
                            className={`md-topping ${checked ? "is-checked" : ""}`}
                            onClick={() => toggleTopping(t.id)}
                          >
                            <span className="md-check" aria-hidden="true">
                              {checked && (
                                <svg viewBox="0 0 24 24" width="22" height="22">
                                  <path
                                    d="M4 12.5l5 5L20 6.5"
                                    fill="none"
                                    stroke="#fff"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              )}
                            </span>
                            <span className="md-topping-name">{t.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </section>
                ))}
              </div>
            )}

            {phase.kind === "instructions" && (
              <div className="md-custom">
                <p className="md-step-title md-step-title--custom">
                  Customise your {selectedItem?.name} Pizza
                </p>

                <div className="md-promo md-promo--instructions">
                  <span className="md-thumb md-thumb--lg">{pizzaThumb}</span>
                  <span className="md-sep md-sep--promo" />
                  <p className="md-promo-text">Add your special request</p>
                </div>

                <textarea
                  className="md-textarea"
                  placeholder="Write your special instructions here..."
                  maxLength={300}
                  value={notes[step.id] ?? ""}
                  onChange={(e) => setNotes((p) => ({ ...p, [step.id]: e.target.value }))}
                />
              </div>
            )}
          </div>
        </div>

        <div className="md-footer">
          <div className="md-total-row">
            <div className="md-total">
              <span>Total to pay</span>
              <strong>{formatPrice(total)}</strong>
            </div>
            <p className="md-note">Delivery &amp; Tax will be calculated in the next step</p>
          </div>

          <div className="md-actions">
            <button type="button" className="md-back" onClick={handleBack}>
              Take me back
            </button>
            <button type="button" className="md-next" disabled={!canNext} onClick={handleNext}>
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <circle cx="12" cy="12" r="11" fill="#fff" />
                <path d="M7 12h9M12.5 8l4 4-4 4" fill="none" stroke="#0b873e" strokeWidth="2" />
              </svg>
              <span>{isLast ? "Add" : "Next Step"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Chevron() {
  return (
    <svg className="md-chevron" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}