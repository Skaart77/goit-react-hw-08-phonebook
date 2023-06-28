import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import avatar from 'img/avatar.png';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className="logout">
      <img className="avatar" src={avatar} alt="" width="20" height="20" />
      <p>{user.email}</p>
      <button
        className="registr-button"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
