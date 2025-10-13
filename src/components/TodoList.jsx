import TodoItem from "./TodoItem";

const TodoList = ({ tasks = [] }) => {
  const hasTasks = true;

  if (!hasTasks) {
    return (
      <div className="todo__empty-message"></div>
    )
  }

  return (
    hasTasks && <ul className="todo__list">
      {tasks.map((task) => (
        <TodoItem
          className="todo__list"
          key={task.id}
          {...task}
        />
      )
      )}
    </ul>
  )
}

export default TodoList