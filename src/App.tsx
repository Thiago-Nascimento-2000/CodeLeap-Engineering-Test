import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Sigup from "./pages/Sigup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Sigup />} />
      <Route
        path="*"
        element={
          <h1 className="font-semibold text-red-500">
            Page Not Found !<br></br>
            <span>
              <a href="/" className="text-blue-500 hover:underline">
                Go Home
              </a>
            </span>
          </h1>
        }
      />
    </Routes>
  );
}

export default App;
