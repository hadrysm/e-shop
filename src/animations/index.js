import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { createBox, splitTextToChars } from 'helpers';

gsap.registerPlugin(ScrollTrigger);

const pageTransitionDelay = { delay: 0.8 };

export const fadeInStaggerOnScroll = (node, direction = '-') => {
  if (!node) return;

  gsap.from(node, {
    autoAlpha: 0,
    x: `${direction}=70%`,
    ease: 'power3.inOut',
    duration: 0.9,
    stagger: 0.1,
    scrollTrigger: {
      trigger: node,
      start: 'top 80%',
    },
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

export const scaleAnimation = node => {
  if (!node) return null;

  return gsap.from(
    node,
    {
      duration: 1.6,
      scale: 1.2,
      transformOrigin: 'center',
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: node,
        start: 'top 80%',
      },
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

// navlist

//  change!!

export const toggleMenuAnimation = ([container, listItems], isOpen) => {
  const tl = gsap.timeline({
    defaults: { ease: 'power3.easeInOut' },
  });

  if (isOpen) {
    tl.to(container, { duration: 0.4, xPercent: 100 }).fromTo(
      listItems,
      { xPercent: -10, autoAlpha: 0 },
      { xPercent: 0, autoAlpha: 1, stagger: 0.15 },
      '-=0.3',
    );
  } else {
    tl.to(container, { xPercent: 0 });
  }
};

export const toggleBurger = ([line1, line2, line3], isOpen) => {
  const tl = gsap.timeline({
    defaults: { ease: 'power3.easeInOut', duration: 0.4 },
  });

  tl.set([line1, line2], { transformOrigin: 'center' });

  if (isOpen) {
    tl.to(line2, { scale: 0 });
    tl.to(line1, { y: 5, rotate: '45deg' }, '-=0.5');
    tl.to(line3, { y: -5, rotate: '-45deg' }, '-=0.5');
  } else {
    tl.to(line2, { scale: 1 });
    tl.to(line1, { y: 0, rotate: '0deg' }, '-=0.5');
    tl.to(line3, { y: 0, rotate: '0' }, '-=0.5');
  }
};
