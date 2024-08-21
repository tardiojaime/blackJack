import { Todo, TodoList } from "../classes";
import { todos } from "../main";

// referencia a la lista
const order_list  = document.querySelector('.todo-list')
const inputText = document.querySelector('.new-todo')
const btnBorrarCompl = document.querySelector('.clear-completed')
const filters = document.querySelector('.filters')
const filtro_select = document.querySelectorAll('.filtro')

export const crearTodoHtml = (todo) => {
  const htmltodo = `<li class="${ todo.completado ? 'completed':''}" data-id="${todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${todo.completado ? 'checked': ''}>
							<label>${ todo.tarea }</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>`;
  const contenedor = document.createElement('div')
  contenedor.innerHTML = htmltodo
  order_list.append(contenedor.firstElementChild)
  return contenedor.firstElementChild
}
inputText.addEventListener('keyup', function(event){
  const valor =  this.value.trim()
  if (event.keyCode == 13 && valor != '') {
    let tarea = new Todo(valor)
    todos.nuevoTodo(tarea)
    crearTodoHtml(tarea)
    this.value = ''
  }
})
order_list.addEventListener('click', function(event){
  const nombreElemente = event.target.localName;
  const elemento = event.target.parentElement.parentElement;
  const id = elemento.getAttribute('data-id');
  if (nombreElemente.includes('input')) {
    todos.marcarCompletado(id)
    // si tiene la clase lo quita
    // y si no la tiene lo agrega
    elemento.classList.toggle('completed')
  } else if(nombreElemente.includes('button')){
    todos.eliminarTodo(id)
    order_list.removeChild(elemento)    
  }
})
btnBorrarCompl.addEventListener('click', function(event) {
  todos.eliminarCompletados()
  console.log(order_list.children);
  for (let index = order_list.children.length-1; index >=0; index--) {
    order_list.children[index].classList.contains('completed') ? order_list.removeChild(order_list.children[index]):null
    
  }    
})
filters.addEventListener('click', (event)=>{
  console.log(event.target.text);
  const filtro = event.target.text
  if(!filtro) return;
  filtro_select.forEach(elem=>elem.classList.remove('selected'))
  event.target.classList.add('selected')
  for (const element of order_list.children) {
    element.classList.remove('hidden');
    const completado = element.classList.contains('completed')
    switch (filtro) {
      case 'Pendientes':
        if (completado) {
          element.classList.add('hidden')
        }
        break;
      case 'Completados':
        if (!completado) {
          element.classList.add('hidden')
        }
        break;
      default:
        break;
    }
  }
  
})