function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    let num = absolutes[i];
    if (!signs[i]) {
      num = num * -1;
    }
    answer = answer + num;
  }
  return answer;
}

console.log(solution([4, 7, 12], [true, false, true]));
console.log(solution([1, 2, 3], [false, false, true]));
