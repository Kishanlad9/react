// Validate single field
export const validateField = (name, value, formData = {}) => {
  let error = "";

  if (!value.trim()) {
    return "This field is required";
  }

  switch (name) {
    case "email":
      if (!/\S+@\S+\.\S+/.test(value)) {
        error = "Invalid email format";
      }
      break;

    case "password":
      if (value.length < 6) {
        error = "Password must be at least 6 characters";
      }
      break;

    case "confirmPassword":
      if (value !== formData.password) {
        error = "Passwords do not match";
      }
      break;

    default:
      break;
  }

  return error;
};

// Validate full form
export const validateForm = (formData) => {
  let errors = {};

  Object.keys(formData).forEach((field) => {
    const error = validateField(field, formData[field], formData);
    if (error) errors[field] = error;
  });

  return errors;
};
