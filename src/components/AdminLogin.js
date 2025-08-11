import React, { useState } from "react";
import "./AdminLogin.css";

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // Simple hardcoded check (replace with real auth in production)
    if (username === "admin" && password === "admin123") {
      onLogin();
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="admin-login-container" style={{
          background: `url(${process.env.PUBLIC_URL + '/14.png'}) no-repeat center center fixed`,
          backgroundSize: 'cover',
          minHeight: '100vh',
          width: '100%',
        }}
    >
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <div className="login-error">{error}</div>}
      </form>
    </div>
  );
};

export default AdminLogin;