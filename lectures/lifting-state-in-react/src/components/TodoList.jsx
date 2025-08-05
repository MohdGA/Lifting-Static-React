const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todos, index) => {
        return <li key={index}>{todos}</li>;
      })}
    </ul>
  );
};

export default TodoList;
