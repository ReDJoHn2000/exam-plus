let nums = [2, 2, 1];

uniqueNum = nums.filter((element) => {
  // console.log(element + " it is element");
  // console.log(index + " it is index");
  let num = nums.indexOf(element) === nums.lastIndexOf(element);
  return num;
});

console.log(uniqueNum);
