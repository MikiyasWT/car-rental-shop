import { useEffect,useState } from "react";

import Card from "./Card";
import Modal from "./modal";


const Gallery = ({cars}) =>{
 

  return (

     <div className="container">
      {
        cars.map((car,index) => (
             <Card key={index} car={car}/>
        ))
      }
        
     </div>


  )
}


export default Gallery;


