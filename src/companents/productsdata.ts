
import food from '../assets/Rectangle 46 (2).jpg'
import food1 from '../assets/Rectangle 46 (4).jpg'
import drink from '../assets/Rectangle 46 (5).jpg'

 export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  isOffer: boolean;
};

 export const categories = [
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

 export const  products: Product[]  = [
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



 export const reviews = [
  {
    id: 1,
    name: "St Glx",
    location: "South London",
    date: "24th September, 2023",
    image: "https://i.pravatar.cc/100?img=47",
    text: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
  },
  {
    id: 2,
    name: "St Glx",
    location: "South London",
    date: "24th September, 2023",
    image: "https://i.pravatar.cc/100?img=47",
    text: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
  },
  {
    id: 3,
    name: "St Glx",
    location: "South London",
    date: "24th September, 2023",
    image: "https://i.pravatar.cc/100?img=47",
    text: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
  },

];
