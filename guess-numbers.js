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
  var number = Math.random() * 10 | 0
  var input = mnist[number].get()
  var output = activate(input)
  var max = output.reduce((max, activation) => Math.max(max, activation), 0)
  var guess = output.indexOf(max)

  // clone the item before modifying it
  var clonedItem = item.cloneNode(true)

  // Show the image and the guess
  mnist.draw(input, item.children[0].getContext('2d'))
  node = item.children[1]
  node.classList = [guess == number ? 'yei' : 'nope']
  node.innerHTML = guess;

  // Append the new item placeholder
  item.parentNode.appendChild(clonedItem)
  item = clonedItem

  // Wait 500 ms
  setTimeout(run, 500)
}
