import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className="registr-form " onSubmit={handleSubmit} autoComplete="off">
      <label className="registr-label">
        Email
        <input className="registr-input" type="email" name="email" />
      </label>
      <label className="registr-label">
        Password
        <input className="registr-input" type="password" name="password" />
      </label>
      <button className="registr-button" type="submit">
        Log In
      </button>
    </form>
  );
};
