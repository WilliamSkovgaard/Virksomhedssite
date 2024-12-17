const video = document.querySelector(".comedyzoo-video");
const content = document.querySelector("#main-content");

window.addEventListener("scroll", () => {
  // Få positionen af indholdet i forhold til viewport
  const contentRect = content.getBoundingClientRect();

  // Definer den procentdel, hvor sløringen skal begynde og nå max
  const startBlurAt = 0.2;
  const fullBlurAt = 0.3;

  // Beregn overlap mellem indhold og viewport
  const overlap = Math.max(
    0, // Minimum overlap er 0
    Math.min(window.innerHeight, contentRect.bottom) - Math.max(0, contentRect.top)
  );

  // Konverter overlap til en procentdel af viewport-højden
  let overlapPercentage = overlap / window.innerHeight;

  // Reducer overlapPercentage med startBlurAt, så blur først starter senere
  overlapPercentage = Math.max(0, overlapPercentage - startBlurAt);

  // Justér blur-værdien (10px er maks)
  const blurValue = (25 * overlapPercentage) / (1 - startBlurAt); // Normaliser værdien

  // Opdater videoens sløring
  video.style.filter = `blur(${blurValue}px)`;
});
