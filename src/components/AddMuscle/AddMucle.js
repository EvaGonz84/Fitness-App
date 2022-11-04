import { useState } from "react";
import SearchMuscle from "../SearchMuscle/SearchMuscle";

const AddMucle = ({ onNewMuscle }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ value }) => {
    setInputValue(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewMuscle(inputValue.trim());
    setInputValue("");
  };

  return (
    <SearchMuscle
      onSubmit={onSubmit}
      onInputChange={onInputChange}
    ></SearchMuscle>
  );
};

export default AddMucle;
