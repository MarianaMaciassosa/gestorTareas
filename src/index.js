import { renderTasks } from "./ui";
import { addTask } from "./task"; 
 
document.addEventListener("DOMContentLoaded", () => {
    //Hacemos visible la lista de tareas
    renderTasks();

    //Agregar el evento para la funcion para agregar tareas
    document.getElementById("task-form").addEventListener("submit",(e)=>{
    e.preventDefault();
    const taskInput = document.getElementById("task-input");
    if(taskInput.value !== ""){
        //Agregamos la tarea
        addTask(taskInput.value);

        //volvemos a cargar la lista de tareas
        renderTasks();
        
        //Limpiar el input
        document.getElementById("task-input").value = "";
      }    
   });

});