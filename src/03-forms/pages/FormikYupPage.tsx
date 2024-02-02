import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export function FormikYupPage() {
  const { touched, errors, handleSubmit, getFieldProps } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('First Name Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Last Name Required'),
      email: Yup.string()
        .email('Invalid Email Address')
        .required('Last Name Required'),
    }),
  });

  return (
    <div>
      <h1>Formik Yup Page</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First Name</label>
        <input type='text' {...getFieldProps('firstName')} />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor='lastName'>Last Name</label>
        <input type='text' {...getFieldProps('lastName')} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor='email'>Email</label>
        <input type='email' {...getFieldProps('email')} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
