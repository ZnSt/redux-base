import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/userSlice';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(logIn(form.elements.login.value));
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <br />
      <button type="submit">Log In</button>
    </form>
  );
};
