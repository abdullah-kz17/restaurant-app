import React from "react";
import "./RestaurantLogin.scss";

const RestaurantLogin = () => {
  return (
    <div className="login">
      <h1>Restaurant Login</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
      <p>
        Don't have an account? <a href="/register">Sign up</a>
      </p>
    </div>
  );
};

export default RestaurantLogin;
