import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyCheckbox, MySelect, MyTextInput } from '../components';

export function FormikAbstractationPage() {
  return (
    <div>
      <h1>Formik Abstracation Page</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={() => {}}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('First Name Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Last Name Required'),
          email: Yup.string()
            .email('Invalid Email Address')
            .required('Last Name Required'),
          terms: Yup.boolean().isTrue('Accept Terms & Conditions'),
          jobType: Yup.string()
            .required('Job Type is required')
            .notOneOf(['it-junior'], 'Job Type must not be IT Junior'),
        })}
      >
        {(formik) => (
          <Form noValidate>
            <MyTextInput
              label='First Name'
              name='firstName'
              placeholder='Roberto'
            />

            <MyTextInput
              label='Last Name'
              name='lastName'
              placeholder='Iskandarani'
            />

            <MyTextInput
              label='Email Address'
              name='email'
              placeholder='robert@gmail.com'
              type='email'
            />

            <MySelect label='jobType' name='jobType'>
              <option value=''>Pick something...</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senior</option>
              <option value='it-junior'>IT Junior</option>
            </MySelect>

            <MyCheckbox label='Terms & Conditions' name='terms' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
