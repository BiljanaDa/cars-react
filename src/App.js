import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AppCars from "./pages/AppCars";
import Navs from "./components/Navs";
import AddCars from "./pages/AddCar";

function App() {
  return (
    <div>
      <Router>
        <Navs />
        <Routes>
          <Route path="/" element={<Navigate to={"/cars"} />} />
          <Route path="/cars" element={<AppCars />} />
          <Route path="/add" element={<AddCars />} />
          <Route path="/edit/:id" element={<AddCars />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
