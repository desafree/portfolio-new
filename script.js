gsap.registerPlugin(ScrollTrigger);

// const myTags = [
//   'JavaScript',
//   'CSS',
//   'HTML',
//   'C',
//   'C++',
//   'React',
//   'Python',
//   'Java',
//   'git',
//   'django',
//   'Node.js',
//   'OpenCV',
//   'GCP',
//   'MySQL',
//   'jQuery',
//   'JavaScript',
//   'CSS',
//   'HTML',
//   'C',
//   'C++',
//   'React',
//   'Python',
//   'Java',
//   'git',
//   'django',
//   'Node.js',
//   'OpenCV',
//   'GCP',
//   'MySQL',
//   'jQuery',
// ];

// var tagCloud = TagCloud('.content', myTags, {
//   // radius in px
//   radius: 300,

//   // animation speed
//   // slow, normal, fast
//   maxSpeed: 'fast',
//   initSpeed: 'normal',

//   // 0 = top
//   // 90 = left
//   // 135 = right-bottom
//   direction: 135,

//   // interact with cursor move on mouse out
//   keep: true,
// });

let header = gsap
  .timeline()
  .from('ul li', { y: -50, opacity: 0, stagger: 0.1 })
  .from('header h1', { x: -100, opacity: 0 })
  .from('.contact-me', { xPercent: 50, opacity: 0 }, '<');

let about = gsap
  .timeline({
    scrollTrigger: {
      trigger: '.about',
      start: 'top 50%',
      //   start:"top 50%"
      markers: true,
    },
  })
  .from('.about .img-container', { y: -50, opacity: 0 })
  .from('.about .text', { x: 50, opacity: 0 }, '<');

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

let workIntro = gsap
  .timeline({
    scrollTrigger: {
      trigger: '.work .intro',
      start: 'top 70%',
      //   start:"top 50%"
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
