
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Membuka dan menutup menu pada perangkat mobile
menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Menutup menu setelah tautan navigasi diklik
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Buka menu navigasi");
        menuToggle.textContent = "☰";
    });
});

// Menampilkan tahun saat ini secara otomatis
document.getElementById("year").textContent =
    new Date().getFullYear();
