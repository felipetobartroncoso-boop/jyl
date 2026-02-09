document.addEventListener("DOMContentLoaded", function () {
    const buscador = document.getElementById("buscador");
    const productos = document.querySelectorAll(".producto");
    const botones = document.querySelectorAll(".filtro-btn");

    const params = new URLSearchParams(window.location.search);

    // 👉 Categorías activas (vacío = TODOS)
    let categoriasActivas = params.get("cat")
        ? params.get("cat").split(",").map(c => c.trim())
        : [];

    function filtrarProductos() {
        const texto = buscador ? buscador.value.toLowerCase() : "";

        productos.forEach(producto => {
            const nombre = (producto.dataset.nombre || "").toLowerCase();
            const descripcion = (producto.dataset.descripcion || "").toLowerCase();

            const categoriasProducto = (producto.dataset.categoria || "")
                .split(",")
                .map(c => c.trim());

            const coincideBusqueda =
                nombre.includes(texto) || descripcion.includes(texto);

            const coincideCategoria =
                categoriasActivas.length === 0 ||
                categoriasProducto.some(cat => categoriasActivas.includes(cat));

            producto.style.display =
                coincideBusqueda && coincideCategoria ? "" : "none";
        });
    }

    // 🔍 Buscador
    if (buscador) {
        buscador.addEventListener("keyup", filtrarProductos);
    }

    // 🔘 Botones
    botones.forEach(btn => {
        btn.addEventListener("click", function () {
            const categoria = this.dataset.categoria;

            if (!categoria) {
                categoriasActivas = []; // TODOS
            } else {
                categoriasActivas = categoria.split(",").map(c => c.trim());
            }

            botones.forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            filtrarProductos();
        });
    });

    // ✅ Activar botón desde URL
    botones.forEach(btn => {
        if (
            categoriasActivas.length > 0 &&
            btn.dataset.categoria === categoriasActivas.join(",")
        ) {
            btn.classList.add("active");
        }
    });

    // 🚀 Filtro inicial
    filtrarProductos();
});
