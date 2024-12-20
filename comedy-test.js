const video = document.querySelector(".comedyzoo-video");
const content = document.querySelector(".main-content");

window.addEventListener("scroll", () => {

  const contentRect = content.getBoundingClientRect();


  const startBlurAt = 0.2;
  const fullBlurAt = 0.3;


  const overlap = Math.max(
    0, 
    Math.min(window.innerHeight, contentRect.bottom) - Math.max(0, contentRect.top)
  );


  let overlapPercentage = overlap / window.innerHeight;


  overlapPercentage = Math.max(0, overlapPercentage - startBlurAt);


  const blurValue = (25 * overlapPercentage) / (1 - startBlurAt); 


  video.style.filter = `blur(${blurValue}px)`;
});
