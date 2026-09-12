(function () {
  var WHATSAPP_NUMBER = "918130196715";
  var WHATSAPP_MESSAGE = "Hi, I'm interested in the AI Digital Marketing Course 2026. Please share more details.";

  function buildWhatsappUrl() {
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);
  }

  var whatsappLinks = document.querySelectorAll("[data-whatsapp]");
  for (var i = 0; i < whatsappLinks.length; i++) {
    whatsappLinks[i].setAttribute("href", buildWhatsappUrl());
    whatsappLinks[i].setAttribute("target", "_blank");
    whatsappLinks[i].setAttribute("rel", "noopener");
  }

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  var heroVisual = document.getElementById("heroVisual");
  var canParallax =
    window.matchMedia("(pointer: fine)").matches &&
    window.matchMedia("(min-width: 1025px)").matches &&
    !prefersReducedMotion;


  if (heroVisual && canParallax) {
    var hero = document.getElementById("hero");
    hero.addEventListener("mousemove", function (e) {
      var rect = hero.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      var rotateX = (-y * 6).toFixed(2);
      var rotateY = (x * 8).toFixed(2);
      heroVisual.style.transform =
        "perspective(900px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
    });
    
    hero.addEventListener("mouseleave", function () {
      heroVisual.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    });
  }

  var header = document.querySelector(".site-header");
  var lastScroll = window.scrollY;
  window.addEventListener("scroll", function () {
    var current = window.scrollY;
    if (current > 40) {
      header.style.boxShadow = "0 6px 20px rgba(20,21,26,0.06)";
    } else {
      header.style.boxShadow = "none";
    }
    lastScroll = current;
  });
})();
