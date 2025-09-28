function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let inputElement = document.querySelector(".prompt");
  let userPrompt = inputElement.value;

  let apiKey = "014afd979f6ea00cdt34ebfe0ad11oc3";
  let prompt =
    "Generate a chinese poem first in Chinese and then show a translation";
  let context =
    "Answer shortly, quote the Tao Te Ching original text and language";

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    userPrompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#form");
poemFormElement.addEventListener("submit", generatePoem);
