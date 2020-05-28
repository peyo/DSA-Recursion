const anagrams = (string) => {
  // Store results
  const results = {};

  const combinations = (prefix, remaining) => {         //{2} ("", east)
    // Base case
    if (!remaining.length) {                            //{3} If remaining has no length
      results[prefix] = "omg";                          //    add prefix to results object with value "".
      return;
    }

    // General case
    for (let i = 0; i < remaining.length; i++) {
      combinations(
        prefix + remaining.charAt(i),                   //{4} "" + e
        remaining.slice(0, i) + remaining.slice(i + 1), //{5} "" + ast
      );
    }
  };

  combinations("", string);                             //{1} ("", east)
  return Object.keys(results)                           //{6} return only object keys and join them with enter.
};

console.log(anagrams("east"));
