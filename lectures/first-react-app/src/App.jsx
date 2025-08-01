const App = () => {

  const todo = { text: 'A brand new task', done: true };

   const todos = [
    {text: 'Learn JavaScript', done: true},
    {text: 'Learn JSX', done: false},
    {text: 'Learn HTML', done: true},
    {text: 'Learn CSS', done: true},
    {text: 'Master React', done: false},
  ];

  return (
    <>
    <h1>Hello, world!</h1>
    <h2>{todo.text}</h2>
    <p>{todo.done ? `Todo completed - ${todo.text}` : todo.text}</p>
    <ul>
      {todos.map((todo, idx) => 
        <li key={idx}>{todo.text}</li>
      )}
    </ul>
    </>
    
  );
};

export default App;