//cible les éléments HTML
const zoneBox = document.querySelector(".zoneBox");
const nameBox = document.getElementById("nameBox");
const textBox = document.getElementById("textBox");

let dialogues = dialoguesData; // Utilise les données importées depuis dialogues.js
let indexActuel = 0;

//mets le texte a jour dans la boite
function afficherDialogue() {
  const replique = dialogues[indexActuel];

  //injection propriété JSON dans les divs
  nameBox.textContent = replique.name;
  textBox.textContent = replique.text;
}
afficherDialogue(); // Affiche le premier dialogue au chargement de la page

console.log("plop", dialogues);
//defilement clic
zoneBox.addEventListener("click", () => {
  indexActuel++;
  if (indexActuel < dialogues.length) {
    afficherDialogue();
  } else {
    zoneBox.style.display = "none";
  }
});
