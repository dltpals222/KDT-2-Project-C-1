const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];
const result = [];

arr.map((value, index) => {
  const chunkIndex = Math.floor(index / 20); // 20개씩 묶은 배열의 인덱스 계산
  if (!result[chunkIndex]) {
    result[chunkIndex] = []; // 새로운 배열 생성
  }
  result[chunkIndex].push(value); // 현재 값을 20개씩 묶은 배열에 추가
});

console.log(result);
