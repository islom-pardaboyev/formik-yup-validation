import * as yup from "yup";

const passwordMatches = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const emailMatches = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const formSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required").matches(emailMatches, "Please enter a valid email"),
  userName: yup.string().required("Please enter a username").min(5, "Must be at least 5 letters"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .max(10, "Password must be less than 10 characters")
    .matches(passwordMatches, {
      message: "Please create a stronger password",
    })
    .required("Please enter a password"),
  confirmPassword: yup.string().oneOf([yup.ref('password'), ""], 'Passwords must match').required("Required")
});