import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Sigup from "./pages/Sigup";
import PrivateRoute from "./Route/PrivateRoute";
import { ProviderStore } from "./Redux/Provider";

function App() {
  return (
    <ProviderStore>
      <Routes>
        # Public Route
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Sigup />} />
        <Route path="/home" element={<Home />} />
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
        # Private Route
        <Route element={<PrivateRoute />}>
          
        </Route>
      </Routes>
    </ProviderStore>
  );
}

export default App;
