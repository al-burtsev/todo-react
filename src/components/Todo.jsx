import { useState } from "react"
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

const Todo = () => {
  const [tasks, setTasks] = useState([
    { id: 'task-1', title: 'Взглянуть на небо', isDone: true, },
    { id: 'task-2', title: 'Посмотреть, как плывут облака', isDone: false, }
  ])

  const [newTaskTitle, setNewTaskTitle] = useState('')

  const deleteAllTasks = () => {
    const isConfirmed = confirm('Are you sure you want to delete all tasks?')

    if (isConfirmed) {
      setTasks([])
    }
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(({ id }) => id !== taskId))
  }

  const toggleTaskComplete = (taskId, isDone) => {
    setTasks(tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isDone }
      }
      return task
    }))
  }

  const filterTasks = (query) => {
    console.log(`Search: ${query}`);
  }

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      }

      setTasks([...tasks, newTask])
      setNewTaskTitle('')
    }
  }

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
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