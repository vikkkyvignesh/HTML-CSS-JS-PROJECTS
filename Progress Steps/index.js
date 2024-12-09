const btn = document.querySelectorAll("button");
const circle = document.querySelectorAll(".circle");
const progressbar = document.querySelector(".indicator");

let currstep = 1;

const updateSteps = (e) => {
  currstep = e.target.id == "next" ? ++currstep : --currstep;

  circle.forEach((circ, index) => {
    circ.classList[`${index < currstep ? "add" : "remove"}`]("active");
  });

  progressbar.style.width = `${((currstep - 1) / (circle.length - 1)) * 100}%`;

  if (currstep === circle.length) {
    btn[1].disabled = true;
  } else if (currstep === 1) {
    btn[0].disabled = true;
  } else {
    btn.forEach((button) => (button.disabled = false));
  }

  console.log(currstep);
};

btn.forEach((button) => {
  button.addEventListener("click", updateSteps);
});
