import React from 'react';
import { Formik, Field, Form } from 'formik';

const StudentForm = ({initialValues={}, onSubmit=()=>{}}) => {

  return (
    <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            userName: '',
            schoolName: '',
            license: '',

            ...initialValues
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            onSubmit(JSON.stringify(values, null, 2));
          }}
        >
          {({ values, handleChange }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="firstName">firstName</label>
                <input
                  id="firstName"
                  className="form-control"
                  name="firstName"
                  onChange={handleChange}
                  value={values.firstName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">lastName</label>
                <input
                  id="lastName"
                  className="form-control"
                  name="lastName"
                  onChange={handleChange}
                  value={values.lastName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="userName">userName</label>
                <input
                  id="userName"
                  className="form-control"
                  name="userName"
                  onChange={handleChange}
                  value={values.userName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="schoolName">schoolName</label>
                <input
                  id="schoolName"
                  className="form-control"
                  name="schoolName"
                  onChange={handleChange}
                  value={values.schoolName}
                />
              </div>

              <div className="form-group">
                <label>
                  <Field type="radio" name="license" value="licensed" />
                  licensed
                </label>
                <label>
                  <Field type="radio" name="license" value="not licensed" />
                  not licensed
                </label>
              </div>

              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>

  );
};

export default StudentForm;
