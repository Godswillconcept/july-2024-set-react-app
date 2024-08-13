import React, { useContext } from 'react'
import Login from '../pages/Login';
import { UserContext } from '../contexts/userContext';

function RouteGuard({ component: Component }) {
    const { user } = useContext(UserContext);
    return user ? <Component /> : <Login />;
  }
export default RouteGuard