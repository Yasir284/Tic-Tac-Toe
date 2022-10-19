import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

import React from "react";

const Icons = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle className="text-3xl" />;

    case "cross":
      return <FaTimes className="text-3xl" />;

    default:
      return <FaPen className="text-3xl" />;
  }
};

export default Icons;
