import Hero from "../companents/Hero";
import Offers from "../companents/Offers";
import Popularcategories from "../companents/Popularcategories";
import Popularrestaurants from "../companents/Popularrestaurants";
import OrderHero from "../components.ilqar/Orderhero "
import KnowMoreSection from "../components.ilqar/Main"

function Home() {
  return (
    <div>
      <Hero />
      <Offers />
      <Popularcategories/>
      <Popularrestaurants/>
      <OrderHero/>
      <KnowMoreSection/>

    </div>
  );
}

export default Home;