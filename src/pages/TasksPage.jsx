import { TasksProvider } from '../context/TaskProvider'
import Todo from '../components/Todo'

const TasksPage = () => {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  )
}

export default TasksPage