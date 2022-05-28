/* eslint-disable react/button-has-type */
import { FC } from 'react';

// eslint-disable-next-line react/function-component-definition
const Login: FC = () => {
  const login = (): void => {
    fetch('http://localhost/test/login', { credentials: 'include' });
  };
  const logout = (): void => {
    fetch('http://localhost/test/logout', { credentials: 'include' });
  };
  return (
    <>
      <button onClick={() => login()}>Login</button>
      <button onClick={() => logout()}>Logout</button>
    </>
  );
};

export default Login;
