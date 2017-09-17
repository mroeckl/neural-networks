var set = mnist.set(1000).training;

window.onload = function() {
  var canvas = document.getElementById('digit');
  var context = canvas.getContext('2d')
  for (var i in set) {
    mnist.draw(set[i].input, context);
    var canvasCopy = canvas.cloneNode(true)
    canvas.parentElement.appendChild(canvasCopy)
    context = canvasCopy.getContext('2d');
  }
}
