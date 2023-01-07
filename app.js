//Récupéré les élements du DOM


//Transformer nodeliste en Array (tableau) à l'aide des crochets.
//Les trois petits points qui est le spread opperators signifies que chaque élément de la nodelist "case" seront classé dans le tableau.
let cases = [... document.getElementsByClassName("case")];
let joueur = document.getElementById("joueur");
let joueur = document.getElementById("score1");
let joueur = document.getElementById("score2");
let joueur = document.getElementById("scoreNul");

//Je vais crée un state pur regrouper les élements important du jeu
let state = {
    joueurEnCours: 1,
    scoreJ1 : 0,
    scoreJ2 : 0,
    MatchNuls : 0,
    //Pour retenir ce qui est écrit sur chacunes des cases du jeu
    c1: 0,
    c2: 0,
    c3: 0,
    c4: 0,
    c5: 0,
    c6: 0,
    c7: 0,
    c8: 0,
    c9: 0,
};

const resetState = () => {
    joueurEnCours = 1
    state.c1 = 0;
    state.c2 = 0;
    state.c3 = 0;
    state.c4 = 0;
    state.c5 = 0;
    state.c6 = 0;
    state.c7 = 0;
    state.c8 = 0;
    state.c9 = 0;
}
//Les connditions de victoire

const verifyVictory = () => {
    if(
        (state.c1 = state.c2 && state.c2 == state.c3 && state.c1 > 0) ||
        (state.c4 = state.c5 && state.c5 == state.c6 && state.c4 > 0) ||
        (state.c7 = state.c8 && state.c8 == state.c9 && state.c7 > 0) ||

        (state.c1 = state.c4 && state.c4 == state.c7 && state.c1 > 0) ||
        (state.c2 = state.c5 && state.c5 == state.c8 && state.c2 > 0) ||
        (state.c3 = state.c6 && state.c6 == state.c9 && state.c3 > 0) ||

        (state.c1 = state.c5 && state.c5 == state.c9 && state.c1 > 0) ||
        (state.c3 = state.c5 && state.c5 == state.c7 && state.c3 > 0) 
    ){
        return true;
    } else if {
        state.c1 != 0 &&
        state.c2 != 0 &&
        state.c3 != 0 &&
        state.c4 != 0 &&
        state.c5 != 0 &&
        state.c6 != 0 &&
        state.c7 != 0 &&
        state.c8 != 0 &&
        state.c9 != 0
    } {
        return null;
    } else {
        return false;
    }
};

//Enregistre l'id de la case à chaque evenement
const jouerCase = (evenement) => {
    let idCase = evenement.target.id;
    if(state[idCase] !== 0 ) return;

    state[idCase] = state.joueurEnCours;

    let isVictory = verifyVictory();

    if(isVictory == true){
        alert("Le gagnant est le joueur" + state.joueurEnCours);
        if (state.joueurEnCours = 1) {
            state.scoreJ1++;
            scoreJ1.textContent = state.scoreJ1;
        } else {
            state.scoreJ2++;
            scoreJ2.textContent = state.scoreJ2;
        }
        resetState();
        cases.forEach((c) => (c.textContent = ""));
    } else if (isVictory === null) {
        alert ("Match null");
        state.matchNuls++;
        scoreNul.textContent = state.matchNuls;
        resetState();
        cases.forEach((c) => (c.textContent = ""));
    } else if (isVictory == false) {
        if(state.joueurEnCours == 1){
            evenement.target.textContent = "X";
            state.joueurEnCours = 1;
            joueur.textContent = "1";
        } else {
            evenement.target.textContent = "O";
            state.joueurEnCours = 1;
            joueur.textContent = "1";
        }
    }
};

//Crée la fonctinalité de cliqué sur une case pour jouer.
//Je crée une fonction forEach qui va réitéré sur chaque elements

cases.forEach((elements) => {
    //Je rends la cases sensible au click effectué par le joueur.
    //Jouer case correspond à une fonction action qui affichera le cercle/ croix.
    //La fonction jouerCase sera appélé après le click. 
    elements.addEventListener("click", jouerCase);
});