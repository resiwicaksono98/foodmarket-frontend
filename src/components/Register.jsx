import { Formik, Form, Field } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../features/authSlice";
import ErrorValidation from "./validation/ErrorValidation";
import RegisterSchema from "./validation/RegisterSchema";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, message, isSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      alert("Register Success");
      navigate("/login");
    }
  }, [isSuccess]);
  return (
    <Formik
      initialValues={{
        fullname: "",
        email: "",
        password: "",
      }}
      validationSchema={RegisterSchema}
      onSubmit={(values) => {
        dispatch(registerUser(values));
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <div className="bg-lightBlue min-h-screen">
          <div className="flex justify-center items-center min-h-screen">
            <div className="bg-primary mx-4 md:mx-0 md:w-4/6 lg:w-3/6  rounded-xl  p-14">
              <div className="font-merriweatherSans text-center text-3xl font-semibold text-white tracking-wider">
                Sign Up
              </div>
              {message ? (
                <div className="mt-6 text-lg text-center text-red-500 tracking-wider">
                  {message}
                </div>
              ) : (
                ""
              )}
              <Form className="mt-6 md:mx-3" onSubmit={handleSubmit}>
                {/* Fullname */}
                <div className="mb-6">
                  <div className="flex gap-4 justify-center items-center">
                    <div
                      className={`h-6 w-6 bg-secondary ${
                        errors.fullname || message ? "bg-red-500" : ""
                      } rounded-full `}
                    ></div>
                    <Field
                      type="text"
                      name="fullname"
                      className="rounded-lg py-1 px-3 pt-2 w-2/3"
                      placeholder="Fullname"
                    />
                  </div>
                  {errors.fullname && touched.fullname ? (
                    <ErrorValidation
                      name={errors.fullname}
                      classname={"ml-16 md:mx-28"}
                    />
                  ) : null}
                </div>
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
                {/* Button And Other */}
                <div className="md:flex flex-wrap gap-8 mt-10 items-center justify-center font-biryani">
                  <button
                    type="submit"
                    className="bg-secondary text-lg py-2 pt-3 px-4 rounded-lg text-white  hover:bg-lightBlue"
                  >
                    Sign Up
                  </button>
                  <div className="text-slate-300 mt-4 md:mt-0 text-sm tracking-wide ">
                    Already Have Account?{" "}
                    <Link
                      to={"/login"}
                      className="text-lightBlue hover:underline hover:text-secondary"
                    >
                      Login
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
