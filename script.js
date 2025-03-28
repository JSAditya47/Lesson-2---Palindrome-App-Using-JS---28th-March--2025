function palindrome(myString) {
  var input = myString.replace(/[^A-Z0-9]/gi, "").toLowerCase();
  var reversedInput = input.split("").reverse().join("");
  document.getElementById("res").innerHTML = reversedInput + " <=> " + input;

  if (input === reversedInput) {
    document.write(`<h1> ${myString} is a Palindrome </h1>`);
  } else {
    document.write(`<h1> ${myString} is not a Palindrome </h1>`);
  }
}

var word = prompt("Enter a Word");
palindrome(word);
