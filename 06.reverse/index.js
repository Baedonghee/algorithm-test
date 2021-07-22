function solution(n) {
  const value = String(n)
    .split("")
    .reverse()
    .map((a) => Number(a));
  return value;
}

solution(12345);
