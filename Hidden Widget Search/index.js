const img = document.querySelector(".ig");
const input = document.querySelector("#t1");

img.addEventListener("click", () => {
  input.classList.toggle("active");
  input.focus();
});
