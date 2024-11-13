import React from "react";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignup from "../_components/RestaurantSignup";

const page = () => {
  return (
    <div>
      <h1>Restaurant Page</h1>

      <RestaurantLogin />
      <RestaurantSignup />
    </div>
  );
};

export default page;
