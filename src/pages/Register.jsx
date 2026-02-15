import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { registerSchema } from "../utils/validationSchemas";
const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cnfPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: (value) => {
      console.log(value);
    },
  });
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <form
        className="bg-white text-gray-500 w-full max-w-[500px] mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10"
        onSubmit={formik.handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign Up
        </h2>

        <input
          id="text"
          name="name"
          className={`w-full border mt-1 bg-indigo-500/5  border-gray-500/10 outline-none rounded py-2.5 px-3 ${formik.touched.name && formik.errors.name ? "invalid: text-red-500 invalid: border-red-500 " : "mb-5"}`}
          type="text"
          placeholder="Name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <p className="text-red-500 mb-5">{formik.errors.name}</p>
        )}
        <input
          id="email"
          name="email"
          className={`w-full border mt-1 bg-indigo-500/5 border-gray-500/10 outline-none rounded py-2.5 px-3 ${formik.touched.email && formik.errors.email ? "invalid:text-red-500 invalid: border-red-500" : "mb-5"}`}
          type="text"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 mb-5">{formik.errors.email}</p>
        )}
        <input
          name="password"
          id="password"
          className={`w-full border mt-1 bg-indigo-500/5  border-gray-500/10 outline-none rounded py-2.5 px-3 ${formik.touched.password && formik.errors.password ? "invalid:text-red-500 invalid: border-red-500" : "mb-5"}`}
          type="text"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 mb-5">{formik.errors.password}</p>
        )}

        <input
          name="cnfPassword"
          id="cnfPassword"
          className={`w-full border mt-1 bg-indigo-500/5  border-gray-500/10 outline-none rounded py-2.5 px-3 ${formik.touched.cnfPassword && formik.errors.cnfPassword ? "invalid:text-red-500 invalid: border-red-500" : "mb-7"}`}
          type="text"
          placeholder="Confirm Password"
          value={formik.values.cnfPassword}
          onChange={formik.handleChange}
        />
        {formik.touched.cnfPassword && formik.errors.cnfPassword && (
          <p className="text-red-500 mb-7">{formik.errors.cnfPassword}</p>
        )}

        <button
          className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium"
          type="submit"
        >
          Create Account
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to={"/"} className="text-blue-500 underline">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
