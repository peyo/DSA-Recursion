const split = function (str, delim) {
  let arr = [""];
  let j = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === delim) {
      j++;
      arr.push("");
    } else {
      arr[j] = arr[j] + str.charAt(i);
    }
  }
  return arr;
};

console.log(split("02/20/2020", "/"));

// Reference:
// https://stackoverflow.com/questions/24765710/writing-a-string-splitting-function-without-using-the-split-method-in-javascript