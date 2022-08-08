// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(catName) {
  cats.unshift(catName);
}

function destructivelyRemoveLastCat(lastCat) {
  cats.pop(lastCat);
}

function destructivelyRemoveFirstCat(firstCat) {
  cats.shift(firstCat);
}


function appendCat(newCatEnd) {
  const newCat = [...cats];
  newCat.push(newCatEnd);
  return newCat;
}

function prependCat(newCatInitial) {
  const newCatPrepended = [...cats];
  newCatPrepended.unshift(newCatInitial);
  return newCatPrepended;
}



function removeLastCat() {
  const newCatsWithoutLast = cats.slice(0, -1);
  return newCatsWithoutLast;
}

function removeFirstCat() {
  const newCatsWithoutFirst = cats.slice(1);
  return newCatsWithoutFirst;
}