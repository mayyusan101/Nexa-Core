import React, { useState } from "react";
import icon from "../assets/Login-amico.svg";
import { Button } from "../util/import";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../store/features/users/userSlice";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const selectUserLoggedInStatus = useSelector(
    (state) => state.user.isLoggedIn
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(authenticate({ email, password }));
      if (selectUserLoggedInStatus === false) {
        navigate("/home");
      } else {
        alert("invalidate email and password");
      }
    }
  };
  return (
    <main className="bg-red-100 w-screen h-screen flex items-center justify-center">
      <div className="m-3 overflow-hidden flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0 w-full md:w-4/5 mx-auto h-full bg-green-100">
        <section className="px-5 md:flex-1 md:px-0">
          <img
            src={icon}
            alt=""
            className="w-full object-cover object-center min-h-[300px]"
          />
        </section>
        <section className="px-5 md:flex-1 w-full pb-8 md:pb-0">
          <h1 className="text-center font-bold text-xl md:text-2xl mb-5 sm:mb-10">
            Login Page
          </h1>
          <form className="" onSubmit={handleLogin}>
            <div className="mb-3 flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-lg md:text-xl font-semibold"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border-none focus:border focus:border-primary"
              />
            </div>
            <div className="mb-3 flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-lg md:text-xl font-semibold"
              >
                Password
              </label>
              <input
                type="text"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-2 border-none focus:border focus:border-primary"
              />
            </div>
            <div className="mt-6 flex justify-end pe-5">
              <Button type="submit">Login</Button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};
