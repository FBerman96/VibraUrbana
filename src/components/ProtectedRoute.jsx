import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children, requiredRole }) => {
  const { currentUser, loading } = useContext(AuthContext);

  if (loading) {
    // Mientras se carga el usuario, no redirige ni muestra contenido
    return <div>Cargando...</div>;  
  }

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && currentUser.role !== requiredRole) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
