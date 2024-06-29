import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../util/import";

function AuthLayout() {
  useAuth();

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
