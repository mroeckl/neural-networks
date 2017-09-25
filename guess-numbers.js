window.onload = function() {
  // Get the item from the HTML document
  var item = document.getElementById('item')
  // Run the number guessing
  run();
}

/**
 * Gets random image from MNIST dataset and guesses the depicted digit using the provided neural network.
 */
function run() {
  // Get a random image from dataset and guess the depicted digit
  var sample = mnist.set(8000, 2000).test[0]
  var actualDigit = sample.output.indexOf(Math.max.apply(Math, sample.output))
  var input = sample.input
  var output = activate(input)
  var guessedDigit = output.indexOf(Math.max.apply(Math, output))

  // clone the item before modifying it
  var clonedItem = item.cloneNode(true)

  // Show the image and the guess
  mnist.draw(input, item.children[0].getContext('2d'))
  node = item.children[1]
  node.classList = [guessedDigit == actualDigit ? 'yei' : 'nope']
  node.innerHTML = guessedDigit;

  // Append the new item placeholder
  item.parentNode.appendChild(clonedItem)
  item = clonedItem

  // Wait 500 ms
  setTimeout(run, 500)
}
