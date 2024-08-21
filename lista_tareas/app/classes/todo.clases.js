

export class Todo{
  static fromJson({tarea, id, completado, creado}){
    let hijo = new Todo(tarea)
    hijo.id = id
    hijo.completado = completado
    hijo.creado = creado
    return hijo
  }
  constructor( tarea) {
    this.tarea = tarea
    this.id = new Date().getTime()//123456897
    this.completado = false
    this.creado = new Date()
  }
}