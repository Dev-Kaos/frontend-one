import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "@fontsource/inter";
import LoginOne from "./login/pages/LoginOne";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LoginOne />}
          />
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
