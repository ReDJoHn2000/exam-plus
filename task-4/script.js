const buttons = document.querySelectorAll("button");
const textOne = document.querySelector(".first-text");
const textTwo = document.querySelector(".second-text");
const textThree = document.querySelector(".third-text");

buttons.forEach((el) => {
  el.addEventListener("click", () => {
    textOne.classList.toggle("order-zero");
    textTwo.classList.toggle("order-zero");
    textThree.classList.toggle("order-zero");

    console.log(textOne);
    console.log(textTwo);
    console.log(textThree);

    if (el.value == "arrow-down-first") {
      textOne.classList.remove("first-text");
      textOne.classList.add("second-text");
      textTwo.classList.remove("second-text");
      textTwo.classList.add("first-text");

      console.log(textOne);
      console.log(textTwo);
      console.log(textThree);
    } else if (el.value == "arrow-down-second") {
      textOne.classList.remove("first-text");
      textOne.classList.add("second-text");
      textTwo.classList.remove("second-text");
      textTwo.classList.add("first-text");
    }
  });
});
