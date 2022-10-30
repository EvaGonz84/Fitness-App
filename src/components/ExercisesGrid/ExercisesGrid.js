import { useEffect, useState } from "react";

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
      <h1>EXERCISES</h1>
      {exercises.map((exercise) => (
        <div key={exercise.name}>
          <h2>{exercise.muscle.toUpperCase()}</h2>
          <h3>{exercise.name}</h3>
          <p>Difficulty:{exercise.difficulty}</p>
          <p>Equipment:{exercise.equipment}</p>
          <p>Instructions:{exercise.instructions}</p>
        </div>
      ))}
      ;
    </>
  );
};

export default ExercisesGrid;
