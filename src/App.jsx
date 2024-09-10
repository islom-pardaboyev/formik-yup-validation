import React from "react";
import LoginImg from "./assets/login.jpeg";
import { useFormik } from "formik";
import { formSchema } from "./schemas";

const onSubmit = async (values, actions) => {
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

function App() {
  const {
    values,
    errors,
    handleBlur,
    isSubmitting,
    touched,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: formSchema,
    onSubmit,
  });
  console.log(errors);

  return (
    <section className="flex items-center justify-center min-h-screen">
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        action=""
        className="grid overflow-hidden border rounded-md shadow-xl grid-cols-12 w-[70vw] h-[70vh]"
      >
        <div className="col-span-6 h-full p-10">
          <h1 className="text-center font-medium text-3xl">Form Validation</h1>
          <div className="flex flex-col gap-5">
            <label htmlFor="userName" className="flex flex-col ">
              <span>User Name</span>
              <input
                id="userName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userName}
                type="text"
                className={`p-2 border ${
                  errors.userName && touched.userName
                    ? "!border-red-500 placeholder:text-red-500 focus:!border-red-500"
                    : "border-black/20 focus:border-black"
                }  outline-none rounded`}
                placeholder="User Name"
              />
              {errors.userName && touched.userName && (
                <p className="text-red-500">{errors.userName}</p>
              )}
            </label>
            <label htmlFor="email" className="flex flex-col ">
              <span>Email</span>
              <input
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                type="email"
                className={`p-2 border ${
                  errors.email && touched.email
                    ? "!border-red-500 placeholder:text-red-500 focus:!border-red-500"
                    : "border-black/20 focus:border-black"
                }  outline-none rounded`}
                placeholder="Email"
              />
              {errors.email && touched.email && (
                <p className="text-red-500">{errors.email}</p>
              )}
            </label>
            <label htmlFor="password" className="flex flex-col ">
              <span>Password</span>
              <input
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                type="password"
                className={`p-2 border ${
                  errors.password && touched.password
                    ? "!border-red-500 placeholder:text-red-500 focus:!border-red-500"
                    : "border-black/20 focus:border-black"
                }  outline-none rounded`}
                placeholder="Password"
              />
              {errors.password && touched.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
            </label>
            <label htmlFor="confirmPassword" className="flex flex-col ">
              <span>Confirm Password</span>
              <input
                id="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                type="password"
                className={`p-2 border ${
                  errors.confirmPassword && touched.confirmPassword
                    ? "!border-red-500 placeholder:text-red-500 focus:!border-red-500"
                    : "border-black/20 focus:border-black"
                }  outline-none rounded`}
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword}</p>
              )}
            </label>
          </div>
          <button
            disabled={isSubmitting}
            className="float-end mt-3 py-2 px-4 text-white bg-black rounded"
          >
            Submit
          </button>
        </div>
        <div className="col-span-6 relative">
          <img
            src={LoginImg}
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt="Login"
          />
        </div>
      </form>
    </section>
  );
}

export default App;