import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({
  isAuthenticated,
  role,
  allowedRoles,
}: {
  isAuthenticated: boolean;
  role: string;
  allowedRoles: string[];
}) {
  if (!isAuthenticated || !allowedRoles.includes(role)) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
}
