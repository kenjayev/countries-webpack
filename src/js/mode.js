const modeBtn = document.querySelector(".header__dark-mode div");
const isDark = localStorage.getItem("isDark");
if (isDark) {
  document.body.classList.add("dark-mode");
}

modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  isDark
    ? localStorage.setItem("isDark", "")
    : localStorage.setItem("isDark", "true");
});
