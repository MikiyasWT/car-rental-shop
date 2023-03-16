import axios from 'axios';
import { useEffect, useState } from 'react';
import Gallery from './components/gallery';
import Nav from './components/nav';
import logo from './logo.svg';
import './styles/App.scss'
import { Link,BrowserRouter as Router,Routes, Route } from "react-router-dom";
import TestComponent from './components/TestComponent';
import athlete2 from '../src/img/athlete2.png'


const apiUrl = 'https://mocki.io/v1/4f7bf80f-e4c8-44c5-9be2-afc649a5af96'
const client = axios.create({
  baseURL: "https://mocki.io/v1/4f7bf80f-e4c8-44c5-9be2-afc649a5af96" 
});



function App() {
   const [cars,setCars] = useState([])
   const [loading,setLoading] = useState(true)
   const [error,setError]  = useState(null)
   
  useEffect(() => {
    fetch(apiUrl)
          .then(response => response.json())    // 4. Setting *dogImage* to the image url that we received from the response above
          .then(data => {setCars(data.cars); setLoading(false)})
          .catch(err => {setError(err);  setLoading(false)})
  },[cars])



  return (
    <div className="App">
      <Nav />

      <TestComponent image={athlete2} />

      <Gallery cars={cars}/>
    </div>
  );
}

export default App;


// import './styles/App.scss'

// function App() {
   
   
  // useEffect(() => {
  //   fetch(apiUrl)
  //         .then(response => response.json())    // 4. Setting *dogImage* to the image url that we received from the response above
  //         .then(data => {setCars(data.cars); setLoading(false)})
  //         .catch(err => {setError(err);  setLoading(false)})
  // },[cars])



//   return (
//     <div className="App">
//       <h4>gdsgsd</h4>
//     </div>
//   );
// }

// export default App;
