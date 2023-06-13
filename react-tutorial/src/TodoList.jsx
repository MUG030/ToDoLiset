import React from 'react';
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo }) => {
  return todos.map((todo) => (
  <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />)); //　UUIDの活用でエラー吐かずにkeyがかぶることもない
};

export default TodoList;