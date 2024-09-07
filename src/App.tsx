import "./App.css";
import "@fontsource/inter";
import { Route, Routes } from "react-router-dom";
import LoginOne from "./login/pages/LoginOne";
import AdminOne from "./admin/pages/AdminOne";
import AusersOne from "./admin/pages/AusersOne";
import AnewsOne from "./admin/pages/AnewsOne";
import ProtectedRoute from "./admin/utils/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route
          path=""
          element={<LoginOne />}
        />
        <Route element={<ProtectedRoute isAunthenticated={true} />}>
          <Route
            path="/administrador/"
            element={<AdminOne />}
          >
            {/* <Route path="/*" element={<AdminOne />}> */}
            <Route
              path="inicio"
              element={<AnewsOne />}
            ></Route>
            <Route
              path="usuarios"
              element={<AusersOne />}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
