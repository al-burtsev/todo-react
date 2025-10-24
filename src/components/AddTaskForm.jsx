import Button from "./Button"
import Field from "./Field"

const Form = ({ addTask }) => {

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
            />
            <Button className="button" type="submit">Add</Button>
        </form>
    )
}

export default Form