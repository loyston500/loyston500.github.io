alert("Hi");
var i = 0;
function change() {
  var doc = document.getElementsByClassName("footer");
  var color = ["black", "blue", "brown", "green"];
  doc.style.color = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 1000);