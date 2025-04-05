function clickFunction() {
  let bg1 = document.getElementById("background");

  let colors = ["red", "green", "blue", "yellow", "indigo", "brown", "rainbow"];
  const colorIndex = parseInt(Math.random() * colors.length);

  bg1.style.backgroundColor = colors[colorIndex];

  colorMatch();
}

function clickFunction2() {
  let bg2 = document.getElementById("backg2");

  let colors = ["red", "green", "blue", "yellow", "indigo", "brown", "rainbow"];
  const colorIndex = parseInt(Math.random() * colors.length);

  bg2.style.backgroundColor = colors[colorIndex];

  colorMatch();
}

function colorMatch() {
  let bg1 = document.getElementById("background");
  let bg2 = document.getElementById("backg2");
  let stats = document.getElementById("stats");

  if (bg1.style.backgroundColor === bg2.style.backgroundColor) {
    stats.innerHTML = "Both Colors are Equal";
  } else {
    stats.innerHTML = "Not Equal";
  }
}
