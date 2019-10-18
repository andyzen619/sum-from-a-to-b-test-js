/**
 * Sum all the values from fromN up to toN
 */
function sum(fromN, toN) {
  //Base case: Returns the last number to sum.
  if (fromN == toN) {
    return toN;
  }
  //Inductive step: Adds current number to the sum that is done in the next iteration.
  else {
    return fromN + sum(fromN + 1, toN);
  }
}

module.exports = sum;
