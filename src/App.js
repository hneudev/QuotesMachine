import './App.css';
import Data from './quotes.json';
import React, { useState } from 'react';
import QuoteBox from './Components/QuoteBox.js';
import Buttons from './Components/Buttons.js';
import AuthorBg from './Components/AuthorBg';

function App() {
// Generador de numeros aleatorios dependiendo del parametro requerido
  let randomizer = (param) => { 
    let rnumber = Math.floor(Math.random() * (param + 1));
    return rnumber
  
  }; 


    // Declaracion del hook de useState para modificar las frases 

  const qlength = Data.quotes.length
  const [quote, setQuote] = useState(Data.quotes[randomizer(qlength)]);


// Generador de colores 
  let randomHslColor = () => {
    let h = randomizer(360);
    let s = randomizer(100) + "%" ;
    let l = randomizer(100) + "%";
    let hsl = "hsl(" + h + " " + s + " " + l + ")"
    return hsl
}


// Declaración de variables de estilo para uso inline
let bgColor = {
  backgroundColor: `${randomHslColor()} `,
}
let fontColor = {
  color: `${randomHslColor()} `,
}
let divColor = {
  backgroundColor: `${randomHslColor()} `,
}

// Manejador de colores 

  function HandleColor(){

    bgColor = {
      backgroundColor: `${randomHslColor()} `,
    }
    fontColor = {
      color: `${randomHslColor()} `,

    }

    divColor = {
      backgroundColor: `${randomHslColor()} `,
    }
    
  }

  // Accionador del hook y del manejador de color
  function HandleIndex(){
    
    setQuote(Data.quotes[randomizer(Data.quotes.length)]);
    HandleColor();
  }
// Contenido de la pagina
  return (
    <div className="App">
      <div className="bg" style={bgColor} >
      {/* Componente del Author en el fondo */}
      <AuthorBg quote={quote}/>
      {/* Componente de la caja de texto */}
        <div className="container" style={divColor}>
          <div className="card">
            <div style={fontColor}>
            <QuoteBox quote={quote}/>
            </div>
          </div>
        </div>
        {/* Componente de la caja de Boton de siguiente cita */}
        <div>
        <Buttons handle={HandleIndex}/>
        
        </div>
      </div>
    </div>
  );
}
export default App;


