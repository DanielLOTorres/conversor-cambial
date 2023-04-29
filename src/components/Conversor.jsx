import React, { useState } from 'react'
import './Conversor.css'

export default function Conversor({moedaA, moedaB}) {


    const [moedaAValue, setMoedaAValue] = useState()
    const [moedaBValue, setMoedaBValue] = useState()

   const  converter = () =>{
    
    fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=edVxAVo4Z0GCYpU56zNG8zW5fgLiDGB2898ZOWyE&currencies=${moedaB}&base_currency=${moedaA}`)
    .then(response => response.json())
    .then(data => {
        let cambio  = Object.values(data.data)[0]
        setMoedaBValue((moedaAValue * cambio).toFixed(2))
    })
    .catch(error => console.error(error));

   }

    return (
        <div className='Conversor'>
            <h2>{moedaA} Para {moedaB}</h2>
            <input type="number" value={moedaAValue} onChange={(e) => setMoedaAValue(e.target.value)}/>
            <br />
            <button onClick={converter}>Converter</button>
            <h2>{moedaBValue} {moedaB}</h2>
      </div>
      )
}
    