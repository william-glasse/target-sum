const search = (sortedNumbers, targetSum) => {
  let leftIndex = 0;
  let rightIndex = sortedNumbers.length - 1;
  while (leftIndex !== rightIndex) {
    const currentSum = sortedNumbers[leftIndex] + sortedNumbers[rightIndex];
    if (currentSum === targetSum) return [leftIndex, rightIndex];

    if (currentSum < targetSum) leftIndex += 1;
    else rightIndex -= 1;
  }
  return null;
};

module.exports = search;
