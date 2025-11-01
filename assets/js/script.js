 window.addEventListener("load", function() {
    setTimeout(function() {
      document.getElementById("preloader").classList.add("fade-out");
    }, 700); // 
  });

  
$(window).on("scroll", function () {
  let upBtn = $("#upBtn");
  if ($(this).scrollTop() > 300) {
    upBtn.fadeIn();
  } else {
    upBtn.fadeOut();
  }
});


$("#upBtn").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 100);
});

// -------------------------------------------------------- nav seciton apperr code start
document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('.main-menu');
    header.classList.add('navbar-shown');
    function onScroll() {
      if (window.scrollY > 5) {
        header.classList.add('navbar-scrolled');
      } else {
        header.classList.remove('navbar-scrolled');
      }
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
  });
// -------------------------------------------------------- nav seciton apperr code end 

// --------------------------------------------------------- load number code start
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  const targetNumber = parseInt(number.getAttribute("data-target"));

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateNumber(number, targetNumber);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(number);
});

function animateNumber(element, target) {
  let current = 0;
  const duration = 1000;
  const step = target / (duration / 10);

  const interval = setInterval(() => {
    current += step;
    if (current >= target) {
      element.textContent = target;
      clearInterval(interval);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 10);
}
// --------------------------------------------------------- load number code end

// ----------------------------------------------------------- about meetups start

document.addEventListener('DOMContentLoaded', function () {
  const targets = document.querySelectorAll('.animate-left, .animate-right');
  if (!('IntersectionObserver' in window)) {
    targets.forEach(t => t.classList.add('show'));
    console.log('IntersectionObserver not supported — fallback applied.');
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
        console.log('Animated into view:', entry.target);
      }
    });
  }, {
    threshold: 0.7,  
    rootMargin: '0px 0px 30% 0px' 
  });

  targets.forEach(t => observer.observe(t));
});

// ----------------------------------------------------------- about meetups end
document.addEventListener('DOMContentLoaded', function () {
  if (typeof GLightbox !== 'undefined') {
    GLightbox({
      selector: '.event-gallery',
      touchNavigation: true,
      loop: true,
    });
  }
});

