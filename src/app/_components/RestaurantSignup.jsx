import React from "react";
import "./RestaurantSignup.scss";

const RestaurantSignup = () => {
  return (
    <div className="signup">
      <h1>Restaurant Signup</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Address:
          <input type="text" name="address" required />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phone" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" required />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RestaurantSignup;
