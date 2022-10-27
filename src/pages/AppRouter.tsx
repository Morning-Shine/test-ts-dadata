import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { publicRoutes } from "./routs";



export default function AppRouter() {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
}
