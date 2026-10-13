import React, { useState } from "react";
import food from '../assets/Rectangle 46 (2).jpg'
import food1 from '../assets/Rectangle 46 (4).jpg'
import drink from '../assets/Rectangle 46 (5).jpg'

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  isOffer: boolean;
};

const categories = [
  "Offers",
  "Burgers",
  "Fries",
  "Snacks",
  "Salads",
  "Cold drinks",
  "Happy Meal",
  "Desserts",
  "Hot drinks",
  "Sauces",
  "Orbit®",
];

const products: Product[] = [
  {
    id: 1,
    name: "Royal Cheese Burger with extra Fries",
    category: "Burgers",
    price: 23.1,
    image:food,
    isOffer: true,
  },
  {
    id: 2,
    name: "The classics for 3",
    category: "Burgers",
    price: 23.1,
    image:food,
    isOffer: true,
  },
   {
    id: 3,
    name: "The classics for 3",
    category: "Burgers",
    price: 23.1,
    image:food,
    isOffer: false,
  },
   {
    id: 4,
    name: "The classics for 3",
    category: "Burgers",
    price: 23.1,
    image:food,
    isOffer: false,
  },
  {
    id: 5,
    name: "The classics for 3",
    category: "Burgers",
    price: 23.1,
    image:food,
    isOffer: false,
  },
   {
    id: 6,
    name: "The classics for 3",
    category: "Burgers",
    price: 23.1,
    image:food,
    isOffer: false,
  },

  {
    id: 7,
    name: "Royal Cheese Burger with extra Fries",
    category: "Fries",
    price: 8.5,
    image:food1,
    isOffer: true,
  },
  {
    id: 8,
    name: "The classics for 3",
    category: "Fries",
    price: 10.5,
    image:food1,
    isOffer: false,
  },
   {
    id: 9,
    name: "The classics for 3",
    category: "Fries",
    price: 10.5,
    image:food1,
    isOffer: false,
  },
   {
    id: 10,
    name: "The classics for 3",
    category: "Fries",
    price: 10.5,
    image:food1,
    isOffer: false,
  },
   {
    id: 11,
    name: "The classics for 3",
    category: "Fries",
    price: 10.5,
    image:food1,
    isOffer: false,
  },
   {
    id: 12,
    name: "The classics for 3",
    category: "Fries",
    price: 10.5,
    image:food1,
    isOffer: false,
  },
 
  {
    id: 13,
     name: "Royal Cheese Burger with extra Fries",
    category: "Cold drinks",
    price: 5.5,
    image:drink,
    isOffer: true,
  }, 
  {
    id: 14,
     name: "The classics for 3",
    category: "Cold drinks",
    price: 5.5,
    image:drink,
    isOffer: true,
  }, 
  {
    id: 14,
     name: "The classics for 3",
    category: "Cold drinks",
    price: 5.5,
    image:drink,
    isOffer: false,
  }, 
  {
    id: 14,
     name: "The classics for 3",
    category: "Cold drinks",
    price: 5.5,
    image:drink,
    isOffer: false,
  }, 
  {
    id: 14,
     name: "The classics for 3",
    category: "Cold drinks",
    price: 5.5,
    image:drink,
    isOffer: false,
  }, 
    {
    id: 15,
     name: "The classics for 3",
    category: "Cold drinks",
    price: 5.5,
    image:drink,
    isOffer: false,
  }, 
  
  

];

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState("Offers");

  const [ ] = useState<number[]>([]);

  const filteredProducts =
  activeCategory === "Offers"
    ? products
    : products.filter(
        (product) => product.category === activeCategory
      );

const displayedCategories =
  activeCategory === "Offers"
    ? categories.filter((category) => category !== "Offers")
    : [activeCategory];

return (

  

  <div className="products-page">
    <nav className="category-nav">
      {categories.map((category) => (
        <button
          key={category}
          className={
            activeCategory === category
              ? "category-button active"
              : "category-button"
          }
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </nav>

    {displayedCategories.map((category) => {
      const categoryProducts =
        activeCategory === "Offers"
          ? products.filter(
              (product) => product.category === category
            )
          : filteredProducts;

      if (categoryProducts.length === 0) {
        return null;
      }

      return (
        <section className="product-section" key={category}>
          <h2 className="section-title">{category}</h2>

          <div className="products-grid">
            {categoryProducts.map((product) => (
              <article className="product-card" key={product.id} >

                <div className="product-info">

                  <h3>{product.name}</h3>

                  <p>
                   1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </p>
                  
                  <strong>
                    GBP {product.price.toFixed(2)}
                  </strong>
                </div>

                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <button
                    className="add-button"
                    onClick={() =>  (product.id)}
                    aria-label={`Add ${product.name} to cart`}
                  >
                    +
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      );
    })}

  </div>
);
};

export default Products;