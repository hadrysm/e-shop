import { gsap } from 'gsap';

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
