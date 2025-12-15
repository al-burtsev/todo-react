import { TasksContext } from './TasksContext'
import useTasks from '../hooks/useTasks'
import useUncompleteTaskScroll from '../hooks/useUncompleteTaskScroll'

export const TasksProvider = (props) => {
    const { children } = props

    const {
        tasks,
        filteredTasks,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,

        newTaskTitle,
        setNewTaskTitle,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask
    } = useTasks()

    const {
        firstUncompletedTaskRef,
        firstUncompletedTaskId,
    } = useUncompleteTaskScroll(tasks)

    return (
        <TasksContext.Provider
            value={{
                tasks,
                filteredTasks,
                firstUncompletedTaskRef,
                firstUncompletedTaskId,
                deleteTask,
                deleteAllTasks,
                toggleTaskComplete,

                newTaskTitle,
                setNewTaskTitle,
                searchQuery,
                setSearchQuery,
                newTaskInputRef,
                addTask
            }}
        >
            {children}
        </TasksContext.Provider>
    )
}