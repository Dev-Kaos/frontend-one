import "./App.css";
import "@fontsource/inter";
import { Route, Routes } from "react-router-dom";
import LoginOne from "./login/pages/LoginOne";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<LoginOne />}
        />
      </Routes>
    </>
  );
}

export default App;
