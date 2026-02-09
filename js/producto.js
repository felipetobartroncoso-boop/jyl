document.addEventListener("DOMContentLoaded", () => {

    // 🖼️ ZOOM DE IMÁGENES
    const modalImage = document.getElementById("modalImage");

    document.querySelectorAll(".gallery-img").forEach(img => {
        img.addEventListener("click", (e) => {
            e.preventDefault();   // 🔥 EVITA RECARGA
            modalImage.src = img.src;
        });
    });

    // 🦶 FOOTER
    fetch("../footer.html")
        .then(res => res.text())
        .then(html => {
            const footer = document.getElementById("footer");
            if (footer) footer.innerHTML = html;
        });

});
