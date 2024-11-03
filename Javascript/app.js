// Check if the screen width is less than 600px
let option = document.querySelector("#option");

option.onclick = function() {
  if (window.matchMedia("(max-width: 600px)").matches) {
    let nav = document.querySelector("#nav");
    let nav_items_after_responsive = document.querySelector("#nav_items_after_responsive");

    if (nav.classList.contains("active")) {
      // If nav is active, deactivate it and hide nav_items_after_responsive
      nav.classList.remove("active");
      nav.classList.add("inactive");
      nav_items_after_responsive.style.display = "none"; // Hide nav items
      nav_items_after_responsive.innerHTML = ""; // Clear content when hidden
    } else {
      // If nav is inactive, activate it and show nav_items_after_responsive
      nav.classList.remove("inactive");
      nav.classList.add("active");
      nav_items_after_responsive.style.display = "flex"; // Show nav items

      // Add centered vertical list of items with spacing
      nav_items_after_responsive.innerHTML = `
        <div>
          <ul style="list-style: none;">
            <li style="margin: 1vw 0;"><a class="nav_text_hover" href="index.html" style="color: white; text-decoration: none;">Home</a></li>

            <li style="margin: 1vw 0;"><a class="nav_text_hover" href="about.html" style="color: white; text-decoration: none;">About</a></li>  

            <li style="margin: 1vw 0;"><a class="nav_text_hover" href="product.html" style="color: white; text-decoration: none;">Products</a></li>

            <li style="margin: 1vw 0;"><a class="nav_text_hover" href="catalogue.html" style="color: white; text-decoration: none;">Catalogue</a></li>

            <li style="margin: 1vw 0;"><a class="nav_text_hover" href="contact.html" style="color: white; text-decoration: none;">Contact</a></li>

          </ul>
        </div>
      `;
    }
  }
};


//slider 
let slider = document.querySelector('.mainSlider .mainList');
let items = document.querySelectorAll('.mainSlider .mainList .item');
let next = document.getElementById('mainNext');
let prev = document.getElementById('mainPrev');
let dots = document.querySelectorAll('.mainSlider .mainDots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
  if (items[active]) {
      slider.style.left = -items[active].offsetLeft + 'px';
  }
  
  let last_active_dot = document.querySelector('.mainSlider .mainDots li.mainActive');
  if (last_active_dot) {
      last_active_dot.classList.remove('mainActive');
  }
  
  if (dots[active]) {
      dots[active].classList.add('mainActive');
  }

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => { next.click() }, 3000);   
}
dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};


//Counter
document.addEventListener("DOMContentLoaded", function () {
  let valueDisplays = document.querySelectorAll(".num");
  let interval = 4000;

  function startCounting() {
      valueDisplays.forEach((valueDisplay) => {
          let startValue = 0;
          let endValue = parseInt(valueDisplay.getAttribute("data-val"));
          let duration = Math.floor(interval / endValue);
          let counter = setInterval(function () {
              startValue += 1;
              valueDisplay.textContent = startValue;
              if (startValue == endValue) {
                  clearInterval(counter);
              }
          }, duration);
      });
  }

  let observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
  };

  let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              startCounting();
              observer.disconnect();
          }
      });
  }, observerOptions);

  let target = document.querySelector(".numberCounterMain");
  observer.observe(target);
});



// Code for hot deals

var swiper = new Swiper(".hot-slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 1000, // 2000 milliseconds = 2 seconds
    disableOnInteraction: false,
  },
  speed: 600,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});




// Code for Product slider in Home
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000, // 2000 milliseconds = 2 seconds
    disableOnInteraction: false,
  },
  speed: 600,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

