function solution(arr, divisor) {
  const answer = arr.filter((num) => num % divisor === 0);
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

console.log(solution([5, 9, 7, 10], 5));
