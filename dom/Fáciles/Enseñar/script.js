  
const textO = { hide: true };

document.write('<button onclick="hide(textO)">Dale que vas a flipar</button>');

const text = document.getElementById("texto");

function hide(textO) {
  textO.hide = !textO.hide;
  if (textO.hide) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}