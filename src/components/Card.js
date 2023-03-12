import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import DatePicker from "react-datepicker";

const Card = ({car})=> {
    const [startDate,setStartDate] = useState(new Date())
    const [pickDate,setPickDate] = useState(false);
    const [id,setId] = useState()
    const [openModal,setOpenModal] = useState(false)
    
    const bookDate = ({id}) =>{
               setId(id)
               setPickDate(!pickDate)
               return 
    }
    
    const modalOpener =(car) => {
       return setOpenModal((prev) => !prev)
    }
    return(
        <div className="cards" key={car.id}>
        <div className="carImage" onClick={()=>modalOpener(car)}>
          <img src={car.images[1] } alt={car.carNam} />
        </div>
        <div className="carNameContainer">
        <h3>{car.carName}</h3>
        </div>
        <div className="buttonContainer">
          {
             pickDate && 
             <DatePicker closeOnScroll={true} selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect
             timeInputLabel="Time:"
              dateFormat="MM/dd/yyyy h:mm aa"
              showTimeInput
              />
          }
          <button className="bookButton" onClick={()=>bookDate(car.id)}>Book</button>
        </div>





        

      </div>
    )
}


export default Card;