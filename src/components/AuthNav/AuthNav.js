import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div className="header-auth">
      <NavLink className="header-nav__auth" to="/register">
        Register
      </NavLink>
      <NavLink className="header-nav__auth" to="/login">
        Log In
      </NavLink>
    </div>
  );
};
