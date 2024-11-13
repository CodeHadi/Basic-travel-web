import { GiMountainRoad } from "react-icons/gi";
import { GiHiking } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";


const StatsSection = () => {
    return (
      <section className="section">
        <h2 className="title">Why Hikings?</h2>
        <div className="underline"></div>
  
        <div className="statsContainer">
          <div className="statItem">
            <div className="iconContainer">
            <GiMountainRoad size={80} />
            </div>
            <h3 className="statTitle">100+ Mountain</h3>
            <p className="statDescription">
              We have access and official permission to climb hundreds.
            </p>
          </div>
  
          <div className="statItem">
            <div className="iconContainer">
            <GiHiking size={80} />
            </div>
            <h3 className="statTitle">1000+ Hiking</h3>
            <p className="statDescription">
              More than 1000 professional and amateur climbers use our facilities.
            </p>
          </div>
  
          <div className="statItem">
            <div className="iconContainer">
            <RiCustomerService2Fill size={80}/>
            </div>
            <h3 className="statTitle">20,000+ Customers</h3>
            <p className="statDescription">
              In the last year, over 20,000 people used our services.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default StatsSection;
  