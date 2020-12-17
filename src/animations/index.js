import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { createBox, splitTextToChars } from 'helpers';

gsap.registerPlugin(ScrollTrigger);

const pageTransitionDelay = { delay: 0.8 };

export const fadeInStagger = (node, gsapOptions, direction = '-') => {
  if (!node) return;

  gsap.from(node, {
    autoAlpha: 0,
    x: `${direction}=30%`,
    ease: 'power3.inOut',
    duration: 0.9,
    stagger: 0.15,
    ...gsapOptions,
  });
};

export const staggerText = node => {
  if (!node) return;

  gsap.from([splitTextToChars(node)], {
    duration: 0.5,
    ease: 'power3.out',
    autoAlpha: 0,
    y: -30,
    stagger: 0.1,
    ...pageTransitionDelay,
  });
};

export const scaleX = node => {
  if (!node) return;

  gsap.from(node, { scaleX: 0, transformOrigin: 'left', ...pageTransitionDelay });
};

export const scaleAnimation = (node, gsapOptions) => {
  if (!node) return null;

  return gsap.from(
    node,
    {
      duration: 1.6,
      scale: 1.2,
      transformOrigin: 'center',
      ease: 'power3.inOut',
      ...gsapOptions,
    },
    '-=0.2',
  );
};

// page tansition

export const exitAnimation = color => {
  const { box, body, vh } = createBox(color);

  const tl = gsap.timeline({ defaults: { ease: 'power3.easeInOut' } });

  tl.fromTo(box, { y: vh }, { duration: 0.3, y: 0 }).to(box, {
    duration: 0.3,
    y: 0,
    onComplete: () => {
      body.removeChild(box);
    },
  });
};

export const enterAnimation = color => {
  const { box, body, vh } = createBox(color);

  const tl = gsap.timeline({ defaults: { ease: 'power3.easeInOut' } });

  tl.to(box, {
    y: -vh,
    delay: 0.3,
    duration: 0.4,
    onComplete: () => {
      body.removeChild(box);
    },
  });
};

// navigation box

export const navigationOnScroll = (node, setIsScrolled) => {
  if (!node) return;

  const actionNav = gsap.to(node, {
    yPercent: '-=100',
    duration: 0.5,
    ease: 'power3.inOut',
    paused: true,
  });

  ScrollTrigger.create({
    trigger: node,
    start: '50px top',
    end: 99999,
    onToggle: ({ isActive }) => setIsScrolled(isActive),
    onUpdate: ({ direction, isActive }) => {
      if (direction === -1) {
        actionNav.reverse();
      }
      if (direction === 1) {
        actionNav.play();
      } else if (direction === 1 && isActive) {
        actionNav.play();
      }
    },
  });
};
