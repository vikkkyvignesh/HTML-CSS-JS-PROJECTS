const label = document.querySelectorAll(".in label");

label.forEach((lab) => {
  lab.innerHTML = lab.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});
