import React from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import feuilledeco from "../../../assets/deuxfeuilles 36.png";
import { useNavigate } from "react-router-dom";

const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

const CHECK_USER = gql`
  query checkUser($email: String!) {
    getUserByEmail(email: $email) {
      id
    }
  }
`;

const SignUp = () => {
  const navigate = useNavigate();
  const [addUser] = useMutation(ADD_USER);
  const { data: userData, loading } = useQuery(CHECK_USER);

  const handleSubmit = async (values: { name: string; email: string; password: string; confirmPassword: string}) => {
    try {
      console.log("Données du formulaire :", values);
      // Vérifier si un utilisateur avec le même e-mail existe déjà
      if (!loading) {
        const existingUser = userData?.getUserByEmail;

        if (existingUser) {
          console.log("Un utilisateur avec le même e-mail existe déjà.");
          // Afficher un message d'erreur ou prendre une autre action
          return;
        }
      }

      // Créer le nouvel utilisateur si l'utilisateur n'existe pas
      const response = await addUser({
        variables: { ...values },
      });
      console.log("Données reçues :", response.data.addUser);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const validateConfirmPassword = (value: string, { password }: { password: string }) => {
    if (password && value !== password) {
      return "Les mots de passe ne correspondent pas";
    }
    return undefined;
  };

  return (
    <div className="boxSignUp">
      <div className="top">
        <h1>Sign Up</h1>
        <img src={feuilledeco} alt="feuille en décoration" />
      </div>
      <div className="GlobalSignUp">
        <Formik
          initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="boxInput">
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" />
              </div>
              <div className="boxInput">
                <label htmlFor="email">Email</label>
                <Field type="text" id="email" name="email" />
              </div>
              <div className="boxInput">
                <label htmlFor="password">Password</label>
                <Field type="password" id="password" name="password" />
              </div>
              <div className="boxInput">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  validate={validateConfirmPassword}
                />
                <ErrorMessage name="confirmPassword" component="div" className="error" />
              </div>
              <button type="submit">Sign Up</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
