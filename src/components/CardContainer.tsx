import Image from 'next/image';
import React from 'react';
import img from '../../public/city-6220689_1280.jpg';
import img2 from '../../public/cityscape-6516367_1280.jpg';
import img3 from '../../public/washington-dc-85531_1280.jpg';

const CardContainer = () => {
  return (
    <div className="card-container">
      <div className="card-item">
        <Image src={img} alt="Destination 1" width={300} height={200} className="card-image" />
        <h2 className="card-title">Tokyo, Japan</h2>
        <button className="btn">Explore More</button>
      </div>

      <div className="card-item">
        <Image src={img2} alt="Destination 2" width={300} height={200} className="card-image" />
        <h2 className="card-title">Paris, France</h2>
        <button className="btn">Explore More</button>
      </div>

      <div className="card-item">
        <Image src={img3} alt="Destination 3" width={300} height={200} className="card-image" />
        <h2 className="card-title">Washington, DC</h2>
        <button className="btn">Explore More</button>
      </div>
    </div>
  );
}

export default CardContainer;
