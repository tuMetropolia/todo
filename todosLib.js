// {
//     "task": "Buy groceries",
//     "completed": false,
//     "dueDate": "2024-08-30"
// }

let tasks = [];
let taskId = 1;
const addOne = (task, completed, dueDate) => {
  if (!task || !completed == undefined || !dueDate) {
    return false;
  }

  const taskTodo = { id: taskId++, task, completed, dueDate };
  tasks.push(taskTodo);
  return taskTodo;
};

let result = addOne("Buy groceries", false, "2024-08-30");
let result2 = addOne("Do laundry", true, "2024-07-24");
let result3 = addOne("Do dishes", false, "2024-07-25");
let result4 = addOne("Get mails", true, "2024-08-01");

const getAll = () => {
  return tasks;
};

const findById = (id) => {
  const numericId = Number(id);
  const taskFound = tasks.find((task) => task.id === numericId);
  return taskFound;
};

const updateOneById = (id, data) => {
  const taskFound = findById(id);
  if (taskFound) {
    if (data.task) {
      taskFound.task = data.task;
    }
    if (data.completed) {
      taskFound.completed = data.completed;
    }
    if (data.dueDate) {
      taskFound.dueDate = data.dueDate;
    }
    return taskFound;
  }
  return false;
};

const deleteOneById = (id) => {
  const taskFound = findById(id);
  if (taskFound) {
    tasks = tasks.filter((task) => task.id !== id);
    return tasks;
  }
  return false;
};

deleteOneById(2);
console.log(tasks);
