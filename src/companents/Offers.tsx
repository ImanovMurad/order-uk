
import food from '../assets/Group 10.jpg'
import food1 from '../assets/Group 11.jpg'

function Offers  () {
  return (
    <div className="group13">
        
          <div className="group13-nav">

                    <b>
                        Up to -40% 🎊 Order.uk exclusive deals
                    </b>

                    <nav className="nav-1">
                        <a href="#">Vegan</a>
                        <a href="#">Sushi</a>
                        <a href="#"> Pizza & Fast food</a>
                        <a href="#">others</a>
                    </nav>
            </div>

             <div className="group13-photo">
        
                 <div><img src={food}/></div>
                 <div><img src={food1}/></div>
                 <div> <img src={food}/></div>
            </div>
  
    </div>

  );
};

export default Offers ;