import { dialoguesData } from "./dialogues.js";
console.log("dialoguesData", dialoguesData.dialoguesData);
//cible les éléments HTML
const zoneBox = document.querySelector(".zoneBox");
const nameBox = document.getElementById("nameBox");
const textBox = document.getElementById("textBox");

let dialogues = [];
let indexActuel = 0;

//mets le texte a jour dans la boite
function afficherDialogue() {
  const replique = dialogues[indexActuel];

  //injection propriété JSON dans les divs
  nameBox.textContent = replique.name;
  textBox.textContent = replique.text;
}

//recupere le JSON et l'affiche
// fetch("dialogues.json")
//   .then((reponse) => reponse.json())
//   .then((donnees) => {
//     dialogues = donnees;
//     afficherDialogue();
//   })
//   .catch((err) => console.error("Erreur de chargement du JSON :", err));

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
