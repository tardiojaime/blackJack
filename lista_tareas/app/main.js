import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes'
import './style.css'

export const todos = new TodoList()
todos.obtenerLocalStorage()
todos.todos.forEach(crearTodoHtml);
console.log(todos);
