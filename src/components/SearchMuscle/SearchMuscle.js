import React from "react";
import Select from "react-select";
import { Button } from "../../pages/HomePage/HomePage.styles";
import { ContainerSearchMuscle, Text, Line } from "./SearchMuscle.styles";

const SearchMuscle = (props) => {
  const muscles = [
    { value: "abdominals", label: "Abdominals", color: "#FF6D28" },
    { value: "abductors", label: "Abductors" },
    { value: "adductors", label: "Adductors" },
    { value: "biceps", label: "Biceps" },
    { value: "calves", label: "Calves" },
    { value: "chest", label: "Chest" },
    { value: "forearms", label: "Forearms" },
    { value: "glutes", label: "Glutes" },
    { value: "hamstrings", label: "Hamstrings" },
    { value: "lats", label: "Lats" },
    { value: "lower_back", label: "Lower back" },
    { value: "middle_back", label: "Middle back" },
    { value: "neck", label: "Neck" },
    { value: "quadriceps", label: "Quadriceps" },
    { value: "traps", label: "Traps" },
    { value: "triceps", label: "Triceps" },
  ];

  return (
    <>
    <ContainerSearchMuscle>
    <Text>
        Choose the muscles you want to work and start with this effective
        training plan!
      </Text>
    <form onSubmit={props.onSubmit}>
    
      <Select
        options={muscles}
        onChange={props.onInputChange}
        defaultValue={muscles[0]}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "rgba(255, 109, 40,0.6)",
            primary: "rgba(60, 64, 72, 0.8)",
          },
        })}
      />

      <Button>Search</Button>
  
    </form>
   
    </ContainerSearchMuscle>
    <Line/>
    </>
  );
};

export default SearchMuscle;
