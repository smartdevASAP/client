import { Navigate } from "react-router-dom";
import { useApp } from "../context/userContext";
import type { ReactNode } from "react";

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { username } = useApp();

  if (!username) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
