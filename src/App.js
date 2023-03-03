import React from "react";
import MyProducts from "./Pages/Product"
import Cart from "./Pages/Cart";
import { HashRouter,Routes,Route, Link} from "react-router-dom";

function App() {
  return (
    <div>
      <HashRouter>
        
        <ul>
            <li><Link to="/" className="mylink"> Product </Link></li>
            <li><Link to="/Cart" className="mylink"> Cart </Link></li>
          </ul>
        <Routes>
        <Route exact path="/" element={ <MyProducts/> } />
        <Route exact path="/Cart" element={ <Cart/> } />
        </Routes>
      </HashRouter>
  </div>

)
}


export default App;
