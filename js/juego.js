/*
 2C = Two of clubs (treboles)
 2D = two of diaminds
 2H = Two of hearts
 2S = Twoo of spades
*/
/* (function(){
  console.info('funcion anonima')
})(); */
const myModule = (() => {
  'use strict'
  let deck = [];
  const types = ['C', 'D', 'H', 'S']
  const special = ['A', 'J', 'Q', 'K']
  let puntosJugador = [0,0]
  // contenedor jugador
  const conte_jugador = document.querySelector('#jugador-cartas')
  // contenedor computadora
  const conte_computadora = document.querySelector('#computadora-cartas')
  // referencias a las etiquetas small
  const puntosHtml = document.querySelectorAll('small')

  const CrearDeck = () => {
    for (let index = 2; index < 11; index++) {
      for (const tipo of types) {
        deck.push(index + tipo)
        for (const element of special) {
          if (index != 2) {
            continue;
          }
          deck.push(element + tipo)
        }
      }

    }
    deck = mesclarCartas(deck)

  }
  const aleatorios = (max = 3) => Math.round(Math.random() * max);


  const mesclarCartas = (lista = []) => {
    const length = lista.length;
    let nuevalista = [];
    for (; ;) {
      let numero = aleatorios(length - 1)
      if (nuevalista.length == length) break;
      if (nuevalista.includes(lista[numero])) continue;
      nuevalista.push(lista[numero])
    }
    return nuevalista

  }

  // limpiar juego \ eliminar img
  const clearImg = () => {
    conte_jugador.innerHTML = '';
    conte_computadora.innerHTML = ''
    puntosHtml[0].innerText=0
    puntosHtml[1].innerText=0
    puntosJugador = [0,0]
  }

  // funcion de pedir cartas
  const pedircarta = () => {
    if (deck.length === 0) {
      throw 'No hay cartas vacias';

    }
    return deck.pop()
  }
  // crear la etiqueta imagen con la imagen correspondiente
  const crearEtiqueta = (imagen) => {
    const img = document.createElement('img')
    img.src = `../assets/cartas/${imagen}.png`
    img.alt = 'cartas'
    img.classList.add('carta')
    return img
  }
  // retornar valor de las cartas
  const valorCartas = (carta) => {
    const valor = carta.substring(0, carta.length - 1)
    return isNaN(valor) ? valor === 'A' ? 11 : 10 : valor * 1
  }
  // nuevo juego
  const botones = document.querySelectorAll('button.btn')
  botones[0].addEventListener('click', function () {
    botones[1].disabled = false
    botones[2].disabled = false
    clearImg()
  })

  // acumular puntos  turno  0=jugador 1, el ultimo compu
  const acumularPuntos = (turno, carta) =>{
    puntosJugador[turno] += valorCartas(carta)
    puntosHtml[turno].innerText = puntosJugador[turno]
  }

  // evento para el boton de pedir carta
  botones[1].addEventListener('click', function () {
    botones[0].disabled = false
    const carta = pedircarta()
    const img = crearEtiqueta(carta)
    conte_jugador.appendChild(img)
    acumularPuntos(0, carta)
    if (puntosJugador[0] > 21) {
      console.warn('perdiste..');
      this.disabled = true
      botones[2].disabled = true
      turnoCompu(puntosJugador[0])

    } else if (puntosJugador[0] === 21) {
      console.warn('21,  genial')
      this.disabled = true
      botones[2].disabled = true
      turnoCompu(puntosJugador[0])
    };

  })

  //deteerminar ganador
  const determinarGanador = (puntajeMin) =>{
    setTimeout(() => {
      if (puntosJugador[1] == puntajeMin) {
        alert('Feliciadas a los dos, buena jugada.')
      } else if (puntajeMin > 21) {
        alert('Computadora Gana')
      } else if (puntosJugador[1] > 21) {
        alert('Jugador gana')
      } else {
        alert('computadora gana')
      }
    }, 200);
  }
  // iniciar con la respuesta de la maquina
  const turnoCompu = (puntajeMin) => {

    do {
      const carta = pedircarta()
      const img = crearEtiqueta(carta)
      conte_computadora.appendChild(img)
      acumularPuntos(1, carta)
      if (puntajeMin > 21) {
        break;
      }
    } while (puntosJugador[1] <= puntajeMin && puntajeMin <= 21);
    determinarGanador(puntajeMin)
  }
  
  // detener juego 
  botones[2].addEventListener('click', function () {
    this.disabled = true
    botones[1].disabled = 'true'
    turnoCompu(puntosJugador[0])
  })
  // lo que retorna sera visible 
  // para poder acceder a ella 
  // miModulo.CrearDeck()
  return {
    CrearDeck
  }
})()
