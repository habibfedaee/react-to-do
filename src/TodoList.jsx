import PropTypes from "prop-types";
import TodoListItem from "./ToDoListItem";

function TodoList({ todoList }) {
  return (
    <>
      <ul>
        {todoList.map((todo) => (
          <TodoListItem key={todo.id} title={todo.title} />
        ))}
      </ul>
    </>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TodoList;
