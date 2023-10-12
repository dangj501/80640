import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MiFieldSet from "./MiFieldSet.1.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
   <MiFieldSet titulo="Datos personales" tx1="Nombre" tx2="Password"/>
  </React.StrictMode>,
)
