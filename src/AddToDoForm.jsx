function AddTodoForm() {
  function handleSubmit() {
    // update TodoList  component
    const todoTitle = document.getElementById("todoTitle").value;

    console.log(todoTitle);
  }
  return (
    <form action="submit">
      <label htmlFor="todoTitle">Title</label>
      <input id="todoTitle" type="text" />
      <button action="submit" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;
