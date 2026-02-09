fetch("../footer.html")
    .then(res => res.text())
    .then(data => {
        const footer = document.getElementById("footer");
        if (footer) {
            footer.innerHTML = data;
        }
    });

    document.addEventListener("DOMContentLoaded", () => {
    fetch("../footer.html")
        .then(res => res.text())
        .then(data => {
            const footer = document.getElementById("footer");
            if (footer) footer.innerHTML = data;
        });
});
