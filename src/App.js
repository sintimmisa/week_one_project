
import './App.css';
import Card from './components/Card';
import sedan from "./images/icon-sedans.svg";
import luxury from "./images/icon-luxury.svg";
import suvs from "./images/icon-suvs.svg";

function App() {
  return (
    <div className="App">
      
      <Card className="card1" imgSrc={sedan} title={"Sedans"} imgAlt="Sedan Icon" description={"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip" } link="learn more"/>
      <Card className="card2" imgSrc={suvs} title={"Suvs"} imgAlt="SUVS Icon"  description={"Take an SUV for its spacious interior,power and versatility. Perfect for you next family vacation and off-road adventures." } link="learn more"/>
      <Card className="card3" imgSrc={luxury} title={"Luxury"} imgAlt="Luxury Icon"  description={"Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style" } link="learn more"/>

    
     
    </div>
  );
}

export default App;
