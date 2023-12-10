const span = document.getElementById('background-color')
const boton = document.getElementById('boton')

const colores = [
  "red",
  "blue",
  "skyblue",
  "saddlebrown",
  "seagreen",
  "gray",
  "yellow",
  "yellowgreen",
  "orangered",
  "lightcoral",
  "aquamarine",
  "sandybrown",
  "slateblue",
  "silver",
  "fuchsia",
  "firebrick",
  "teal",
  "turquoise",
  "cadetblue",
  "chocolate",
  "crimson",
  "darkgoldenrod",
  "hotpink",
  "lime"
]

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

boton.addEventListener('click', () => {
  let color = colores[getRandomIntInclusive(0, 24)]
  document.body.style.backgroundColor = color
  span.innerHTML = color[0].toUpperCase() + color.substring(1);
})
