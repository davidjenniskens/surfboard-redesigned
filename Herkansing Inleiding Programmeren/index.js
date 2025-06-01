console.log("Hallo World!");

// Alle kleurknoppen
const buttonWit = document.querySelector("#wit");
const buttonGeel = document.querySelector("#geel");
const buttonTurquoise = document.querySelector("#turquoise");
const buttonBlauw = document.querySelector("#blauw");
const buttonRood = document.querySelector("#rood");

//Alle logo knoppen
const buttonClayton = document.querySelector("#claytonLogo");
const buttonQuicksilver = document.querySelector("#quicksilverLogo");

// Surfboard afbeelding
const surfboard = document.querySelector("#surfboard");

// Audio element
const buttonLiedje = document.querySelector("#liedje");
const surfSound = new Audio("sounds/surfin-in-the-usa.mp3");

// variablen definieren voor surfboard
let gekozenKleur = 'wit'; // Standaard kleur is wit
let gekozenLogo = 'clayton'; // Standaard logo is Clayton

function updateSurfboard (){
    if (gekozenLogo === 'quicksilver') {
      surfboard.src = "images/" + gekozenKleur + "-quicksilver.png";
    } else {
      surfboard.src = "images/" + gekozenKleur + ".png";
    }
  } 

// https://chatgpt.com/share/6839e1f4-48b8-8008-856b-d8a505f5dc51 
function veranderKleur(kleur) {
    gekozenKleur = kleur;
    updateSurfboard();
}

// Event listeners voor de kleuren
buttonWit.addEventListener("click", () => veranderKleur('wit'));
buttonGeel.addEventListener("click", () => veranderKleur('geel'));
buttonTurquoise.addEventListener("click", () => veranderKleur('turquoise'));
buttonBlauw.addEventListener("click", () => veranderKleur('blauw'));
buttonRood.addEventListener("click", () => veranderKleur('rood'));

// Functies voor logo-verandering
buttonClayton.addEventListener("click", () => {
  gekozenLogo = 'clayton';
  updateSurfboard();
});

buttonQuicksilver.addEventListener("click", () => {
  gekozenLogo = 'quicksilver';
  updateSurfboard();
});

// Voor het toevoegen van audio https://www.w3schools.com/jsref/met_audio_play.asp
//Functie om geluid af te spelen
// buttonLiedje.addEventListener("click", () => {
//   surfSound.play();
// }); (deze heb ik uiteindelijk vervangen met onderstaande code)

buttonLiedje.addEventListener("click", () => {
  if (surfSound.paused) {
    surfSound.play();
  } else {
    surfSound.pause();
  }
});

// Alle code nog een keer laten checken door CHATGPT, https://chatgpt.com/share/683cc5f3-2ba4-8008-bbc7-762db871913b 