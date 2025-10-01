import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";

export default function AppRoutes({ isAuthenticated, onLogin, onLogout }) {
  return (
    <Routes>
      <Route path="/login" element={ isAuthenticated ? ( <Navigate to="/dashboard" replace /> ) : ( <Login onSuccess={onLogin} />)}/>
      <Route path="/register" element={ isAuthenticated ? ( <Navigate to="/dashboard" replace /> ) : ( <Register onSuccess={onLogin} />)}/>

      <Route path="/dashboard" element={ isAuthenticated ? ( <Dashboard onLogout={onLogout} /> ) : ( <Navigate to="/login" replace /> ) }/>

      <Route path="/"  element={isAuthenticated ? ( <Navigate to="/dashboard" replace /> ) : ( <Navigate to="/login" replace /> )} />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
