

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./companents/Navbar";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Browsemenu from "./pages/Browsemenu";
import Specialoffers from "./pages/Specialoffers";
import Trackorder from "./pages/Trackorder";
import Footer from './components.ilqar/Footer';
import RestaurantPage from "./components.ilqar/OrderingPage"
import { useState, useEffect } from "react";
import Loader from "./companents/Loader";
import NotFound from "./pages/NotFount";




function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    
    
  <>  <BrowserRouter>
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Browsemenu" element={<Browsemenu />} />
          <Route path="/Specialoffers" element={<Specialoffers />} /> */}
          <Route path="/Browsemenu" element={<NotFound />} />
          <Route path="/Specialoffers" element={<NotFound />} />
        <Route path="/Restaurants" element={<Restaurants />} />
        <Route path="/Trackorder" element={<RestaurantPage />} />
           <Route path="*" element={<NotFound />} />
       
     
        
       

     
      </Routes>
    </BrowserRouter>
    <div>
      <Footer />
    </div>
    </>
  );
}

export default App;
