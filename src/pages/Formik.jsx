import React from 'react'
import { useFormik } from "formik";
import * as yup from "yup";

const Formik = () => {

  let formik = useFormik({

    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },

    onSubmit: (values) => {
      console.log(values);
    },

    validationSchema: yup.object({
      firstName: yup
        .string()
        .required('First Name is required')
        .min(3, 'Min of three letters'),

      lastName: yup
        .string()
        .required('Last Name is required')
        .min(3, 'Min of three letters'),

      email: yup
        .string()
        .required('Email is required')
        .email('Invalid email'),

      password: yup
        .string()
        .required("Password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Password must contain uppercase, lowercase, number and special character"
        )
    })

  });

  return (

    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow-lg border-0">

            <div className="card-body p-4">

              <h2 className="text-center mb-4">
                Registration Form
              </h2>

              {/* First Name */}

              <div className="mb-3">

                <label className="form-label">
                  First Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter First Name"
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.firstName &&
                  formik.errors.firstName && (
                    <small className="text-danger">
                      {formik.errors.firstName}
                    </small>
                  )}

              </div>

              {/* Last Name */}

              <div className="mb-3">

                <label className="form-label">
                  Last Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Last Name"
                  name="lastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.lastName &&
                  formik.errors.lastName && (
                    <small className="text-danger">
                      {formik.errors.lastName}
                    </small>
                  )}

              </div>

              {/* Email */}

              <div className="mb-3">

                <label className="form-label">
                  Email Address
                </label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.email &&
                  formik.errors.email && (
                    <small className="text-danger">
                      {formik.errors.email}
                    </small>
                  )}

              </div>

              {/* Password */}

              <div className="mb-3">

                <label className="form-label">
                  Password
                </label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.password &&
                  formik.errors.password && (
                    <small className="text-danger">
                      {formik.errors.password}
                    </small>
                  )}

              </div>

              <button
                onClick={formik.handleSubmit}
                type="button"
                className="btn btn-primary w-100"
              >
                Submit
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Formik