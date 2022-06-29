
import React, { useState, useEffect } from 'react';
import './App.css';
import Logo from './img/logo.svg'
import Figure from "./img/figure.png"
import Crypto from "./Crypto"

function App() {
  const BASE_URL = "https://api.coinstats.app/public/v1/coins?skip=0"

  const [arr, setArr] = useState([])
  const [currency, setCurrency] = useState()
  const [code, setCode] = useState('')
  const [visible, setVisible] = useState(false)
 





  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {

        setArr(data.coins)

      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setVisible(true)
    setCurrency(code)


  }


  




  return (
    <>
      <div className='background' >

        <div className='main'>

          <div className='title' >
            <img src={Logo}></img>
            <h1>Now you can track all your cryptos here!</h1>
            <p>Just enter the cryptocurrency code on the form to the right.</p>
            <div className='currency_block'>
              {arr.map((curr) => (
                <>
                  <div className='pack' >
                    <Crypto tF={curr.symbol === currency} fT={visible} valuePrice={curr.price} valueC={curr.symbol}></Crypto>


                  </div>
                </>
              ))}

            </div>
          </div>
          <div>
            <img className='figure' src={Figure}></img>
          </div>
          <div className='form-background'>
            <div >
              <form className='form' onSubmit={handleSubmit}>
                <input className='input-box' type="text"
                  required
                  value={code}
                  onChange={(e) => setCode(e.target.value)}></input>
                <button className='input-button'>Add</button>
                <p className='input-paragraph' >Use of this service is subject to terms and conditions</p>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
