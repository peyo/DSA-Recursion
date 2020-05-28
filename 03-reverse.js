const reverse = function (str) {
  // Base case
  if (str === "") {
    return "";
  // General case
  } else {
    return reverse(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverse("hello world!"));

// e+h
// l + eh
// l + leh
// o + lleh
//   + olleh
// w +  olleh
// o + w olleh
// r + ow olleh
// l + row olleh
// d + lrow olleh
// ! + dlrow olleh
// !dlrow olleh

// Reference:
// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/