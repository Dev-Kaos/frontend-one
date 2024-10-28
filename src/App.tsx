import "./App.css";
import "@fontsource/inter";
import { Route, Routes } from "react-router-dom";

import AdminOne from "./admin/pages/AdminOne";
import AusersOne from "./admin/pages/AusersOne";

import ProtectedRoute from "./admin/utils/ProtectedRoute";
import { useAuthStore } from "./shared/store/authStore";

import AcoursesOne from "./admin/pages/AcoursesOne";
import AcoursesTwo from "./admin/pages/AcoursesTwo";
import ANewsOne from "./admin/pages/ANewsOne";
import LoginTwo from "./login/pages/LoginTwo";
import TeacherOne from "./teacher/pages/TeacherOne";
import AdminTwo from "./admin/pages/AdminTwo";
import AdminFour from "./admin/pages/AdminFour";

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
          path="/"
          element={<LoginTwo />}
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
            <Route
              path="cursos"
              element={<AcoursesOne />}
            ></Route>
            <Route
              path="matriculas"
              element={<AcoursesTwo />}
            ></Route>
          </Route>
          <Route
            path="/administradorDos/"
            element={<AdminFour />}
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
            <Route
              path="cursos"
              element={<AcoursesOne />}
            ></Route>
            <Route
              path="matriculas"
              element={<AcoursesTwo />}
            ></Route>
          </Route>
        </Route>
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
            path="/docente/"
            element={<TeacherOne />}
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
            <Route
              path="cursos"
              element={<AcoursesOne />}
            ></Route>
            <Route
              path="matriculas"
              element={<AcoursesTwo />}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
