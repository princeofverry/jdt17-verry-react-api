import { useState } from "react";

export interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
}

const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    if (!text.trim()) return;

    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        text,
        isCompleted: false,
      },
    ]);
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };

  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
  };
};

export default useTodo;
