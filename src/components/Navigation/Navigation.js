import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className="header-nav__auth">
      <NavLink className="header-nav" to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className="header-page__contacts" to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
