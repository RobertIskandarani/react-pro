import '../styles/styles.css';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

export function RegisterFormikPage() {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          repeatedPassword: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Must be at least 2 characters')
            .max(15, 'Must be 15 characters or less')
            .required('Name Required'),
          email: Yup.string()
            .email('Invalid Email Address')
            .required('Email Required'),
          password: Yup.string()
            .min(6, 'Must be at least 6 characters')
            .required('Password Required'),
          repeatedPassword: Yup.string()
            .equals([Yup.ref('password')], 'Passwords must match')
            .required('Repeat Password Required'),
        })}
      >
        {({ handleReset }) => (
          <Form noValidate>
            <MyTextInput label='Name' name='name' placeholder='Robert' />

            <MyTextInput
              label='Email'
              name='email'
              type='email'
              placeholder='robert@gmail.com'
            />

            <MyTextInput
              label='Password'
              type='password'
              name='password'
              placeholder='*******'
            />

            <MyTextInput
              label='Repeat Password'
              type='password'
              name='repeatedPassword'
              placeholder='*******'
            />

            <button type='submit'>Create</button>
            <button onClick={handleReset} type='button'>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
