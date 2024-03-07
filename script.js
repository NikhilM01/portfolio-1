document.addEventListener("DOMContentLoaded", function () {
  const counter3 = document.querySelector(".counter-3");

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 10; j++) {
      const div = document.createElement("div");
      div.className = "num";
      div.textContent = j;
      counter3.appendChild(div);
    }
  }

  const finalDiv = document.createElement("div");
  finalDiv.className = "num";
  finalDiv.textContent = "0";
  counter3.appendChild(finalDiv);

  function animate(counter, duration, delay = 0) {
    const numHeight = counter.querySelector(".num").clientHeight;
    const totalDistance =
      (counter.querySelectorAll(".num").length - 1) * numHeight;

    gsap.to(counter, {
      y: -totalDistance,
      duration: duration,
      delay: delay,
      ease: "power2.inOut",
    });
  }

  animate(counter3, 5);
  animate(document.querySelector(".counter-2"), 6);
  animate(document.querySelector(".counter-1"), 2, 4);

  // -----------------------------------------------------------------
  let activeItemIndicator = CSSRulePlugin.getRule(".menu-item p#active::after");
  const toggleButton = document.querySelector(".burger");
  let isOpen = false;

  gsap.set(".menu-item p", { y: 225 });

  const timeline = gsap.timeline({ paused: true });

  timeline.to(".overlay", {
    duration: 1.5,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "poer4.inOut",
  });

  timeline.to(
    ".menu-item p",
    {
      duration: 1.5,
      y: 0,
      stagger: 0.2,
      ease: "power4.out",
    },
    "-=1"
  );

  timeline.to(
    activeItemIndicator,
    {
      width: "100%",
      duration: 1,
      delay: 0.5,
      ease: "power4.out",
    },
    "<"
  );

  timeline.to(
    ".sub-nav",
    {
      bottom: "7%",
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
    },
    "<"
  );

  toggleButton.addEventListener("click", function () {
    if (isOpen) {
      timeline.reverse();
    } else {
      timeline.play();
    }
    isOpen = !isOpen;
  });

  //   let workInfoItems = document.querySelectorAll('.work__photo-item');

  // workInfoItems.forEach(function (item, index) {
  //   item.style.zIndex = workInfoItems.length - index;
  // });

  // gsap.set(".work__photo-item", {
  //   clipPath: function () {
  //     return "inset(0px 0px 0px 0px)";
  //   }
  // });

  // const animation = gsap.to('.work__photo-item:not(:last-child)', {
  //   clipPath: function () {
  //     return "inset(0px 0px 100% 0px)";
  //   },
  //   stagger: 0.5,
  //   ease: "none"
  // });

  // ScrollTrigger.create({
  //   trigger: '.work',
  //   start: 'top top',
  //   end: 'bottom bottom ',
  //   animation: animation,
  //   scrub: 1
  // });

  let workInfoItems = document.querySelectorAll(".work__photo-item");

  workInfoItems.forEach(function (item, index) {
    item.style.zIndex = workInfoItems.length - index;
  });

  gsap.set(".work__photo-item", {
    clipPath: function () {
      return "inset(0px 0px 0px 0px)";
    },
  });

  const animation = gsap.to(".work__photo-item:not(:last-child)", {
    clipPath: function () {
      return "inset(0px 0px 100% 0px)";
    },
    stagger: 0.5,
    ease: "none",
  });

  ScrollTrigger.create({
    trigger: ".work__right", // Adjust the trigger to your specific section
    start: "top top",
    end: "bottom bottom ",
    animation: animation,
    scrub: 1,
  });

  (function () {
    const customCursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
      // Update the position of the custom cursor based on mouse movement
      customCursor.style.left = `${e.clientX}px`;
      customCursor.style.top = `${e.clientY}px`;
    });
  })();



  
});

gsap.to(".digit", {
  top: "-150px",
  stagger: {
    amount: 0.25,
  },
  delay: 6,
  duration: 1,
  ease: "power4.inOut",
});

gsap.from(".loader-1", {
  width: 0,
  duration: 6,
  ease: "power2.inOut",
});

gsap.from(".loader-2", {
  width: 0,
  delay: 1.9,
  duration: 2,
  ease: "power2.inOut",
});

gsap.from(".loader-3", {
  width: 0,
  delay: 1.9,
  duration: 2,
  ease: "power2.inOut",
});

gsap.to(".loader", {
  background: "none",
  delay: 6,
  duration: 0.1,
});

// gsap.to(".loader-1", {
//   rotate: 90,
//   y: 0,
//   x: 0, // Change x translation to 0
//   duration: 0.5,
//   delay: 6,
// });

// gsap.to(
//   ".loader-2",
//   {
//     rotate: 45,
//     x: 0,
//     y: 0,
//     duration: 0.5,
//     width: "400px",
//   },
//   "<"
// );

// gsap.to(".loader-3", {
//   rotate: -45, // Adjust rotation to -45
//   y: 0,
//   x: 0, // Change x translation to 0
//   duration: 0.5,
//   delay: 6,
// });

gsap.to(".loader", {
  scale: 40,
  duration: 1,
  delay: 7,
  ease: "power2.inOut",
});

gsap.to(".loader", {
  // rotate:45,
  x: 2000,
  y: 500,
  duration: 1,
  delay: 7,
  ease: "power2.inOut",
});

gsap.to(".loading-screen", {
  opacity: 0,
  duration: 0.5,
  delay: 7.5,
  ease: "power1.inOut",
  onComplete: function () {
    // Once the loader is complete, toggle the visibility of the navbar
    document.querySelector("nav").style.display = "flex";
  },
});

gsap.to("h1", 1.5, {
  delay: 7,
  y: -80,
  ease: "power4.inOut",
  stagger: {
    amount: 0.1,
  },
});
