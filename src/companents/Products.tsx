import React, { useState } from "react";
import { categories, products } from "./productsdata";



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