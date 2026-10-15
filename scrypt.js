const playButton = document.getElementById("playButton");
const optionButton = document.getElementById("optionButton");
const sauvegarde = [];

console.log("plop", location);

playButton.addEventListener("click", function () {
  console.log("prologue.html", sauvegarde);
  if (sauvegarde.length == 0) {
    sauvegarde.push("1");
    console.log("if", sauvegarde);
    location.assign("./prologue.html");
    return;
  }
});

optionButton.addEventListener("click", function () {
  location.assign("https://www.mozilla.org");
});
