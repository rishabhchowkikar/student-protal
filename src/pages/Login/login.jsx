import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export const Login = (props) => {
  const [name, setName] = useState(""); // to set the data of the user
  const [pass, setPass] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();
  // for authentication
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const users = [
    { name: "Rishabh Chowkikar", number: "211585", pass: "12345" },
  ];
  // after updating for storing the value after submission we use usehandling

  const handlename = (e) => {
    setName(e.target.value);
  };
  const handlepassword = (e) => {
    setPass(e.target.value);
  };
  const handlenumber = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(number);
    const account = users.find(
      (user) => (user.name === name, user.number === number)
    );
    if (account && account.pass === pass) {
      setauthenticated(true);
      localStorage.setItem("authenticated", true);
      console.log("rishabh");
      navigate("./Dashboard/dashboard");
    }
  };
  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label for="name">Name</label>
        <input
          value={name}
          type="text"
          placeholder="Full Name"
          id="name"
          name="name"
          onChange={handlename}
        />
        <label for="number">Roll No.</label>
        <input
          value={number}
          type="phone"
          placeholder="Roll No."
          id="number"
          onChange={handlenumber}
        />
        <label for="password">Password</label>
        <input
          value={pass}
          type="password"
          placeholder="password"
          id="password"
          name="password"
          onChange={handlepassword}
        />
        <button type="submit">Log In</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFromSwitch("registor")}
      >
        Don't have an account? Registor
      </button>
    </div>
  );
};
