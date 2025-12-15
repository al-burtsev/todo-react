import { useContext, useState } from 'react'
import { TasksContext } from '../context/TasksContext'
import Button from "./Button"
import Field from "./Field"

const Form = () => {
    const { addTask, newTaskTitle, setNewTaskTitle, newTaskInputRef } = useContext(TasksContext)

    const [error, setError] = useState('')

    const clearNewTaskTitle = newTaskTitle.trim()
    const isNewTaskTitleEmpty = clearNewTaskTitle.length === 0

    const onSubmit = (event) => {
        event.preventDefault()
        if (!isNewTaskTitleEmpty) {
            addTask(clearNewTaskTitle)
        }
    }

    const onInput = (event) => {
        const { value } = event.target
        const clearValue = value.trim()
        const hasOnlySpaces = value.length > 0 && clearValue.length === 0

        setNewTaskTitle(value)
        setError(hasOnlySpaces ? 'The task title cannot be empty' : '')
    }

    return (
        <form
            className="todo__form"
            onSubmit={onSubmit}
        >
            <Field
                className="todo__field"
                label='New task title'
                id="new-task"
                value={newTaskTitle}
                error={error}
                onInput={onInput}
                ref={newTaskInputRef}
            />
            <Button
                сlassName="button"
                type="submit"
                isDisabled={isNewTaskTitleEmpty}
            >
                Add
            </Button>
        </form>
    )
}

export default Form