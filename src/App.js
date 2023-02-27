import React from "react";
import MyProducts from "./Pages/Product"
import { HashRouter,Routes,Route, Link} from "react-router-dom";

function App() {
  return (
    <div>
      <HashRouter>
        <ul>
            <li><Link to="/" className="mylink"> Product </Link></li>
          </ul>
        <Routes>
        <Route exact path="/" element={ <MyProducts/> } />
        </Routes>
      </HashRouter>
  </div>
)
}


export default App;
