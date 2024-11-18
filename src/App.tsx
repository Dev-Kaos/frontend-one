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
import ANewsTwo from "./admin/pages/ANewsTwo";
import PlanM from "./planM/pages/PlanM";
import PModules from "./planM/pages/PModules";
import PRoles from "./planM/pages/PRoles";
import PUsers from "./planM/pages/PUsers";
import PProfile from "./planM/pages/PProfile";

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
          {/* <Route path="/*" element={<AdminOne />}> */}
          <Route
            path="/administrador/"
            element={<AdminOne />}
          >
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
              element={<ANewsTwo />}
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
          {/* recuperacion */}
          <Route
            path="/recuperacion/"
            element={<PlanM />}
          >
            <Route
              path="modules"
              element={<PModules />}
            ></Route>
            <Route
              path="roles"
              element={<PRoles />}
            ></Route>
            <Route
              path="users"
              element={<PUsers />}
            ></Route>
            <Route
              path="profile"
              element={<PProfile />}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
