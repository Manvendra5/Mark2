var readlineSync = require('readline-sync');

var spiderman = [
    {
        question: "Peter Parker's first job was in which company?",
        options: ["Daily Bugle", "Parker Industries", "Oscorp", "Alchemax"],
        answer: "Daily Bugle",
    },
    {
        question: "According to comic the spider that bit Peter was made by which company? ",
        options: ["Daily Bugle", "Parker Industries", "Oscorp", "Alchemax"],
        answer: "Alchemax",
    },
    {
        question: "Which Spiderman movie won the academy award( category does not matter)? ",
        options: ["Spiderman", "Spiderman II", "Spiderman III", "NOTA"],
        answer: "Spiderman II",
    },
    {
        question: "Who was responsible for reminding Peter 'with great power comes great responsibility?'",
        options: ["Harry Osborn", "Ben Parker", "Gwen Stacy", "Flash Thompson"],
        answer: "Ben Parker",
    }, {
        question: "What is the real name of the villain known as Doctor Octopus?",
        options: ["James Otto", "Alfred Molina", "Tom Kenny", "Otto Octavius"],
        answer: "Otto Octavius",
    },
];

var ironman = [
    {
        question: "What's The Other AI Visible In The Background When Tony chooses FRIDAY In 'Avengers: Age Of Ultron'?",
        options: ["PENNY", "BUTLER", "JOCASTA", "EDITH"],
        answer: "Jocasta",
    },
    {
        question: "Which Brand Of Hamburgers Was Tony Eating In 'Iron Man'? ",
        options: ["McDonald’s", "Wendy’s", "Burger King", "Carl's Jr."],
        answer: "Burger King",
    },
    {
        question: "When does Robert Downey Jr. First Appear As Tony Stark?",
        options: ["Iron Man", "The Avengers", "The Incredible Hulk", "Captain America"],
        answer: "Iron Man",
    },
    {
        question: "What does Stark Drink In 'Iron Man 2'?",
        options: ["Chlorophyll", "Palladium Juice", "Green Luck", "Kale Smoothie"],
        answer: "Iron Man",
    }, {
        question: "What is Virginia Potts nickname?",
        options: ["Lucky", "Pepper", "Pans", "Nonstick"],
        answer: "Pepper",
    },
];
var captainAmerica = [
    {
        question: "Which of these things turned Steve Rogers into Captain America?",
        options: ["Mega Fighter Juice", "Turbo Warrior Potion", "Super Soldier Serum", "Hyper Hero Ointment"],
        answer: "Super Soldier Serum",
    },
    {
        question: "What year was Steve Rogers born?",
        options: ["1915", "1916", "1917", "1918"],
        answer: "1918",
    },
    {
        question: "What was Captain America's elite unit known as?",
        options: ["Howling Commandos", "The Patriots", "Star Spangled Men", "Star Spangled Soldiers"],
        answer: "Howling Commandos",
    },
    {
        question: "What is Captain America's shield made of?",
        options: ["Adamantium", "Carbonadium", "Epidurium", "Vibranium"],
        answer: "Vibranium",
    }, {
        question: "What year was Captain America unfrozen?",
        options: ["2009", "2010", "2011", "2012"],
        answer: "2011",
    },
];

var mcuCharacters = {
    "spiderman": spiderman,
    "Iron Man": ironman,
    "Captain America": captainAmerica,
}

//Play funtion: This function will start the quiz
function play(iChooseYou) {
    var score = 0;
    console.log('lets see how well you know your favourite Marvel hero!');
    console.log("------------------------------------------------------");
    for (var i = 0; i < iChooseYou.length; i++) {
        var currentQuestion = iChooseYou[i];
        var optionSelected = readlineSync.keyInSelect(currentQuestion.options, currentQuestion.question, { cancel: "I lied imma DC Fan, Exit quiz!" });
        var answerValue = currentQuestion.options[optionSelected];
        if (optionSelected === -1) {
            console.log("Plastic Fan!");
            break;
        }
        else if (answerValue.toUpperCase() === currentQuestion["answer"].toUpperCase()) {
            console.log("You are right!");
            score = score + 1;
            console.log("Your score: ", score);
        }
        else {
            console.log("You are wrong!");
            console.log("Your score: ", score);
        }
    }
    console.log("------------------------------------------------------");
    console.log(`
  Thanks for playing. 
  Refresh the page to play again.
  For suggestions to improve this quiz, ping me!`);
};

var heroes = ["spiderman", "Iron Man", "Captain America"];
var heroIndex = readlineSync.keyInSelect(heroes, "Choose your favourite MCU character from the given options.", { cancel: "Exit quiz" });
if (heroIndex === -1) {
    console.log(`
  It's sad to see you go.
  Thanks for playing. 
  Refresh the page to play again.
  For suggestions to improve this quiz, ping me!`);
} else {
    var heroSelected = heroes[heroIndex];
    play(mcuCharacters[heroSelected]);
}