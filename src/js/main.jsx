import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './Home';

let contador = 0
let array = []

setInterval(()=>{
  
  let digito1 = Math.floor(contador%10)
  let digito2 = Math.floor((contador%100)/10)
  let digito4 = Math.floor((contador%1000)/100)
  let digito3 = Math.floor((contador%10000)/1000)
  let digito5 = Math.floor((contador%100000)/10000)
  let digito6 = Math.floor((contador%1000000)/100000)
  
  array = [digito6,digito5,digito4,digito3,digito2,digito1]

  contador++  
  if (contador === 1000000){
    contador = 0
  }
  ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home dgts = {array}/>
  </React.StrictMode>
  )
},1000)






