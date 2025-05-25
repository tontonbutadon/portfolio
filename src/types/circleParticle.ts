export interface CircleParticle {
  id?: string;
  size: number;
  top?: number;
  left?: number;
  color: string;
  opacity?: number;
  zIndex?: number;
  animationDelay?: number;
  animationDuration?: number;
}

export const circleParticlesAboutLeft: CircleParticle[] = [
  {
    size: 10,
    top: 0,
    left: 0,
    color: 'var(--color-beak)',
    opacity: 50,
  },
  {
    size: 8,
    top: 3,
    left: 5,
    color: 'var(--color-beak)',
    opacity: 50,
  },
];
