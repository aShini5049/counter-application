import React, { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);

  // Decrement handler
  function handleDecrement() {
    setValue((prev) => (prev > 0 ? prev - 1 : 0));
  }

  // Increment handler
  function handleIncrement() {
    setValue((prev) => prev + 1);
  }

  // Reset handler
  function handleReset() {
    setValue(0);
  }

  return (
    <div className="w-[320px] h-[400px] bg-[rgb(250,252,253)] rounded-[25px] shadow-md flex flex-col items-center justify-center border-none">
      {/* Counter Display */}
      <div className="bg-gradient-to-b from-[#fff44f] to-[#facc15] rounded-[25px] w-[160px] h-[200px] flex items-center justify-center mt-[-20px] border-none shadow-[0_0_20px_rgba(255,244,79,0.4)]">
        <h1 className="text-[4rem] font-bold text-black">{value}</h1>
      </div>

      {/* Buttons Section */}
      <div className="flex justify-center items-center mt-12 gap-20">
        {/* Decrement Button */}
        <button
          className="w-[65px] h-[50px] bg-[#f6f8cd] rounded-[15px] text-[45px] text-black hover:bg-[#F0E68C] transition duration-300"
          onClick={handleDecrement}
        >
          -
        </button>

        {/* Reset Button */}
        <button
          className="w-[130px] h-[50px] bg-[#f6f8cd] rounded-[15px] text-[25px] font-extrabold text-black hover:bg-[#F0E68C] transition duration-300"
          onClick={handleReset}
        >
          RESET
        </button>

        {/* Increment Button */}
        <button
          className="w-[65px] h-[50px] bg-[#f6f8cd] rounded-[15px] text-[45px] font-bold text-black hover:bg-[#F0E68C] transition duration-300"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
