import { useCallback, useState } from 'react';

function usePoint() {
  const [point, setPoint] = useState(0);

  const resetPoint = useCallback(() => {
    setPoint(0);
  }, []);

  const scorePoint = useCallback((stage, time) => {
    const point = stage ** 3 * time;  // stage의 세제곱에 시간을 곱한 값을 점수로 계산
    setPoint(prevPoint => prevPoint + point);  // 현재 점수에 계산된 점수를 추가
  }, []);

  return { point, resetPoint, scorePoint };
}

export default usePoint;
