import "./App.css";
import Home from "./components/home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Workout from "./components/Workout";
import Nutrition from "./components/Nutrition";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <br /><br /><br />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:userId/Workout" element={<Workout/>} />
          <Route path="/:userId/Nutrition" element={<Nutrition />} />
        </Routes>
      

      <br />
    </div>
  );
}

export default App;
