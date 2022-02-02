import React from "react";
import { ITodo } from "../interfaces";

interface TodoListProps {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove: (id: number) => void;
}

const TodoItem: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  if (todos.length === 0) {
    return <p className="todo__null">Список задач пуст</p>;
  }
  return (
    <div className="container">
      <ul className="todo__list">
        {todos.map((todo) => {
          const classes = ["todo__item"];
          if (todo.completed) {
            classes.push("completed");
          }

          return (
            <li key={todo.id} className={classes.join(" ")}>
              <label>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={todo.completed}
                  onChange={(id) => onToggle(todo.id)}
                />
                <span>{todo.title}</span>
              </label>

              <i onClick={() => onRemove(todo.id)}>
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="753.23px"
                  height="753.23px"
                  viewBox="0 0 753.23 753.23"
                >
                  <g>
                    <g id="_x34__18_">
                      <g>
                        <path
                          d="M635.538,94.154h-141.23V47.077C494.308,21.067,473.24,0,447.23,0H306c-26.01,0-47.077,21.067-47.077,47.077v47.077
				h-141.23c-26.01,0-47.077,21.067-47.077,47.077v47.077c0,25.986,21.067,47.053,47.03,47.077h517.917
				c25.986-0.024,47.054-21.091,47.054-47.077V141.23C682.615,115.221,661.548,94.154,635.538,94.154z M447.23,94.154H306V70.615
				c0-12.993,10.545-23.539,23.538-23.539h94.154c12.993,0,23.538,10.545,23.538,23.539V94.154z M117.692,659.077
				c0,51.996,42.157,94.153,94.154,94.153h329.539c51.996,0,94.153-42.157,94.153-94.153V282.461H117.692V659.077z M470.77,353.077
				c0-12.993,10.545-23.539,23.538-23.539s23.538,10.545,23.538,23.539v282.461c0,12.993-10.545,23.539-23.538,23.539
				s-23.538-10.546-23.538-23.539V353.077z M353.077,353.077c0-12.993,10.545-23.539,23.539-23.539s23.538,10.545,23.538,23.539
				v282.461c0,12.993-10.545,23.539-23.538,23.539s-23.539-10.546-23.539-23.539V353.077z M235.384,353.077
				c0-12.993,10.545-23.539,23.539-23.539s23.539,10.545,23.539,23.539v282.461c0,12.993-10.545,23.539-23.539,23.539
				s-23.539-10.546-23.539-23.539V353.077z"
                        />
                      </g>
                    </g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </i>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoItem;
