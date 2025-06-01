import { useEffect, useState } from 'react';

export const useTypewriter = (
  text: string,
  speed: number = 100,
  endSpaces: number = 0,
  shouldStart: boolean
) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const fullText = text + ' '.repeat(endSpaces);

  useEffect(() => {
    if (!shouldStart || currentIndex >= fullText.length) return;

    const timer = setTimeout(() => {
      setDisplayText(fullText.slice(0, currentIndex + 1));
      setCurrentIndex((prev) => prev + 1);

      if (currentIndex + 1 >= fullText.length) {
        setIsComplete(true);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [shouldStart, currentIndex, fullText, speed]);

  return { displayText, isComplete };
};
