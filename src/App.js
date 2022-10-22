import "./App.css";

import Icons from "./components/Icons";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

const itemArray = new Array(9).fill("empty");

// Animation Varients
const containerVarient = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible1: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      ease: "easeOut",
      type: "spring",
      mass: 0.5,
      damping: 8,
    },
  },
  visible2: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      type: "spring",
      mass: 0.5,
      damping: 6,
    },
  },
  hover: {
    boxShadow: "none",
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  },
};

const boxVarient = {
  whileTap: {
    scale: [1, 0, 1],
    transition: {
      ease: "easeOut",
    },
  },
};

const headingVarient = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: [2, 1],
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};

function App() {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMeaasge] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMeaasge("");
    itemArray.fill("empty", 0, 9);
  };

  const checkIsWinner = () => {
    let draw = itemArray.every((item) => item !== "empty");
    if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2]
    ) {
      setWinMeaasge(`${itemArray[0].toUpperCase()} WON 🎉`);
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5]
    ) {
      setWinMeaasge(`${itemArray[3].toUpperCase()} WON 🎉`);
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8]
    ) {
      setWinMeaasge(`${itemArray[6].toUpperCase()} WON 🎉`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6]
    ) {
      setWinMeaasge(`${itemArray[0].toUpperCase()} WON 🎉`);
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7]
    ) {
      setWinMeaasge(`${itemArray[1].toUpperCase()} WON 🎉`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8]
    ) {
      setWinMeaasge(`${itemArray[2].toUpperCase()} WON 🎉`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8]
    ) {
      setWinMeaasge(`${itemArray[0].toUpperCase()} WON 🎉`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6]
    ) {
      setWinMeaasge(`${itemArray[2].toUpperCase()} WON 🎉`);
    } else if (draw === true && !winMessage) {
      setWinMeaasge("It's a Draw");
    }
  };
  // 123, 456, 789, 147, 258, 369, 159, 357

  const changeItem = (itemNumber) => {
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = !isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("Already Filled", { type: "error" });
    }

    checkIsWinner();
  };

  return (
    <>
      <motion.div
        className="bg-[rgba(3,11,11,0.5)] shadow-xl shadow-[rgba(8,8,8,0.5)] rounded-md m-3 mb-16"
        variants={containerVarient}
        initial="hidden"
        animate="visible1"
        whileHover="hover"
      >
        <h1 className="text-4xl text-center font-extrabold py-4">
          Tic Tac Toe
        </h1>
      </motion.div>

      <motion.div
        className="flex flex-col items-center"
        variants={containerVarient}
        initial="hidden"
        animate="visible2"
      >
        <ToastContainer position="top-left" />
        {winMessage ? (
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={winMessage}
              variants={headingVarient}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h1 className="text-4xl font-semibold text-center text-green-500 rounded-md shadow-inner shadow-black p-2">
                {winMessage}
              </h1>
              <button
                onClick={reloadGame}
                className="w-72 font-semibold text-white bg-green-500  rounded-lg my-4 py-2 transition-all duration-200 ease-in-out  active:scale-75"
              >
                Reset Game
              </button>
            </motion.div>
          </AnimatePresence>
        ) : (
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={isCross}
              variants={headingVarient}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h1 className="mb-16 p-3 text-4xl font-semibold rounded-md shadow-inner shadow-black">
                <pre>
                  <Icons
                    name={!isCross ? "cross" : "circle"}
                    className="text-yellow-300"
                  />{" "}
                  {!isCross ? "Cross" : "Circle"} turns
                </pre>
              </h1>
            </motion.div>
          </AnimatePresence>
        )}

        <div className="grid grid-cols-3 rounded-md bg-[rgba(3,11,11,0.5)] shadow-xl shadow-[rgba(8,8,8,0.5)] justify-center">
          {itemArray.map((item, index) => (
            <motion.div
              variants={boxVarient}
              whileTap="whileTap"
              onClick={() => changeItem(index)}
              className="p-8 border-solid border-2 border-[rgba(0,0,0,0.1)]"
            >
              <Icons name={item} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default App;
