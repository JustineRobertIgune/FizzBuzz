// Using a while loop
var i = 1;
while (i <= 100) {
  if (i % 3 === 0 && i % 5 === 0) { // When i is a multiple of 3 and 5
    console.log('FizzBuzz');
  } else if (i % 3 === 0) { // When i is a multiple of 3
    console.log('Fizz');
  } else if (i % 5 === 0) { // When i is a multiple of 5
    console.log('Buzz');
  } else {
    console.log(i);
  }
  i++;
}
