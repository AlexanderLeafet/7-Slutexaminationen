import {Routes, Route} from 'react-router-dom';
import "./App.css";
import Landing from "./components/Landing.js";
import Menu from "./components/Menu.js";

function App() {
 

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Landing/>} exact/>
      <Route path="/menu" element={<Menu/>}/>
      </Routes>
    </div>
  );
}

export default App;
