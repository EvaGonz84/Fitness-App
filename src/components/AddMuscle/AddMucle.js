import { useState } from "react";

const AddMucle = ({ onNewMuscle }) => {
  const [inputValue, setInputValue] = useState("biceps");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewMuscle(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Escribe un músculo"
        value={inputValue}
        onChange={onInputChange}
      ></input>
    </form>
  );
};

export default AddMucle;
