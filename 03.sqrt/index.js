function solution(n) {
  var answer = 0;
  const sqrtNumber = Math.sqrt(n);
  if (Number.isInteger(sqrtNumber)) {
    answer = Math.pow(sqrtNumber + 1, 3);
  } else {
    answer = -1;
  }
  console.log(answer);
  return answer;
}
solution(121);
solution(2);
