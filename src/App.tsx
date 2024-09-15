import "./App.css";
import "@fontsource/inter";
import { Route, Routes } from "react-router-dom";
import LoginOne from "./login/pages/LoginOne";
import AdminOne from "./admin/pages/AdminOne";
import AusersOne from "./admin/pages/AusersOne";

import ProtectedRoute from "./admin/utils/ProtectedRoute";
import { useAuthStore } from "./store/authStore";
import ANewsOne from "./admin/pages/AnewsOne";

function App() {
  // TODO: Cargar la configuracion del backend

  // TODO: Cargar el token

  // TODO: Cargar el rol

  // TODO: Cargar el usuario

  // TODO: Cargar el tema

  // TODO: Cargar el idioma

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const role = useAuthStore((state) => state.role);

  return (
    <>
      <Routes>
        <Route
          path=""
          element={<LoginOne />}
        />
        <Route
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              role={role}
              allowedRoles={["administrador"]}
            />
          }
        >
          <Route
            path="/administrador/"
            element={<AdminOne />}
          >
            {/* <Route path="/*" element={<AdminOne />}> */}
            <Route
              path="inicio"
              element={<ANewsOne />}
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
