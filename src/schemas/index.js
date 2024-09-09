import * as yup from "yup";

const passwordMatches = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const formSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  userName: yup.string().required("Please enter a username"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .max(10, "Password must be less than 10 characters")
    .matches(passwordMatches, {
      message: "Please create a stronger password",
    })
    .required("Please enter a password"),
});