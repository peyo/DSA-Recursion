const split = (str, delim, words) => {

  let newStr = str.replace(delim, " ");
  let i = str.indexOf(delim)

  if (i !== -1) {
    words.push(newStr.substr(0, i));
    return split(newStr.slice(i + 1), delim, words);
  } else {
    words.push(newStr);
    return words;
  }
}

const str = "02/20/2020";
const delim = "/";
console.log(split(str, delim, words = []))