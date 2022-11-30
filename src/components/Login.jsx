import { Formik, Field, Form } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../features/authSlice";
import ErrorValidation from "./validation/ErrorValidation";
import LoginSchema from "./validation/LoginSchema";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isSuccess, message } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isSuccess && user) {
      alert("Login Success");
      navigate("/");
    }
  }, [isSuccess, user]);
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, actions) => {
        dispatch(loginUser(values));
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <div className="bg-lightBlue min-h-screen">
          <div className="flex justify-center items-center min-h-screen">
            <div className="bg-primary mx-4 md:mx-0 md:w-4/6 lg:w-3/6  rounded-xl  p-14">
              <div className="font-merriweatherSans text-3xl font-semibold text-white text-center tracking-wider">
                Sign In
              </div>
              {message ? (
                <div className="mt-6 text-lg text-center text-red-500 tracking-wider">
                  {message}
                </div>
              ) : (
                ""
              )}
              <Form className="mt-6 md:mx-3" onSubmit={handleSubmit}>
                {/* Email */}
                <div className="mb-6">
                  <div className="flex gap-4 justify-center items-center">
                    <div
                      className={`h-6 w-6 bg-secondary ${
                        errors.email || message ? "bg-red-500" : ""
                      } rounded-full `}
                    ></div>
                    <Field
                      type="text"
                      name="email"
                      className="rounded-lg py-1 px-3 pt-2 w-2/3"
                      placeholder="Email"
                    />
                  </div>
                  {errors.email && touched.email ? (
                    <ErrorValidation
                      name={errors.email}
                      classname={"ml-16 md:mx-28"}
                    />
                  ) : null}
                </div>
                {/* Password */}
                <div className="mb-6">
                  <div className="flex gap-4 justify-center items-center ">
                    <div
                      className={`h-6 w-6 bg-secondary ${
                        errors.email || message ? "bg-red-500" : ""
                      } rounded-full `}
                    ></div>
                    <Field
                      type="password"
                      name="password"
                      className="rounded-lg py-1 px-3 pt-2 w-2/3"
                      placeholder="Password"
                    />
                  </div>
                  {errors.password && touched.password ? (
                    <ErrorValidation
                      name={errors.password}
                      classname={"ml-16 md:mx-28"}
                    />
                  ) : null}
                </div>
                {/* Sign In */}
                <div className="md:flex flex-wrap gap-8 mt-10 items-center justify-center font-biryani">
                  <button
                    type="submit"
                    className="bg-secondary text-lg py-2 pt-3 px-4 rounded-lg text-white  hover:bg-lightBlue"
                  >
                    Sign In
                  </button>
                  <div className="text-slate-300 mt-4 md:mt-0 text-sm tracking-wide ">
                    Dont Have Account?{" "}
                    <Link
                      to={"/register"}
                      className="text-lightBlue hover:underline hover:text-secondary"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}
