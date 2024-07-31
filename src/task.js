// Lista de tareas
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Funcion para agregar tareas
export const addTask = (task) => {
    const newtask = {
    id: Date.now(),
    text: task,
    completed:false
    };
  tasks.push(newtask);
  localStorage.setItem('tasks',JSON.stringify(tasks));
};

// Funcion para poder traer la lista de tareas 
export const getTasks = () => tasks;