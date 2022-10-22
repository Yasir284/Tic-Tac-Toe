import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";
import React from "react";

const Icons = ({ name, className }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle className={`inline text-3xl ${className}`} />;

    case "cross":
      return <FaTimes className={`inline text-3xl ${className}`} />;

    default:
      return <FaPen className={`inline text-3xl ${className}`} />;
  }
};

export default Icons;
