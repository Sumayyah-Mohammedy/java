const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const clearCompletedBTn = document.getElementById('clearCompletedBTn');
const taskList = document.getElementById('taskList');
 let tasks = [];
 function addTask(){
    const taskTest = taskInput.value.trim();
    if(taskTest !== ''){
        tasks.push({task: taskTest});
        taskInput.value='';
        displayTask();
    }
 }
 function displayTask() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.test}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}
 function toggleTask(index){
    tasks[index].completed = !tasks[index].completed;
    displayTask();
 }
 function clearCompletedTask(){
    tasks = tasks.filter(task => !task.completed);
    displayTask();
 }

 function clearallTasks(){
    tasks = [];
    displayTask();
 }
 addTaskBtn.addEventListener("click", addTask);
 clearCompletedBTn.addEventListener("click", clearCompletedTask);
 displayTask();