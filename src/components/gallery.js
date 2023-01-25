import { useEffect,useState } from "react";



const Gallery = ({cars}) =>{
 

 console.log(cars)
  return (
     <div className="container">
      {
        cars.map((car) => (
          <div className="cards" key={car.id}>
            <div className="carImage">
              <img src={car.images[1] } alt={car.carNam} />
            </div>
            <div className="carNameContainer">
            <h3>{car.carName}</h3>
            </div>
            <div className="buttonContainer">
              <button className="bookButton">Book</button>
            </div>

            

          </div> 
        ))
      }
        
     </div>


  )
}


export default Gallery;


