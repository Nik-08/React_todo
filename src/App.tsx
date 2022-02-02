import React from "react";
import { Header, Todo, TodoItem } from "./components";
import { ITodo } from "./interfaces";

const App: React.FC = () => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);

  React.useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    const confirm = window.confirm("Вы уверены что хотите удалить задачу?");
    if (confirm) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <div className="App">
      <Header />
      <Todo onAdd={addHandler} />
      <TodoItem
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </div>
  );
};

export default App;
