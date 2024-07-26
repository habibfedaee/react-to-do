function AddTodoForm(props) {
  function handleSubmit() {
    // update TodoList  component
    const todoTitle = document.getElementById("todoTitle").value;

    // console.log(todoTitle);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector("input");
    const inputValue = input.value;
    //console.log(inputValue);
    props.onAddTodo(inputValue);
    form.reset();
  }
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input name="title" id="todoTitle" type="text" />
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;
