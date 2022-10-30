import { useState } from "react";

const AddMucle = ({ onNewMuscle }) => {
  const [inputValue, setInputValue] = useState("");

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
        onChange={onInputChange}
      ></input>
      <button>Search</button>
    </form>
  );
};

export default AddMucle;
