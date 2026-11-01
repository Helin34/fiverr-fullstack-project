import React, { type FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useProfile } from "../../service/auth";
import Loader from "../loader";

const Protect: FC = () => {
  const { user, isLoading } = useProfile();

  if (isLoading) return <Loader />;

  if (!user || !user.isSeller) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default Protect;
