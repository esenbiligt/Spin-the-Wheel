import { Inter } from "next/font/google";
import Wheel from "@/components/Wheel";
import Input from "@/components/Input";
import { useState } from "react";

export default function Home() {
  const [inputArray, setInputArray] = useState([]);
  return (
    <div className="h-screen w-screen bg-black">
      <header className="h-fit w-full px-96 pt-14 flex justify-center">
        <h1 className="text-5xl text-white">SPIN THE WHEEL</h1>
      </header>
      <div className="h-fit w-full px-80 pt-20 bg-gray-100 flex justify-between items-center">
        <Wheel input={inputArray} function={setInputArray} />
        <Input input={inputArray} function={setInputArray} />
      </div>
    </div>
  );
}
