function mulaiBelajar() {
  alert("Selamat belajar! 🎉");
}

function toggleMenu() {
  const nav = document.getElementById("nav-menu");
  const menuToggle = document.querySelector(".menu-toggle");

  // Menambahkan/menghapus kelas 'show' yang mengontrol slide down di CSS
  nav.classList.toggle("show");

  // Perbarui status aria-expanded (untuk aksesibilitas)
  const isExpanded = nav.classList.contains("show");
  menuToggle.setAttribute("aria-expanded", isExpanded);
}