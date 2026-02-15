import React, { useState } from "react";
import { validateField, validateForm } from "../utils/validation";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Field-level validation
  const handleChange = (e) => {
    const { name, value } = e.target;

    const newForm = { ...form, [name]: value };
    setForm(newForm);

    const error = validateField(name, value, newForm);

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Login Data:", form);
      alert("Login Successful");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="input-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
