import { useCallback, useState } from 'react';

function useStage() {
  const [stage, setStage] = useState(1);
  const [animationActive, setAnimationActive] = useState(false);

  const clearStage = useCallback(() => {
    setStage(prevStage => prevStage + 1);
    setAnimationActive(true);
    setTimeout(() => {
      setAnimationActive(false);
    }, 300);
  }, []);

  const resetStage = useCallback(() => {
    setStage(1);
  }, []);

  return { stage, animationActive, clearStage, resetStage };
}

export default useStage;
