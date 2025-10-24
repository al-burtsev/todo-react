import Button from "./Button"
import Field from "./Field"

const Form = ({ addTask, newTaskTitle, setNewTaskTitle }) => {

    const onSubmit = (event) => {
        event.preventDefault()
        addTask()
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
                onInput={(event) => setNewTaskTitle(event.target.value)}
            />
            <Button className="button" type="submit">Add</Button>
        </form>
    )
}

export default Form