import * as Yup from "yup";

export const signUpSchema = Yup.object({
  fname: Yup.string()
    .min(3)
    .max(15)
    .required("Please Enter your First Name")
    .matches("^[a-zA-Z]*$", "should match"),
  lname: Yup.string()
    .min(3)
    .max(15)
    .required("Please Enter your Last Name")
    .matches("^[a-zA-Z]*$", "should match"),
  uname: Yup.string()
    .min(3)
    .max(20)
    .required("Please Enter Username")
    .matches(
      "^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$",
      "Should match"
    ),
  email: Yup.string().email().required("Please Enter your Email"),
  pass: Yup.string()
    .min(3)
    .max(20)
    .required("Please Enter your Password")
    .matches(
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#@$?]).{8,16}$",
      "Should match"
    ),
  gender: Yup.string().required("Enter gender"),
  cpass: Yup.string()
    .required("Please Enter your Password")
    .oneOf([Yup.ref("pass"), null], "Password must match"),
  age: Yup.number().positive().integer().required("Please Enter your Age"),
  price: Yup.number().positive().integer().required("Please Enter your Price"),
  quantity: Yup.number()
    .positive()
    .integer()
    .required("Please Enter your Price"),
});
