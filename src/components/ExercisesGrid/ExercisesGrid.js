import { useEffect, useState } from "react";
import { ContainerGrid, ContainerTitle, MainTitle, Span, TextGrid, TitleGrid } from "./ExercisesGrid.styles";
import { FaDumbbell } from "react-icons/fa";

const ExercisesGrid = ({ item }) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "749aede05emsh4eae4c8898a95fdp1aa2bcjsnc1f35bbee5f7",
        "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
      },
    };

    fetch(
      `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${item}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setExercises(response));
  }, [item]);

  return (
    <>
    <ContainerTitle>
    <FaDumbbell/>
      <MainTitle>{item.toUpperCase()} WORKOUT</MainTitle>
      <FaDumbbell/>
      </ContainerTitle>
      {exercises.map((exercise) => (
        <ContainerGrid key={exercise.instructions}>
          {/* <h2>{exercise.muscle.toUpperCase()}</h2> */}
          <TitleGrid>EXERCISE : {exercise.name}</TitleGrid>
          <TextGrid><Span>DIFFICULTY : </Span> {exercise.difficulty}</TextGrid>
          <TextGrid><Span>EQUIPMENT : </Span> {exercise.equipment}</TextGrid>
          <TextGrid><Span>INSTRUCTIONS : </Span> {exercise.instructions}</TextGrid>
        </ContainerGrid>
      ))}
      ;
    </>
  );
};

export default ExercisesGrid;
