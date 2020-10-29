TweenMax.defaultEase = Linear.easeOut;

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const tl = new TimelineMax({ delay: 0.5 });
    tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
    if (destination.index === 1) {
      const chairs = document.querySelectorAll(".chair");
      const description = document.querySelector(".description");

      tl.fromTo(
        description,
        0.7,
        { opacity: 0, y: "50" },
        { y: "0", opacity: 1 }
      );
      tl.fromTo(chairs, 0.7, { x: "100%" }, { x: "-10%" })
        .fromTo(chairs[0], 1, { opacity: 1 }, { opacity: 1 })
        .fromTo(chairs[1], 1, { opacity: 0 }, { opacity: 1 })
        .fromTo(chairs[2], 1, { opacity: 0 }, { opacity: 1 });
    }
  },
});


// new hoverEffect({
//   parent: document.querySelector('.pictures'),
//   intensity: 0.2,
//   image1: './img/ha-noi.jpg',
//   image2: './img/ha-noi-1.jpg',
//   image3: './img/ha-noi-2.jpg',
//   displacementImage: './img/fluid.jpg'
// })
const img = new Image();
img.crossOrigin = "anonymous";
var myAnimation = new hoverEffect({
        parent: document.querySelector('.pictures'),
        intensity: 0.3,
        image1: './img/ha-noi.jpg',
        image2: './img/ha-noi-1.jpg',
        displacementImage: './img/fluid.jpg'
});

console.log('13')
