document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       FILTRO DE PRODUCTOS
    ========================= */
    window.filterProducts = function (type) {
        const products = document.querySelectorAll(".product-item");

        products.forEach(product => {
            if (type === "all" || product.dataset.type === type) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    };

    /* =========================
       CARGA DEL CARRUSEL BOOTSTRAP
    ========================= */
    fetch("carousel.html")
        .then(res => res.text())
        .then(html => {
            const carouselContainer = document.getElementById("carousel");
            if (!carouselContainer) return;

            carouselContainer.innerHTML = html;

            const carousel = document.querySelector("#carouselPrincipal");
            if (carousel && window.bootstrap) {
                new bootstrap.Carousel(carousel, {
                    interval: 4000,
                    ride: "carousel",
                    pause: false
                });
            }
        });

    /* =========================
       SLIDERS HORIZONTALES AUTOMÁTICOS
    ========================= */
    document.querySelectorAll(".slider-container").forEach(container => {

        const slider = container.querySelector(".slider");
        if (!slider) return;

        let autoScroll;

        function getItemWidth() {
            const item = slider.querySelector(".slider-item");
            if (!item) return 0;

            const gap = parseInt(getComputedStyle(slider).gap) || 0;
            return item.offsetWidth + gap;
        }

        function scrollSlider(direction) {
            slider.scrollBy({
                left: direction * getItemWidth(),
                behavior: "smooth"
            });
        }

        function startAutoScroll() {
            autoScroll = setInterval(() => {
                const maxScroll = slider.scrollWidth - slider.clientWidth;

                if (slider.scrollLeft >= maxScroll - 5) {
                    slider.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    slider.scrollBy({
                        left: getItemWidth(),
                        behavior: "smooth"
                    });
                }
            }, 3000);
        }

        function stopAutoScroll() {
            clearInterval(autoScroll);
        }

        startAutoScroll();

        slider.addEventListener("mouseenter", stopAutoScroll);
        slider.addEventListener("mouseleave", startAutoScroll);
        slider.addEventListener("touchstart", stopAutoScroll);
        slider.addEventListener("touchend", startAutoScroll);

        /* Flechas SOLO de este slider */
        const btnLeft = container.querySelector(".slider-btn.left");
        const btnRight = container.querySelector(".slider-btn.right");

        if (btnLeft) {
            btnLeft.addEventListener("click", () => scrollSlider(-1));
        }

        if (btnRight) {
            btnRight.addEventListener("click", () => scrollSlider(1));
        }
    });

});
