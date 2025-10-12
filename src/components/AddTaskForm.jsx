import Button from "./Button"
import Field from "./Field"

const Form = () => {
    return (
        <form className="todo__form">
            <Field label='New task' />
            <Button />
        </form>
    )
}

export default Form