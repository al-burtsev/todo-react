const Field = ({ label }) => {
    return (
        <div className="todo__field field">
            <label
                className="field__label"
                htmlFor="new-task"
            >
                {label}
            </label>
            <input
                className="field__input"
                id="new-task"
                placeholder=" "
                autoComplete="off"
            />
        </div>
    )
}

export default Field