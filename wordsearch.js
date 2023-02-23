const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const verticalJoin = transpose(letters).map((ls) => ls.join(""));
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};
//transpose then run horizontal function*/

module.exports = wordSearch;

//second transpose function
const transpose = function(matrix) {
  let newArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newArray.push([]);

    for (let j = 0; j < matrix.length; j++) {
      newArray[i].push(matrix[j][i]);
    }
  }
  return newArray;
};