import { Todo } from "./todo.clases"


export class TodoList {
  constructor(){
    this.obtenerLocalStorage()
  }
  nuevoTodo(todo){
    this.todos.push(todo)
    this.guardarLocalStorage()
  }
  eliminarTodo(id){
    this.todos = this.todos.filter(todo=> todo.id!=id)
    this.guardarLocalStorage()
  }
  marcarCompletado(id){
    
    for (const element of this.todos) {
      if(element.id == id){
        //console.log(element.id + 'es igual a '+id);
        element.completado = !element.completado
        break;
      }
    }
    this.guardarLocalStorage()
  }
  eliminarCompletados(){
    // retornar solo los no completados
    this.todos = this.todos.filter(todo => !todo.completado)
    this.guardarLocalStorage()
  }
  guardarLocalStorage(){
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
  obtenerLocalStorage(){
    this.todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')):[];
    //para convertir a instancias, ya que regresa como objetos
    this.todos = this.todos.map(todo => Todo.fromJson(todo))
  }

}