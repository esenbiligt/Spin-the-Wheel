import { useState } from "react";
import { useEffect } from "react";

export default function Input(props) {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="bg-gray-400 w-96 min-h-96 h-fit p-5">
      <textarea
        className="w-full h-96"
        value={input}
        onChange={handleInputChange}
      />
      <button
        className="border border-black bg-white"
        onClick={() => {
          props.function(input.split(" "));
          console.log(props.input);
        }}
      >
        draw
      </button>
    </div>
  );
}
