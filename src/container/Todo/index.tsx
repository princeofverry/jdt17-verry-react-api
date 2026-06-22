import { useState } from "react";
import useTodo from "../../hooks/useTodo";

const Todo = () => {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodo();
  const [textTodo, setTextTodo] = useState("");

  const handleAdd = () => {
    if (!textTodo.trim()) return;

    addTodo(textTodo);
    setTextTodo("");
  };

  return (
    <div className="max-w-md mx-auto p-4 pt-24">
      <h1 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
        Todo List
      </h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={textTodo}
          onChange={(e) => setTextTodo(e.target.value)}
          placeholder="Masukkan todo..."
          className="flex-1 px-3 py-2 border rounded-md bg-gray-300 text-gray-900 border-gray-300
                     dark:bg-gray-800 dark:text-white dark:border-gray-700
                     focus:outline-none focus:ring-1 focus:ring-gray-400"
        />

        <button
          onClick={handleAdd}
          className="px-4 py-2 rounded-md bg-gray-900 text-white
                     hover:bg-gray-700 transition
                     dark:bg-gray-100 dark:text-black dark:hover:bg-gray-300"
        >
          Add
        </button>
      </div>

      <div className="space-y-2">
        {todos.length === 0 ? (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Belum ada todo
          </p>
        ) : (
          todos.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 border rounded-md bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={item.isCompleted}
                  onChange={() => toggleTodo(item.id)}
                  className="cursor-pointer"
                />

                <p
                  className={`${
                    item.isCompleted
                      ? "line-through text-gray-400"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {item.text}
                </p>
              </div>

              <button
                onClick={() => removeTodo(item.id)}
                className="px-3 py-1 text-sm rounded bg-red-500 text-white hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Todo;
