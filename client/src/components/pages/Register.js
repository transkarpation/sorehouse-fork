import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useFormik } from 'formik';

import { validate } from './Login';

export default function Register() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="auth-page register-page">
      <div className="field">
        <TextField
          id="standard-basic"
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
          id="standard-basic"
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
