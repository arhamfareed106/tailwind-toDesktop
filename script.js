const navDialog = document.getElementById('nav-dialog');
function handleMenu() {
    navDialog.classList.toggle('hidden');
}

const initialTranslateLTR = -48*4;
const initialTranslateRTL = 36*4;

function setupIntersectionObserver(element, isLTR, speed) {
    /**
     * @param {IntersectionObserverEntry[]} entries
     * @param {IntersectionObserver} observer
     */
    const intersectionCallback = (entries, observer) => {
        const isIntersecting = entries[0].isIntersecting;
        if(isIntersecting) {
            // Add scroll event listener when element comes into view
            document.addEventListener('scroll', scrollHandler);
        } else {
            // Remove scroll event listener when element leaves view
            document.removeEventListener('scroll', scrollHandler);
        }
    }
    const intersectionObserver = new IntersectionObserver(intersectionCallback);

    intersectionObserver.observe(element);

    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;
        if(isLTR) {
            totalTranslate = translateX + initialTranslateLTR;
        } else {
            totalTranslate = -(translateX + initialTranslateRTL);
        }

        element.style.transform = `translateX(${totalTranslate}px)`;
    }

}






const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');


setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);

setupIntersectionObserver(line4, true, 0.8);

const dtElements = document.querySelectorAll('dt');
dtElements.forEach(element => {
    element.addEventListener('click', () => {
        const ddId = element.getAttribute('aria-controls');
        const ddElement = document.getElementById(ddId);
        const ddArrowIcon = element.querySelectorAll('i')[0];

        ddElement.classList.toggle('hidden');
        ddArrowIcon.classList.toggle('-rotate-180');
    })
})



// document.addEventListener('DOMContentLoaded', function () {
//     const text = document.getElementById('animatedText');
//     let scale = 1;
//     let translateY = 0;
//     let opacity = 0;
//     let animationStartTime = null;

//     function animateText(timestamp) {
//       if (!animationStartTime) animationStartTime = timestamp;
//       const progress = timestamp - animationStartTime;

//       // Increase the scale and move the text upwards
//       scale = Math.min(1 + 0.005 * progress, 1.5); // Grow to 1.5x size
//       translateY = Math.min(0.05 * progress, -30); // Move up 30px
//       opacity = Math.min(0.005 * progress, 1); // Increase opacity

//       // Apply the transformations
//       text.style.transform = `scale(${scale}) translateY(${translateY}px)`;
//       text.style.opacity = opacity;

//       // Continue the animation while it hasn't reached the final state
//       if (progress < 2000) { // 2 seconds duration
//         requestAnimationFrame(animateText);
//       }
//     }

//     // Start the animation
//     requestAnimationFrame(animateText);
//   });


  // GSAP Animation for the text
  document.addEventListener('DOMContentLoaded', function () {
    gsap.fromTo("#animatedText", 
      { scale: 1, y: 0, opacity: 0 },   // Initial state: Normal size, normal position, invisible
      { 
        scale: 1.5,                     // Final state: Increase text size (1.5 times)
        y: -10,                         // Slight upward movement to avoid page shift
        opacity: 1,                     // Make it visible
        duration: 2,                    // Duration of the animation: 2 seconds
        ease: "power2.out"              // Smooth easing
      }
    );
  });




 // GSAP Animation for the text
 document.addEventListener('DOMContentLoaded', function () {
    gsap.fromTo("#animatedText", 
      { 
        scale: 1,               // Initial state: Small size (50% of original)
        color: "black",           // Initial color: Black
        opacity: 0                // Initial opacity: 0 (invisible)
      }, 
      { 
        scale: 1.5,               // Final state: Larger size (150% of original)
        color: "blue",            // Final color: Blue
        opacity: 1,               // Make it visible
        duration: 2,              // Duration of the animation: 2 seconds
        ease: "power2.out",       // Smooth easing
        repeat: -1,               // Repeat the animation indefinitely
        yoyo: true                 // Reverse the animation on every repeat
      }
    );
  });
      // GSAP Animation for the moving and scaling text and logo
    document.addEventListener('DOMContentLoaded', function () {
        // Animate both text and logo together
        const animationDuration = 1; // Set the duration for the animations
        const maxScale = 1.5; // Maximum scale for the animation
        const maxY = -10; // Maximum Y offset for the animation
  
        gsap.to(["#animatedText", "#logo"], {
          scale: maxScale,        // Increase size to 1.5
          y: maxY,                // Move up by 10px
          duration: animationDuration, // Duration of the upward animation
          ease: "power1.inOut",   // Easing function for smoothness
          yoyo: true,             // Makes it go back to the original position
          repeat: -1              // Repeat indefinitely
        });
      });