import React from "react";

interface TodoProps {
  onAdd(title: string): void;
}

const Todo: React.FC<TodoProps> = (props) => {
  const ref = React.useRef<HTMLInputElement>(null);

  const writeValueHandler = () => {
    if (ref.current!.value === "") {
      alert("Введите вашу задачу");
      return;
    } else {
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      writeValueHandler();
    }
  };

  const clickHandler = (event: React.MouseEvent) => {
    writeValueHandler();
  };

  return (
    <div className="container">
      <div className="todo__body">
        <label htmlFor="todo">Введите задачу</label>
        <div className="todo__input">
          <input
            ref={ref}
            type="text"
            id="todo"
            placeholder="Введите задачу"
            onKeyPress={keyPressHandler}
            required
          />

          <button onClick={clickHandler} className="todo__button">
            Записать
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
