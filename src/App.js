import "./App.css";

import Icons from "./components/Icons";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const itemArray = new Array(9).fill("empty");

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
      setWinMeaasge(`${itemArray[0].toUpperCase()} WON`);
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5]
    ) {
      setWinMeaasge(`${itemArray[3].toUpperCase()} WON`);
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8]
    ) {
      setWinMeaasge(`${itemArray[6].toUpperCase()} WON`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6]
    ) {
      setWinMeaasge(`${itemArray[0].toUpperCase()} WON`);
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7]
    ) {
      setWinMeaasge(`${itemArray[1].toUpperCase()} WON`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8]
    ) {
      setWinMeaasge(`${itemArray[2].toUpperCase()} WON`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8]
    ) {
      setWinMeaasge(`${itemArray[0].toUpperCase()} WON`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6]
    ) {
      setWinMeaasge(`${itemArray[2].toUpperCase()} WON`);
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
      <div className=" bg-black border-white rounded-md m-3 mb-16 shadow-lg shadow-[rgba(0,0,0,0.19)]">
        <h1 className="text-4xl text-center font-extrabold py-4">
          Tic Tac Toe
        </h1>
      </div>

      <div className="flex flex-col items-center">
        <ToastContainer position="bottom-center" />
        {winMessage ? (
          <div>
            <h1 className="text-4xl font-semibold text-center">{winMessage}</h1>
            <button
              onClick={reloadGame}
              className="w-72 font-semibold text-white bg-[#07bc0c]  rounded-lg my-4 py-2 transition-all duration-200 ease-in-out  active:scale-75"
            >
              Reset Game
            </button>
          </div>
        ) : (
          <div>
            <h1 className="h-28 text-4xl font-semibold">
              {!isCross ? "Cross" : "Circle"} turns
            </h1>
          </div>
        )}

        <div className="grid grid-cols-3 justify-center">
          {itemArray.map((item, index) => (
            <div
              onClick={() => changeItem(index)}
              className="p-8 border-solid border-white border-2"
            >
              <Icons name={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
