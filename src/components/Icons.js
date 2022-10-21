import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";
// import { motion } from "framer-motion";

import React from "react";

const Icons = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle className="inline text-3xl" />;

    case "cross":
      return <FaTimes className="inline text-3xl" />;

    default:
      return <FaPen className="inline text-3xl" />;
  }
};

export default Icons;
