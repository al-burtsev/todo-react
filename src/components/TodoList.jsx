import TodoItem from "./TodoItem";

const TodoList = ({ tasks = [], filteredTasks, onDeleteTaskBtnClick, onTaskCompleteChange }) => {
  const hasTasks = tasks.length > 0
  const isEmptyFilteredTasks = filteredTasks?.length === 0

  if (!hasTasks) {
    return (
      <div className="todo__empty-message">There are no tasks yet</div>
    )
  }
  
  if (hasTasks && isEmptyFilteredTasks) {
    return (
      <div className="todo__empty-message">Tasks not found</div>
    )
  }

  return (
    hasTasks && <ul className="todo__list">
      {(filteredTasks ?? tasks).map((task) => (
        <TodoItem
          className="todo__list"
          key={task.id}
          {...task}
          onDeleteTaskBtnClick={onDeleteTaskBtnClick}
          onTaskCompleteChange={onTaskCompleteChange}
        />
      )
      )}
    </ul>
  )
}

export default TodoList