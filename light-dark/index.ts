import "./style.css";
import "@fontsource-variable/rubik";

const themeToggle = document.querySelector("#themeToggle") as HTMLButtonElement;
const theme = localStorage.getItem("theme");
if (theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});
