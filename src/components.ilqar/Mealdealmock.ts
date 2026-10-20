export type DealItem = {
  id: string;
  name: string;
  price: number; // £
};

export type DealStep = {
  id: string;
  title: string;
  kind: "pizza" | "drink";
  items: DealItem[];
};

export type MealDeal = {
  category: string; 
  name: string; 
  steps: DealStep[];
};

export const mealDeal: MealDeal = {
  category: "Special Offers",
  name: "Meal Deal 1",
  steps: [
    {
      id: "pizza-1",
      title: "Please select your first Pizza",
      kind: "pizza",
      items: [
        { id: "margherita", name: "Margherita", price: 12.9 },
        { id: "polo", name: "Polo", price: 14.5 },
        { id: "meat-fiest", name: "Meat Fiest", price: 16.9 },
        { id: "hawaiian", name: "Hawaiian", price: 15.5 },
        { id: "toscana", name: "Toscana", price: 15.9 },
        { id: "veggie", name: "Veggie Delight", price: 13.9 },
      ],
    },
  ],
};

// ---------- Customise (topping) ekranı ----------

export type Topping = { id: string; name: string };

export type ToppingGroup = {
  id: string;
  title: string;
  icon: string; 
  items: Topping[];
};

export const FREE_TOPPINGS_LIMIT = 4;

export const toppingGroups: ToppingGroup[] = [
  {
    id: "veg",
    title: "Vegitable Toppings",
    icon: "🥕",
    items: [
      { id: "cheese", name: "Cheese" },
      { id: "green-peppers", name: "Green peppers" },
      { id: "tomato", name: "Tomato" },
      { id: "mushrooms", name: "Mushrooms" },
      { id: "sweetcors", name: "Sweetcors" },
      { id: "jalapeneos", name: "Jalapeneos" },
      { id: "olives", name: "Olives" },
      { id: "pineapples", name: "Pineapples" },
      { id: "onions", name: "Onions" },
    ],
  },
  {
    id: "meat",
    title: "Meat Toppings",
    icon: "🥩",
    items: [
      { id: "chicken", name: "Chicken" },
      { id: "beef", name: "Beef" },
      { id: "salami", name: "Salami" },
      { id: "pepperoni", name: "Pepperoni" },
      { id: "chicken-tikka", name: "Chicken Tikka" },
      { id: "fish", name: "Fish" },
    ],
  },
  {
    id: "seafood",
    title: "Seafood Toppings",
    icon: "🐟",
    items: [
      { id: "tuna", name: "Tuna" },
      { id: "anchovies", name: "Anchovies" },
      { id: "prawns", name: "Prawns" },
    ],
  },
];