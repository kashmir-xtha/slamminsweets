import "./App.css"
import { Navbar } from "./components/Navbar/Navbar"; 
import { Home } from "./components/Home/Home";
import { Menu } from "./components/Menu/Menu";
import { Special } from "./components/Special/Special";
import { Contact } from "./components/Contact/Contact"; 
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useState, createContext} from 'react';

export const myCart = createContext();
// exporting cart for global use

function App() {
  const [cart, setCart] = useState([]);
  return (
    <myCart.Provider value={{cart, setCart}}>
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/menu" Component={Menu}></Route>
            <Route path="/special" Component={Special}></Route>
          </Routes>
          <Contact />
      </Router>
    </myCart.Provider>
  );
}
export default App;
