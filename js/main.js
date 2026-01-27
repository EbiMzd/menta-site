/* =======================
   Services Data
======================= */

const services = [
  {
    img: "./images/illustration-material.png",
    title: "مشاوره فردی",
    text: "حل مشکلات اضطراب، افسردگی و خودشناسی"
  },
  {
    img: "./images/-enjoying-a-cozy-moment-together-on-a-couch.png",
    title: "زوج‌درمانی",
    text: "حل تعارض و ایجاد ارتباط سالم"
  },
  {
    img: "./images/solutions-and-problem-solving-concept-.png",
    title: "مسیر شغلی و تحصیلی",
    text: "کشف استعدادها و تصمیم‌گیری آگاهانه"
  }
];


/* =======================
   Slider Elements
======================= */

const slider = document.getElementById("service-slider");
if (slider) {

  const elements = {
    img:   slider.querySelector(".images img"),
    title: slider.querySelector(".content h3"),
    text:  slider.querySelector(".content p"),
    prev:  slider.querySelector(".prev"),
    next:  slider.querySelector(".next")
  };

  let currentIndex = 0;
  let autoTimer    = null;

  const SLIDE_INTERVAL = 4500;
  const OUT_DURATION   = 400;
  const IN_DURATION    = 500;

  function renderSlide() {
    const slide = services[currentIndex];
    elements.img.src = slide.img;
    elements.title.textContent = slide.title;
    elements.text.textContent = slide.text;
  }

  function changeSlide(direction = 1) {
    slider.classList.add("slide-out");

    setTimeout(() => {
      currentIndex =
        (currentIndex + direction + services.length) % services.length;

      renderSlide();
      slider.classList.remove("slide-out");
      slider.classList.add("slide-in");
    }, OUT_DURATION);

    setTimeout(() => {
      slider.classList.remove("slide-in");
    }, OUT_DURATION + IN_DURATION);
  }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(() => changeSlide(1), SLIDE_INTERVAL);
  }

  function stopAuto() {
    clearInterval(autoTimer);
  }

  elements.next.addEventListener("click", () => {
    stopAuto();
    changeSlide(1);
    startAuto();
  });

  elements.prev.addEventListener("click", () => {
    stopAuto();
    changeSlide(-1);
    startAuto();
  });

  slider.addEventListener("mouseenter", stopAuto);
  slider.addEventListener("mouseleave", startAuto);

  renderSlide();
  startAuto();
}


/* =======================
   About Geometry Observer
======================= */

const aboutSection = document.querySelector(".about");
if (aboutSection) {
  const dots = document.querySelectorAll(".about-geometry .dot");

  const aboutObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        dots.forEach(dot => dot.classList.add("show"));
      }
    },
    { threshold: 0.35 }
  );

  aboutObserver.observe(aboutSection);
}


/* =======================
   Open Login / Register
======================= */

const loginBtn = document.querySelector(".login-register");

if (loginBtn) {
  loginBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const modal = document.getElementById("modal");
    if (!modal) return;

    const res  = await fetch("./SignUp_LogIn_Form.html");
    const html = await res.text();

    modal.innerHTML = html;
    modal.classList.remove("hidden");

    // 🔑 مهم‌ترین خط
    initLoginForm();
  });
}

const menuBtn = document.querySelector(".fa-bars");
const navbar  = document.querySelector(".navbar");

if(menuBtn){
  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuBtn.classList.toggle("fa-bars");
    menuBtn.classList.toggle("fa-times");
  });
}


