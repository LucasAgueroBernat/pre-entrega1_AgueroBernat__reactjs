import { Header } from "./componentes/navBar/header"
import './App.css'
import ItemListContainer from "./componentes/itemListContainer/itemListContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import error404 from "./componentes/error404/error404"
function App() {

  return (
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<ItemListContainer />}/>
    
    <Route path="*" element={<error404 />}/>

  </Routes>
  </BrowserRouter>
      
  )     
}

export default App
