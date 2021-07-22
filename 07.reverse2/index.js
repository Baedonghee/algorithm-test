function solution(n) {
  const aaa = String(n)
    .split("")
    .sort((a, b) => Number(b) - Number(a))
    .join("");
  return Number(aaa);
}

solution(118372);
