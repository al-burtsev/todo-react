import Field from "./Field"

const SearchTaskForm = ({ searchQuery, setSearchQuery }) => {
    return (
        <form
            className="todo__form"
            onSubmit={(event) => event.preventDefault()}
        >
            <Field
                className="todo__field"
                label="Search task"
                id="search-task"
                type="search"
                value={searchQuery}
                onInput={({ target }) => setSearchQuery(target.value)}
            />
        </form>
    )
}

export default SearchTaskForm