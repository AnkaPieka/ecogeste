import React from "react";
import { gql, useMutation } from "@apollo/client";
import { Formik, Form, Field } from "formik";

const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      id
      name
      email
      token
    }
  }
`;

const SignUp = () => {
  const [addUser] = useMutation(ADD_USER);

  const handleSubmit = async (values: { name: string; email: string; password: string }) => {
    try {
      const response = await addUser({
        variables: { ...values },
      });
      console.log(response.data.addUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="text" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
            </div>
            <button type="submit">Sign Up</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
