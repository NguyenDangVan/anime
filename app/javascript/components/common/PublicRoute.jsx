import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

// Redirect to profile khi người dùng đã đăng nhập
const PublicRoute = ({ component: Component, ...rest }) => {
  console.log("Redirect after login")
  const { isAuth } = useSelector((state) => state.user);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Redirect to="/movies" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
