import * as Yup from "yup";

export const registerSchema = Yup.object({
  name: Yup.string().required().min(2),
  email: Yup.string().email().required(),
  password: Yup.string()
    .required()
    .min(6, "Atleast 6 digit/character required")
    .max(24),
  cnfPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Password not match"),
});

export const loginSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(6).max(24),
});
