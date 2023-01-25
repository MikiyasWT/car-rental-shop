import axios from 'axios';
import { useEffect, useState } from 'react';
import Gallery from './components/gallery';
import logo from './logo.svg';
import './styles/App.scss'


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
      {
        loading && <h4>Loading ......</h4>
      }
      <Gallery cars={cars}/>
    </div>
  );
}

export default App;
