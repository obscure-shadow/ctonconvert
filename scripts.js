document.getElementById('submit').onclick = function (e) {
  let green = document.getElementById("green-ratio-input").value
  let brown = document.getElementById("brown-ratio-input").value
  let ratio = document.getElementById("ratio-input").value
  calculate(green, brown, ratio)
}

let calculate = (g, b, y) => {
  // x = ( y-b )/ ( g-y )
  // g-y != 0
  let x = (y-b)/(g-y)
}
