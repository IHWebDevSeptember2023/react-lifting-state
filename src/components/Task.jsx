// src/components/Task.jsx

import { useState } from "react";

function Task(props) {
  /*  
  Esto era el código inicial, no compartíamos estado con otros componentes
  const [taskCompleted, setTaskCompleted] = useState(false);

   const toggleTask = () => setTaskCompleted(!taskCompleted); 
   */

  const { name, description, _id, isDone } = props.task; // desestructurar al inicio los props es un buen método para no repetir código
  const { toggleTaskDone } = props; // con funciones también es posible 

  return (
    <div className="task-card">
      <div className="task-card-half">
        <h1>{name}</h1>
        {isDone
          ? <span>DONE </span>
          : <span>PENDING ⌛</span>
        }

        <h2>Task Description</h2>
        <p>{description}</p>

        <button className="add" onClick={() => toggleTaskDone(_id)}>
          {isDone
            ? <span>UNDO </span>
            : <span>✔️</span>
          }
        </button>
      </div>
    </div>
  );
}

export default Task;
