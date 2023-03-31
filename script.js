const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

function removerConjuncoes(conj) {
  const conjuncoes = ["the", "an", "a"];
  return conj.replace(new RegExp(`^(${conjuncoes.join("|")}) `, "i"), "");
}

const sortedBands = bands.sort((a, b) => (removerConjuncoes(a) > removerConjuncoes(b) ? 1 : -1));

/* const sortedBands = bands.sort(function (a, b) {
  const palavraA = removerConjuncoes(a.toLocaleLowerCase());
  const palavraB = removerConjuncoes(b.toLocaleLowerCase());

  if (palavraA > palavraB) {
    return 1;
  } else if (palavraA < palavraB) {
    return -1;
  } else {
    return 0;
  }
}); */

console.log(sortedBands);
