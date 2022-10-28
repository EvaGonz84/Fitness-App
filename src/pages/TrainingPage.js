import { useState } from "react";
import AddMucle from "../components/AddMuscle/AddMucle";
import ExercisesGrid from "../components/ExercisesGrid/ExercisesGrid";

const TrainingPage = () => {
  const [muscle, setMuscle] = useState([""]);

  const onAddMuscle = (newMuscle) => {
    if (muscle.includes(newMuscle)) return;
    setMuscle([newMuscle]);
  };

  return (
    <>
      <div>TrainingPage</div>

      <AddMucle onNewMuscle={onAddMuscle} />

      {muscle.map((item) => (
        <ExercisesGrid key={item} item={item} />
      ))}
    </>
  );
};

export default TrainingPage;
