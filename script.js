gsap.registerPlugin(ScrollTrigger);

// header animation
let header = gsap
  .timeline()
  .from('ul li', { y: -50, opacity: 0, stagger: 0.05 })
  .from('.burger', { y: -50, opacity: 0 }, '<')
  .from('header h1', { x: -100, opacity: 0 }, '-=.5')
  .from('.contact-me', { xPercent: 50, opacity: 0 }, '<');

// about animation
let about = gsap
  .timeline({
    scrollTrigger: {
      trigger: '.about',
      start: 'top 50%',
    },
  })
  .from('.about .text', { x: 50, opacity: 0, ease: Power0.easeOut })
  .from(
    '.about .img-container',
    { scale: 0.8, opacity: 0, ease: Power0.easeOut, duration: 0.3 },
    '<.2'
  );

// projects animation

let projects = gsap
  .timeline({
    scrollTrigger: {
      trigger: '.projects',
      start: 'top 70%',
      //   start:"top 50%"
    },
  })
  .from('.title h3', { x: -20, opacity: 0 })
  .from('.title a', { x: 20, opacity: 0 }, '<')
  .from(
    '.gallery .item',
    { y: 50, opacity: 0, stagger: { amount: 0.3 } },
    '-=.5'
  );

const items = document.querySelectorAll('.item');
items.forEach((item) => {
  let tl = gsap
    .timeline({ paused: true })
    .to(item.querySelector('.text-back'), { y: '0', ease: Power0.easeOut })
    .from(
      item.querySelectorAll('.text-back > *'),
      {
        x: -50,
        opacity: 0,
        stagger: 0.1,
      },
      '<.4'
    );
  item.addEventListener('click', () => {
    if (item.classList.contains('clicked')) {
      item.classList.remove('clicked');
      tl.timeScale(1.5);
      tl.reverse();
    } else {
      item.classList.add('clicked');
      tl.play();
    }
  });
});

// work animations
let workIntro = gsap
  .timeline({
    scrollTrigger: {
      trigger: '.work .intro',
      start: 'top 70%',
    },
  })
  .from('.work .intro h3', { x: -20, opacity: 0, stagger: 0.1 })
  .from('.work .intro p', { x: 20, opacity: 0, stagger: 0.1 }, '<');

let workText = gsap
  .timeline({
    scrollTrigger: {
      trigger: '.work .text',
      start: 'top 70%',
      //   start:"top 50%"
    },
  })
  .from('.work .text h4', { x: 20, opacity: 0, stagger: 0.1 })
  .from('.work .text p', { x: -20, opacity: 0, stagger: 0.1 }, '<');

// contact animation
let contact = gsap
  .timeline({
    scrollTrigger: {
      trigger: 'footer',
      start: 'top 70%',
      //   start:"top 50%"
    },
  })
  .from('footer h3', { x: -20, opacity: 0 })
  .from('footer .contact-box', { scale: 0.8, opacity: 0 }, '<');

// navigaiton animation
const tlNavMobile = gsap
  .timeline({ paused: true })
  .to('.burger', { scale: 0.5, opacity: 0.2 })
  .to(
    'nav .mobile .nav-container',
    { visibility: 'visible', duration: 0.2 },
    '<.2'
  )
  .from(
    'nav .mobile .nav-container',
    { x: '100%', ease: Power0.easeOut, duration: 0.3 },
    '<'
  );

const menuIcon = document.querySelector('.burger');
menuIcon.addEventListener('click', () => {
  const body = document.querySelector('body');
  body.style.overflow = 'hidden';
  tlNavMobile.play();
  const navItems = document.querySelectorAll('.mobile li');
  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      const body = document.querySelector('body');
      body.style.overflow = 'initial';
      tlNavMobile.timeScale(1.5);
      tlNavMobile.reverse();
    });
  });
});

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
  tlNavMobile.timeScale(1.5);
  tlNavMobile.reverse();
  const body = document.querySelector('body');
  body.style.overflow = 'initial';
});
