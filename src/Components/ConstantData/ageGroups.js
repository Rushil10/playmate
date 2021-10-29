export const ageGroups = (num) => {
  var ans = [];
  for (var i = 1; i <= num; i++) {
    var k = {};
    k.label = i.toString();
    k.value = i.toString();
    ans.push(k);
  }
  //console.log(ans);
  return ans;
};
