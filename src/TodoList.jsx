import TodoListItem from "./ToDoListItem";

const todoList = [
  {
    id: 1,
    title: "todo 1",
  },
  {
    id: 2,
    title: "todo 2",
  },
  {
    id: 3,
    title: "todo 3",
  },
];
function TodoList() {
  return (
    <div>
      <ul>
        {todoList.map(function (todo) {
          return <TodoListItem key={todo.id} title={todo.title} />;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
