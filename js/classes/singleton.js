// tener una unica instacia de una clase
// el nombre es opcional
class Singleton {
  static instancia;
  nombre = ''
  constructor(nombre = ''){
    // undefind con ! es igual a true, pero con !! es true y luego niega true y pasa a ser false
    if (!!Singleton.instancia) {
      // si existe devuelve el mismo
      return Singleton.instancia
    }
    // pero si no, crea una nueva
    Singleton.instancia = this;
    this.nombre = nombre
  }
}
const instancia1 = new Singleton('juna')
const instancia2 = new Singleton('marcos')

console.log(`Nombre en la instancia es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia es: ${instancia2.nombre}`);
  

// simulacion de multiples constructores 
class Persona{

  // creamos un metodo estatico
  // reciviremos un objeto, desestructuramos el mismo
  static porObjeto({nombre, apellido, pais}){
    return new Persona(nombre, apellido, pais)
  }


  constructor(nombre, apellido, pais){
    this.nombre = nombre
    this.apellido = apellido
    this.pais = pais
  }
  info(){
    console.log(`Info: ${this.nombre}, pais: ${this.pais}`);
    
  }
}
const nombre1 = 'Melisa',
      apellido1 = 'flores',
      pais = 'tulun'
const objeto = {
  nombre: 'jaun',
  apellido: 'vela',
  pais: 'San luis'
}

const p1 = new Persona(nombre1, apellido1, pais)
const p2 = Persona.porObjeto(objeto)
p1.info()
p2.info()

