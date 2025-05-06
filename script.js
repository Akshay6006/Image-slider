const images = [
    "pics/1.jpg",
    "pics/2.jpg",
    "pics/3.jpg",
    "pics/4.jpg",
    "pics/5.jpg",
    "pics/6.jpg",
    "pics/7.jpg",
    "pics/8.jpg",
    "pics/9.jpg",
    "pics/10.jpg",
  ];
  
  let currentIndex = 0;
  const imageElement = document.getElementById("sliderImage");
  const indicator = document.getElementById("indicator");
  
  function showImage(index) {
    imageElement.style.opacity = 0;
    setTimeout(() => {
      imageElement.src = images[index];
      imageElement.style.opacity = 1;
      updateIndicator(index);
    }, 300);
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
  
  function createIndicator() {
    images.forEach((_, i) => {
      const dot = document.createElement("span");
      indicator.appendChild(dot);
    });
  }
  
  function updateIndicator(index) {
    const dots = indicator.querySelectorAll("span");
    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
  }
  
  setInterval(() => {
    nextImage();
  }, 3000);
  
  createIndicator();
  showImage(currentIndex);
  