const btn = document.getElementById("themeToggle");

btn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  btn.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});
