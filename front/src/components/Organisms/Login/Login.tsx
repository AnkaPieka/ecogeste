import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const CHECK_USER_QUERY = gql`
  query CheckUser($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data, loading, error } = useQuery(CHECK_USER_QUERY, {
    variables: { email, password },
  });

  const handleLogin = () => {
    if (loading) {
      console.log("Veuillez attendre pendant la vérification de l'utilisateur.");
      return;
    }

    if (error) {
      console.error("Erreur lors de la connexion :", error.message);
      return;
    }

    const token = data?.login;

    if (token) {
      // Connexion réussie, rediriger sur la page du Dashboard
      navigate("/dashboard");
    } else {
      console.error("Échec de la connexion. Vérifiez vos identifiants.");
    }
  };

  return (
    <div className="boxLogin">
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
};

export default Login;
