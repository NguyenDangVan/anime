import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../actions/userActions";
import "../../assets/login.scss";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.user);
  console.log(error)
  console.log(user)
  const { handleSubmit, control, errors } = useForm();

  const onSubmit = (data) => {
    data.username = data.username.toLowerCase();
    dispatch(loginUser(data));
  };

  return (
    <div className="login">
      <div className="form-login">
        <div>
          <h3>Login</h3>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>

            <Controller
              control={control}
              name="username"
              defaultValue=""
              rules={{ required: true }}
              as={
                <input
                  placeholder="Email"
                />
              }
            />

            <Controller
              control={control}
              name="password"
              defaultValue=""
              rules={{ required: true }}
              as={
                <input
                  type="password"
                  placeholder="Password"
                />
              }
            />

            {(errors.username || errors.password || error.login) && (
              <div>
                <span className="text-danger mb-1 p-1">
                  {error.login.login
                    ? // user or password is wrong
                    error.login.login
                    : // errors required
                    "Please enter your username and password"
                  }
                </span>
              </div>
            )}

            <div className="box-btn">
              <button className="btn btn-warning">Submit</button>
            </div>
          </form>
        </div>

        <div className="box-btn">
          <button className="btn btn-primary">Facebook</button>
        </div>
        <div className="box-btn">
          <button className="btn btn-info">Google</button>
        </div>
        <div className="context">
        </div>
      </div>
    </div>
  )
}

export default LoginForm;
