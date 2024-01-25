import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AppCars from "./pages/AppCars";
import Navs from "./components/Navs";

function App() {
  return (
    <div>
      <Router>
        <Navs />
        <Routes>
          <Route path="/" element={<Navigate to={"/cars"} />} />
          <Route path="/cars" element={<AppCars />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
