import React, { useState } from "react";
import yesImage from "./meme.jpg";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState("");

  const handleYesClick = () => {
    setAnswer("yes");
  };

  const handleNoClick = () => {
    setAnswer("no");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-100">
      <div className="bg-white p-4 md:p-8 rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
        <h1 className="text-2xl md:text-3xl text-center text-pink-600 mb-4">
          Agi.. Czy zostaniesz moją walentynką?
        </h1>
        {answer === "yes" ? (
          <div>
            <p className="text-center">to widzimy się o 17</p>
            <img
              src={yesImage}
              alt="Tak"
              className="mt-4 mx-auto max-w-full rounded-lg"
            />
          </div>
        ) : answer === "no" ? (
          <p className="text-center">aha</p>
        ) : (
          <div className="flex flex-col md:flex-row justify-center items-center">
            <button
              onClick={handleYesClick}
              className="bg-pink-600 text-white px-4 py-2 rounded-md mb-2 md:mb-0 md:mr-2 hover:bg-pink-700"
            >
              Tak
            </button>
            <button
              onClick={handleNoClick}
              className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700"
            >
              Nie
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
