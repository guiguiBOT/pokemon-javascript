const prompt = require("prompt-sync")();

function choixAttackUser() {
    let attackChoiceUser = parseInt(prompt("Entrez le numéro de l'attaque que vous voulez lancer : "));
    return attackChoiceUser;
}
console.log(choixAttackUser());