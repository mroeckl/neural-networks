var neataptic = require('neataptic');
var mnist = require('mnist');
var fs = require('fs');

// Prepare the network and the training set
var net = new neataptic.architect.Perceptron(28 * 28, 20, 10)
var set = mnist.set(8000).training;

// Train the network
net.train(set, {
  rate: 0.1,
  iterations: 2,
  log: true
})

// Export the network to re-use it
var standalone = net.standalone();
fs.writeFile('net.js', String(standalone), function(err) {
  if (err) throw err;
  console.log('Wrote to file');
});
