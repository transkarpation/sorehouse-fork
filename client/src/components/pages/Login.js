import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux'
import {signUpRequest} from '../../ducks/auth'


export const validate = (values) => {
  const errors = {};

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'Must be 6 characters or more';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

export default function Login() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      const {email, password} = values;
      dispatch(signUpRequest(email, password));
    },
  });

  return (
    <form className="auth-page login-page" onSubmit={formik.handleSubmit}>
      <div className="field">
        <TextField
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="email"
          label="Email"
          error={formik.touched.email && formik.errors.email ? true : false}
          helperText={formik.touched.email && formik.errors.email}
        />
      </div>
      <div className="field">
        <TextField
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="password"
          type="password"
          label="Password"
          error={formik.touched.password && formik.errors.password ? true : false}
          helperText={formik.touched.password && formik.errors.password}
        />
      </div>
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </form>
  );
}
