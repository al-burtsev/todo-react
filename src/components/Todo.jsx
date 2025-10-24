import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

const Todo = () => {
  const tasks = [
    { id: 'task-1', title: 'Взглянуть на небо', isDone: true, },
    { id: 'task-2', title: 'Посмотреть, как плывут облака', isDone: false, }
  ];

  const deleteAllTasks = () => {
    console.log('del all tasks');
  }

  const deleteTask = (taskId) => {
    console.log(`del task: ${taskId}`);
  }

  const toggleTaskComplete = (taskId, isDone) => {
    console.log(`Task ${taskId} is ${isDone ? 'complete' : 'uncomplete'} `)
  }

  const filterTasks = (query) => {
    console.log(`Search: ${query}`);
  }

  const addTask = () => {
    console.log('task added');
  }

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm
      addTask={addTask}
      />
      <SearchTaskForm
        onSearchInput={filterTasks}
      />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllBtnClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        onDeleteTaskBtnClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  )
}

export default Todo