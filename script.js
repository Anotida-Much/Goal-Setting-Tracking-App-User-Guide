// Update active link on click
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    document
      .querySelectorAll(".nav-link")
      .forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});
