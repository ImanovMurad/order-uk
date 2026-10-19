export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 89.99,
    category: "Electronics",
    image: "/images/headphones.jpg",
    rating: 4.8,
    inStock: true
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 129.99,
    category: "Electronics",
    image: "/images/watch.jpg",
    rating: 4.5,
    inStock: true
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 75.50,
    category: "Fashion",
    image: "/images/shoes.jpg",
    rating: 4.6,
    inStock: false
  },
  {
    id: 4,
    name: "Backpack",
    price: 45.00,
    category: "Accessories",
    image: "/images/backpack.jpg",
    rating: 4.3,
    inStock: true
  },
  {
    id: 5,
    name: "Keyboard",
    price: 59.99,
    category: "Electronics",
    image: "/images/keyboard.jpg",
    rating: 4.7,
    inStock: true
  }
];