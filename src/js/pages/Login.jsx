import React from "react";

export const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
  });

  const handleChange = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };
};
