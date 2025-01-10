import * as Yup from "yup";

// export const loginValidationSchema = Yup.object().shape({
//   email: Yup.string()
//     .email("Invalid email address")
//     .when("username", {
//       is: (username: string | undefined) => !username || username === "",
//       then: Yup.string().required("Email is required"),
//       otherwise: Yup.string().nullable(), // Make it optional when username is provided
//     }),
//   username: Yup.string().when("email", {
//     is: (email: string | undefined) => !email || email === "",
//     then: Yup.string().required("Username is required"),
//     otherwise: Yup.string().nullable(), // Make it optional when email is provided
//   }),
//   password: Yup.string()
//     .required("Password is required") // Ensure password is always required
//     .min(8, "Password must be at least 8 characters long"),
// });

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .test("email-or-username", "Email is required", function (value) {
      const { username } = this.parent;
      return !!value || !!username; // At least one of them must be provided
    }),
  username: Yup.string().test(
    "username-or-email",
    "Username is required",
    function (value) {
      const { email } = this.parent;
      return !!value || !!email; // At least one of them must be provided
    }
  ),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

export const signupValidationSchema = Yup.object().shape({
  firstname: Yup.string()
    .trim()
    .required("First name is required")
    .max(21)
    .label("Firstname"),
  surname: Yup.string()
    .trim()
    .required("Surname is required")
    .max(21)
    .label("Surname"),
  email: Yup.string().required().email("Email is required").label("Email"), // Validation for Email
  username: Yup.string().required("Username is required").label("Username"), // Validation for Username
  password: Yup.string()
    .required("Password is required")
    .min(8)
    .label("Password"), // Validation for Password
  phone: Yup.string()
    .trim()
    .required("Phone is required")
    .max(21)
    .label("Phone"),
  areacode: Yup.string().required("Area code missing"),
  country: Yup.string()
    .trim()
    .required("Country is required")
    .min(2)
    .max(21)
    .label("Country"),
});
