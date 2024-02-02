import { FormEvent } from 'react';

import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

export function RegisterPage() {
  const {
    name,
    email,
    password,
    repeatedPassword,
    formData,
    isValidEmail,
    onChange,
    reset,
  } = useForm({
    name: '',
    email: '',
    password: '',
    repeatedPassword: '',
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={name}
          type='text'
          placeholder='Name'
          name='name'
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}

        <input
          onChange={onChange}
          value={email}
          type='email'
          placeholder='Email'
          name='email'
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>El email no es válido</span>}

        <input
          onChange={onChange}
          value={password}
          type='password'
          placeholder='Password'
          name='password'
          className={`${
            (password.trim().length <= 0 ||
              (password.trim().length < 6 && password.trim().length > 0)) &&
            'has-error'
          }`}
        />
        {password.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password.trim().length < 6 && password.trim().length > 0 && (
          <span>La contraseña debe tener 6 caracteres</span>
        )}

        <input
          onChange={onChange}
          value={repeatedPassword}
          type='password'
          placeholder='Repeat Password'
          name='repeatedPassword'
          className={`${
            (repeatedPassword.trim().length <= 0 ||
              (repeatedPassword.trim().length > 0 &&
                password !== repeatedPassword)) &&
            'has-error'
          }`}
        />
        {repeatedPassword.trim().length <= 0 && (
          <span>Este campo es necesario</span>
        )}
        {repeatedPassword.trim().length > 0 &&
          password !== repeatedPassword && (
            <span>Las contraseñas deben ser iguales</span>
          )}

        <button type='submit'>Create</button>
        <button onClick={reset} type='button'>
          Reset
        </button>
      </form>
    </div>
  );
}
