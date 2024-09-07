import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({
  isAunthenticated,
}: {
  isAunthenticated: boolean;
}) {
  if (!isAunthenticated) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
}
