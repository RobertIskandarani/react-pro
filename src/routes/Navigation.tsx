import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route, NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import {
  FormikAbstractationPage,
  FormikBasicPage,
  FormikComponentsPage,
  FormikYupPage,
  RegisterPage,
} from '../03-forms/pages';

export default function Navigation() {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='React Logo' />
          <ul>
            <li>
              <NavLink
                to='/register'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-basic'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-yup'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-components'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-abstractation'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Abstractation
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path='formik-abstractation'
            element={<FormikAbstractationPage />}
          />
          <Route path='formik-components' element={<FormikComponentsPage />} />
          <Route path='formik-yup' element={<FormikYupPage />} />
          <Route path='formik-basic' element={<FormikBasicPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='/*' element={<Navigate to='register' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
