import { getTasks} from "./task";

export const renderTasks = () => {
    const tasklist = document.getElementById("task-list");
    tasklist.innerHTML = "";
}