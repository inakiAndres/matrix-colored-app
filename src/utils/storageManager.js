export function getArray(arrayName) {
  var thisArray = [];
  var fetchArrayObject = localStorage.getItem(arrayName);
  if (typeof fetchArrayObject !== "undefined") {
    if (fetchArrayObject !== null) {
      thisArray = JSON.parse(fetchArrayObject);
    }
  }
  return thisArray;
}

export function pushArrayItem(arrayName, arrayItem) {
  var existingArray = getArray(arrayName);
  existingArray.push(arrayItem);
  existingArray = existingArray.sort((a, b) => {
    return b.level - a.level;
  });
  if (existingArray.length > 10) {
    existingArray = existingArray.splice(0, 10);
  }
  localStorage.setItem(arrayName, JSON.stringify(existingArray));
}
