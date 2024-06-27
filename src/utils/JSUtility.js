export default {
    // 숫자를 문자열로 변환하고, 세 자리마다 쉼표(,)를 삽입하는 함수
    includeCommaInNumber: (number) =>
      number
        .toString() // 숫자를 문자열로 변환
        .split('') // 문자열을 배열로 변환
        .reverse() // 배열을 뒤집음
        .map((v, i) => (i % 3 === 0 && i !== 0 ? `${v},` : v)) // 세 자리마다 쉼표 삽입
        .reverse() // 다시 배열을 뒤집음
        .join(''), // 배열을 문자열로 변환하여 반환
  };
  