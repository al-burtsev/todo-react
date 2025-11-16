import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"
import Button from './Button'

const Todo = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')

    if (savedTasks) {
      return JSON.parse(savedTasks)
    }

    return [
      { id: 'task-1', title: 'Взглянуть на небо', isDone: true, },
      { id: 'task-2', title: 'Посмотреть, как плывут облака', isDone: false, }
    ]
  })
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const newTaskInputRef = useRef(null)
  const firstUncompletedTaskRef = useRef(null)
  const firstUncompletedTaskId = tasks.find(({ isDone }) => !isDone)?.id

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = confirm('Are you sure you want to delete all tasks?')

    if (isConfirmed) {
      setTasks([])
    }
  }, [])

  const deleteTask = useCallback((taskId) => {
    setTasks(tasks.filter(({ id }) => id !== taskId))
  }, [tasks])

  const toggleTaskComplete = useCallback((taskId, isDone) => {
    setTasks(tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isDone }
      }
      return task
    }))
  }, [tasks])

  const addTask = useCallback(() => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      }

      setTasks((prevTasks)=> [...prevTasks, newTask])
      setNewTaskTitle('')
      setSearchQuery('')
      newTaskInputRef.current.focus()
    }
  }, [newTaskTitle])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    newTaskInputRef.current.focus()
  }, [])

  const filteredTasks = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLowerCase()

    return clearSearchQuery.length > 0 ? tasks.filter(({ title }) => title.toLowerCase().includes(clearSearchQuery)) : null
  }, [searchQuery, tasks])

  const doneTasks = useMemo(() => {
    return tasks.filter(({ isDone }) => isDone).length
  }, [tasks])

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
        newTaskInputRef={newTaskInputRef}
      />
      <SearchTaskForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <TodoInfo
        total={tasks.length}
        done={doneTasks}
        onDeleteAllBtnClick={deleteAllTasks}
      />
      <Button onClick={() => firstUncompletedTaskRef.current?.scrollIntoView({ behavior: 'smooth' })}>Show first uncompleted task</Button>
      <TodoList
        tasks={tasks}
        filteredTasks={filteredTasks}
        firstUncompletedTaskRef={firstUncompletedTaskRef}
        firstUncompletedTaskId={firstUncompletedTaskId}
        onDeleteTaskBtnClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  )
}

export default Todo