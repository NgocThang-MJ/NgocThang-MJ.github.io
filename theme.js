const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  moon.classList.add("hidden");
} else {
  document.documentElement.classList.remove("dark");
  sun.classList.add("hidden");
}

function toggleIcon() {
  moon.classList.toggle("hidden");
  sun.classList.toggle("hidden");
}

function switchTheme() {
  toggleIcon();
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
}

moon.addEventListener("click", () => {
  switchTheme();
});
sun.addEventListener("click", () => {
  switchTheme();
});
