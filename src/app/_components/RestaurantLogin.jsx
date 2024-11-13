"use client";
import React, { useState } from "react";
import "./RestaurantLogin.scss";
import Link from "next/link";

const RestaurantLogin = () => {
  const defaultForm = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(defaultForm);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic to handle form submission here
    console.log("Form submitted:", formData);
  };
  return (
    <div className="login">
      <h1>Restaurant Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link href="/register">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default RestaurantLogin;
