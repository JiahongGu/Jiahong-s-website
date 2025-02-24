document.addEventListener("DOMContentLoaded", () => {
    const slideshows = document.querySelectorAll(".slideshow-container");

    slideshows.forEach(slideshow => {
        const slidesWrapper = slideshow.querySelector(".slides-wrapper");
        const slides = Array.from(slideshow.querySelectorAll(".slide"));

        const prevBtn = slideshow.querySelector(".prev");
        const nextBtn = slideshow.querySelector(".next");

        let currentIndex = 0;
        const totalSlides = slides.length;

        function updateSlidePosition() {
            slidesWrapper.style.transform = translateX(-${currentIndex * 100}%);
        }

        if (nextBtn && prevBtn) {
            nextBtn.addEventListener("click", () => {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateSlidePosition();
            });

            prevBtn.addEventListener("click", () => {
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                updateSlidePosition();
            });
        }

        // 自动播放轮播图，每 5 秒切换一次
        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlidePosition();
        }, 5000);

        // 初始化样式
        slidesWrapper.style.display = "flex";
        slidesWrapper.style.width = ${totalSlides * 100}%;
        slidesWrapper.style.transition = "transform 0.5s ease-in-out";

        slides.forEach(slide => {
            slide.style.flex = "1";
            slide.style.minWidth = "100%";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("main-nav");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const welcomeText = document.getElementById("welcome-text");
    welcomeText.style.opacity = "0"; // 初始状态隐藏

    setTimeout(() => {
        welcomeText.style.transition = "opacity 1.5s ease-in-out";
        welcomeText.style.opacity = "1"; // 淡入
    }, 500);
});

