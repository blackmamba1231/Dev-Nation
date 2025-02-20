import { useSprings, animated, config,  AnimatedProps } from '@react-spring/web';
import { useEffect, useRef, useState, useMemo, startTransition } from 'react';
import { HTMLProps } from 'react';

interface AnimationStyle {
  opacity: number;
  transform: string;
}


const availableEasings = {
  default: config.default,
  gentle: config.gentle,
  wobbly: config.wobbly,
  stiff: config.stiff,
  slow: config.slow,
  molasses: config.molasses,
} as const;

interface SplitTextProps {
  text?: string;
  className?: string;
  delay?: number;
  animationFrom?: AnimationStyle;
  animationTo?: AnimationStyle;
  easing?: keyof typeof availableEasings;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  onLetterAnimationComplete?: () => void;
}

interface SpringStyles {
  opacity: number;
  transform: string;
}

type AnimatedSpanProps = AnimatedProps<HTMLProps<HTMLSpanElement>>;

const SplitText: React.FC<SplitTextProps> = ({
  text = '',
  className = '',
  delay = 50,
  animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
  easing = 'default',
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
}) => {
  const words = useMemo(() => text.split(' ').map(word => word.split('')), [text]);
  const letters = useMemo(() => words.flat(), [words]);
  const [inView, setInView] = useState<boolean>(false);
  const ref = useRef<HTMLParagraphElement | null>(null);
  const animatedCount = useRef<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTransition(() => setInView(true));
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: animationFrom,
      to: inView
        ? async (next: (arg0: SpringStyles) => void) => {
            await next(animationTo);
            animatedCount.current += 1;
            if (
              animatedCount.current === letters.length &&
              onLetterAnimationComplete
            ) {
              onLetterAnimationComplete();
            }
          }
        : animationFrom,
      delay: i * delay,
      config: availableEasings[easing],
    }))
  );

  return (
    <p
      ref={ref}
      className={`split-parent overflow-hidden inline ${className}`}
      style={{ textAlign, whiteSpace: 'normal', wordWrap: 'break-word' }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.map((letter, letterIndex) => {
            const index = words
              .slice(0, wordIndex)
              .reduce((acc, w) => acc + w.length, 0) + letterIndex;

            const AnimatedSpan = animated.span as React.FC<AnimatedSpanProps>;
            
            return (
              <AnimatedSpan
                key={index}
                style={springs[index]}
                className="inline-block transform transition-opacity will-change-transform"
              >
                {letter}
              </AnimatedSpan>
            );
          })}
          <span className="inline-block w-[0.3em]">&nbsp;</span>
        </span>
      ))}
    </p>
  );
};

export default SplitText;
