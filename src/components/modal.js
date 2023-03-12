

const Modal = (car) => {
    console.log(car)
    return (
        
            <div className="slideContainer">
                <div className="carImage">
                <img src={car.images[2]} alt={car.carName} width={440}/>
                </div>
            
            

        </div>
    )
}

export default Modal;