document.addEventListener('DOMContentLoaded', function () {
  let wrapper = document.getElementById('header-wrapper');
  let topLayer = wrapper.querySelector('.top');
  let handle = wrapper.querySelector('.handle');
  let skew = 0;
  let delta = 0;
  let nav = document.getElementById('main-nav');
  let navWrapper = document.getElementById('nav-wrapper');
  let stickyLoc = nav.offsetTop;

  if (wrapper.className.indexOf('skewed') != -1) {
    skew = 1000;
  }

  wrapper.addEventListener('mousemove', function (e) {
    delta = (e.clientX - window.innerWidth / 2) * 0.5;

    handle.style.left = e.clientX + delta + 'px';

    topLayer.style.width = e.clientX + skew + delta + 'px';
  });

  // Sticky Header
  window.onscroll = function () {
    console.log("Window Scroll Position: " + window.scrollY + " | StickyLoc: " + stickyLoc);
    makeHeaderSticky()
  };

  function makeHeaderSticky() {
    if (window.scrollY >= stickyLoc) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");

    }
  }
});