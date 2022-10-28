import { useState } from "react";
import AddMucle from "../components/AddMuscle/AddMucle";

const TrainingPage = () => {
  const [muscle, setMuscle] = useState(["biceps", "triceps"]);

  console.log(muscle);

  const onAddMuscle = (newMuscle) => {
    if(muscle.includes(newMuscle))return;
    setMuscle([newMuscle,...muscle]);
  
  };

  return (
    <>
      <div>TrainingPage</div>
      <AddMucle 
      onNewMuscle={onAddMuscle}
      />
     
      <ol>
        {muscle.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ol>
    </>
  );
};

export default TrainingPage;
