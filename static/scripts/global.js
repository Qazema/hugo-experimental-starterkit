document.addEventListener("DOMContentLoaded", function() {

  /**
   * JS check
   */
  document.body.classList.add("js-active");

  /**
   * Home slider
   */
  const homeSlider = document.getElementsByClassName('home-slider');
  if (homeSlider.length >= 1) {
    const slider = tns({
      container: ".home-slider__wrapper",
      items: 1,
      nav: false
    });
  };

});