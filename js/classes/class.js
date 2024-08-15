

class Persona {
  // atributo estatico
  static _conteo = 0
  // Al ser una metodo statico, puede ser accedida 
  // directamente de la clase
  static get conteo(){
    return Persona._conteo + ' instancias'
  }
  static mensaje()
  {
    console.log(this.nombre); // undefined 
    console.log('Hola a todos, soy un metodo statico');
    
    
  }
  // atributos de la clase
  nombre = ''
  codigo = ''
  frase = ''
  comida = ''

  // es la primera que se ejecuta al instanciar la clase
  constructor(nombre, codigo='Sin codigo', frase){
    // para referirse a los atributos de la clase con 
    // la palabra reservada this
    this.nombre = nombre    
    this.codigo = codigo
    this.frase = frase;
    // como es un atributo statico, realizamos la referencia
    // con el nombre de la clase misma, de la sig forma:
    Persona._conteo++;
  }
  // metodo get y set
  set setNombre(nombre){
    this.nombre = nombre
  }
  set setComidaFavorita(comida)
  {
    this.comida = comida
  }
  get getNombre()
  {
    return this.nombre
  }
  quienSoy(){
    console.log(`${this.nombre} y mi frase es: ${this.frase}`);
    
  }
}


const spiderman = new Persona('peter', 'spiderman', 'soy tun amigo')
const ironman = new Persona('Tony starkk', 'Ironman', 'El hombre de acero')
console.log('Conteo statico', Persona._conteo);

console.log(spiderman.getNombre);
// ver cuantas personas tengo instanciados
console.warn(Persona.conteo);
console.log(Persona.mensaje());


// herencia | extends
class Heroe extends Persona {
  clan = 'Sin clan '
  constructor(nombre, codigo, frase)
  {
    super(nombre, codigo, frase)
    this.clan = 'Los avengers'

  }
  quienSoy(){
    console.log(`${this.nombre} del clan: ${this.clan}`);
    // utilizar el metodo del padre
    super.quienSoy()
  }
}
const TomHoll = new Heroe('peter', 'spiderman', 'soy tun amigo')
console.log(TomHoll.quienSoy());
// propiedades privadas
class Rectangulo {
  // utilizando # se declara como 
  // un campo privado
  #area = 0
  // el cual no se puede modificar su valor
  // fuera de la clase
  constructor(base=0, altura=0){
    this.base = base
    this.altura = altura
    this.#area = this.base*this.altura
  }
}
const rectangulo = new Rectangulo(10,15)
console.log(rectangulo);
