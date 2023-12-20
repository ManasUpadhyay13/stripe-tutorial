import './App.css';
import { useState } from 'react'
import axios from 'axios'

function App() {

  const [price, setPrice] = useState(0)

  const handlePayment = async (e) => {
    try {

      const res = await axios.post("http://localhost:4242/make-payment", {
        "price": price
      })

    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="App">
      <input
        type="number"
        name="price"
        placeholder="Enter the price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button
        onClick={(e) => handlePayment(e)}
      >Pay</button>
    </div>
  );
}

export default App;
