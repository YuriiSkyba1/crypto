import React, { useEffect, useState } from 'react'
import Icon from './img/icon.svg'

export default function Crypto({ valueC, valuePrice, tF, fT, handleVisible, holder }) {
  const [disable, setDisable] = useState(false)


  useEffect(() => {
    if (tF && fT) {
      setDisable(true)
    }
  }, [tF, fT])

  const handleCLosed = () => {
    if (disable) {
      setDisable(false)
      
  
    } else {
      setDisable(true)
    }
  }
  return (
    <>

      <div className={tF && fT || disable ? "active" : "active negative"}>

        <div className='info'>
          <img src={Icon}></img>
          <div className='info_block'>
            <h3>{valueC}</h3>
            <p>${valuePrice.toFixed(3)}</p>
          </div>
        </div>
        <button className='active_bttn' onClick={()=> handleCLosed()} >x</button>
      </div>
    </>
  )
}
