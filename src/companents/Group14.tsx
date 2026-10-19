
import food from "../assets/Rectangle 13.jpg"
import food1 from "../assets/Rectangle 15.jpg"
import food2 from "../assets/Rectangle 17.jpg"
import food3 from "../assets/Rectangle 19.jpg"
import food4 from "../assets/Rectangle 21.jpg"
import food5 from "../assets/Rectangle 23.jpg"




function Group14  () {
  return (
    <div className="Group14">
        
                    <h1>
                        Order.uk Popular Categories 🤩
                    </h1>

          <div className="Group14-food">


                <div className="Group14-photo">

                    <div className="Group14-photo-1">
                        <img src={food} width={238} height={203}/>
                        <h1> Burgers & Fast food</h1>
                        <p>21 Restaurants</p>
                    </div>

                    <div  className="Group14-photo-1">
                        <img src={food1}/>
                        <h1> Salads</h1>
                        <p>32 Restaurants</p>
                    </div>

                    <div  className="Group14-photo-1">
                        <img src={food2}/>
                        <h1> Pasta & Casuals</h1>
                        <p>4 Restaurants</p>
                    </div>

                    <div  className="Group14-photo-1">
                        <img src={food3}/>
                       <h1> Pizza</h1>
                        <p>32 Restaurants</p>
                    </div>

                    <div  className="Group14-photo-1">
                        <img src={food4}/>
                         <h1> Breakfast</h1>
                        <p>4 Restaurants</p>
                    </div>

                    <div  className="Group14-photo-1">
                        <img src={food5}/>
                        <h1> Soups</h1>
                        <p>32 Restaurants</p>
                    </div>

            
                </div>
  
             </div>

        </div>
  );
};

export default Group14 ;