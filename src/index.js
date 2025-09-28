function generatePoem(event) {
  event.preventDefault();

  alert("Generating poem...");
}
let poemFormElement = document.querySelector("#form");
poemFormElement.addEventListener("submit", generatePoem);
