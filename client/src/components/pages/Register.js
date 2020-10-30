import React, {useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useFormik } from 'formik';
import {signUpRequest} from '../../ducks/auth'
import { useDispatch, useSelector } from 'react-redux'
import history from '../../history';

import { validate } from './Login';

export default function Register() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token)
  useEffect(() => {
    if(token) {
      history.push('/alls')
    }
  }, [token]);


  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values) => {
      const {email, password} = values;
      dispatch(signUpRequest(email, password))
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="auth-page register-page">
      <div className="field">
        <TextField
          label="Email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
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
        Signup
      </Button>
    </form>
  );
}
