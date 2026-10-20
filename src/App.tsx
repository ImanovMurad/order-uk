

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./companents/Navbar";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Browsemenu from "./pages/Browsemenu";
import Specialoffers from "./pages/Specialoffers";
import Trackorder from "./pages/Trackorder";
import KnowMoreSection from './components.ilqar/Main'
import Footer from './components.ilqar/Footer';
import RestaurantPage from "./components.ilqar/OrderingPage"
<<<<<<< HEAD
=======
import OrderHero from "./components.ilqar/Orderhero "
// import Browsemenuilqar from './components.ilqar/Browsemenuilqar'
// function PlaceholderPage({ title }: { title: string }) {
  // return <div style={{ padding: 40 }}>{title}</div>;
>>>>>>> 1cba06b9f94f61a158364f2a95c8da7ed93a8441
  
function App() {
  return (
  <>  <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Browsemenu" element={<Browsemenu />} />
        <Route path="/Restaurants" element={<Restaurants />} />
        <Route path="/Specialoffers" element={<Specialoffers />} />
        <Route path="/Trackorder" element={<RestaurantPage />} />
        
       

     
      </Routes>
    </BrowserRouter>
    <div>
      <OrderHero/>
      <KnowMoreSection/>
      <Footer />
    </div>
    </>
  );
}

export default App;
