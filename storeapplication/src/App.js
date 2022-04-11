import Landing from "./components/Landing.js";
import Menu from "./components/Menu.js";
import OrderConfirmation from "./components/OrderConfirmation";
import "./App.css";

import {Routes, Route} from 'react-router-dom';

function App() {
 

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Landing/>} exact/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/confirmation" element={<OrderConfirmation/>}/>
      </Routes>
    </div>
  );
}

export default App;
