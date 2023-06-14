import React, { useState } from "react";
import { Logout, login, userData } from "../api/api__admin";

import "./Login.css";
import {  useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setIsError(false);

    try {
      await login(email, password);

      if(userData.role == 'admin'){
      navigate("/admin");
      }else if(userData.role == 'instructor'){
      navigate("/instructor/consultation");
      }


    } catch (error) {
      console.error(error); 
      setIsError(true);
    }

    setIsLoading(false);
  };
  const handleLogout = () => {
    Logout(); // Réinitialiser le token dans le contexte
    // Effectuer les autres actions de déconnexion nécessaires
  };

  return (
    <div className="container">
      <form onSubmit={handleLogin} className="form-container">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
        />

        <button type="submit" className="form-button" disabled={isLoading}>
          {isLoading ? "Loading..." : "Login"}
        </button>

        {isError && <div className="error-message">Login failed</div>}
      </form>
      <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
    </div>
  );
}

export default Login;
