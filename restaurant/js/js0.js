$(document).ready(function(){
    $(".icon-bg").click(function () {
        $(".btn").toggleClass("active");
        $(".icon-bg").toggleClass("active");
        $(".container").toggleClass("active");
        $(".box-upload").toggleClass("active");
        $(".box-caption").toggleClass("active");
        $(".box-tags").toggleClass("active");
        $(".private").toggleClass("active");
        $(".set-time-limit").toggleClass("active");
        $(".button").toggleClass("active");
    });
    $(".button").click(function () {
        $(".button-overlay").toggleClass("active");
    });
    $(".iconmelon").click(function () {
        $(".box-upload-ing").toggleClass("active");
        $(".iconmelon-loaded").toggleClass("active");
    });
    $(".private").click(function () {
        $(".private-overlay").addClass("active");
        $(".private-overlay-wave").addClass("active");
    });
	$("#imageclick0").click(function() {
		window.location.href = 'burger/index.html'
	});
	$("#imageclick1").click(function() {
		window.location.href = 'pizza/index.html'
	});
	$("#imageclick2").click(function() {
		window.location.href = 'pancakes/index.html'
	});
});

function setResponsiveBackground() {
  const aspectRatio = window.innerWidth / window.innerHeight;
  const body = document.body;

  if (aspectRatio >= 1) {
    // Landscape
    body.classList.add('landscape');
    body.classList.remove('portrait');
  } else {
    // Portrait
    body.classList.add('portrait');
    body.classList.remove('landscape');
  }
}

window.addEventListener('load', setResponsiveBackground);
window.addEventListener('resize', setResponsiveBackground);

(function () {
  window.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("mousemove", parallaxEffect);

    const background = document.body;
    const header0 = document.querySelector(".header0");
    const header1 = document.querySelector(".header1");
    const header2 = document.querySelector(".header2");

    function parallaxEffect(e) {
      const w = window.innerWidth / 2;
      const h = window.innerHeight / 2;
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const bgOffsetX = (mouseX - w) * 0.01;
      const bgOffsetY = (mouseY - h) * 0.01;
      background.style.backgroundPosition = `${50 - bgOffsetX}% ${50 - bgOffsetY}%`;
      moveElement(header0, mouseX, mouseY, 0.02);
      moveElement(header1, mouseX, mouseY, 0.04);
      moveElement(header2, mouseX, mouseY, 0.06);
    }

    function moveElement(el, mouseX, mouseY, intensity) {
      if (!el) return;
      const w = window.innerWidth / 2;
      const h = window.innerHeight / 2;
      const offsetX = (mouseX - w) * intensity;
      const offsetY = (mouseY - h) * intensity;
      el.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }
  });
})();