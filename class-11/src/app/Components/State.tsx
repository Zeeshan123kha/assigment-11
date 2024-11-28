'use client'
import { useState } from "react";

const State = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
  return (
    <div className="w-full sm:11/12 md:9/12 lg:w-6/12 xl:w-4/12 h-auto shadow-md shadow-black m-auto">
        <div className="text-center text-4xl font-sans font-bold">
        <h1 className="text-[#044e83]">Count: <span className="text-black mt-10">{count}</span></h1>
        </div>
        <div className="space-x-5 text-center font-sans font-semibold p-10">
        <button className="py-2 px-2 bg-blue-700 text-white rounded-sm shadow-sm shadow-black" onClick={handleIncrement}>Increment</button>
        <button className="py-2 px-2 bg-red-700 text-white rounded-sm shadow-sm shadow-black ml-5" onClick={handleDecrement}>Decrement</button>
      </div>
      
    </div>
  );
}

export default State;
