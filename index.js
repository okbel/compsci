

process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');

console.log('Type a number');

process.stdin.on('data', function (text) {
  var myNumber = util.inspect(text)
    .split('')
    .slice(1, -3)
    .join('')

  // For Binary Search
  isBinarySearch(myNumber)

});

function done() {
  process.exit();
}


function isBinarySearch(total) {
  // console.log('Trying');

  var pick = Math.floor(Math.random() * total),
  bottom = 0,
  top = total,
  myPick = total/2,
  i = 0;

  console.log(
    'total', total,
    'pick', pick
  )

  while(Math.floor(top) !== pick) {
    console.log('myPick', myPick);

    var myPick = (bottom + top) / 2;

    if(pick > myPick) {
      bottom = myPick
    } else {
      top = myPick
    }

    i++
  }

  console.log(
    'bottom', bottom,
    'top', top
  )

  console.log(`The pick was ${pick}`);
  console.log(`Your guessed number is ${Math.floor(top)}`);
  // For Linear Search
  // console.log(`For Linear Search it would be ${pick} guesses`);
  console.log(`For Binary Search - Number of attempts: ${i}`);
  process.exit()
}
