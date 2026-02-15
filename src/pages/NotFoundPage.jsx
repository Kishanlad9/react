import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1 className="text-2xl">404 Page Not Found...!</h1>
      <Link to={"/"} className="text-blue-500 underline ">
        back to Login
      </Link>{" "}
    </div>
  );
};

export default NotFoundPage;
