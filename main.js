let suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let deck = new Array();

// START OF CREATING A NEW DECK
let createDeck = () => {
    deck = new Array ();
    for (var i = 0; i < values.length; i++){
        for(var x = 0; x < suits.length; x++){
            let weight = parseInt(values[i])
            if (values [i] == "J" || values [i] == "Q" || values [i] == "K"){
                weight = 10;
            }
                
            if (values [i] == "A"){
                weight = 11;
            }

            let card = {
                Value: values[i],
                Suit: suits[i],
                Weight: weight
            };
            deck.push(card);
                
        }
    }
}

// START OF THE SHUFFLE FUNCTION
let shuffle = () => {
    for (let i = 0; i < 1000; i++){
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let tmp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = tmp;
        
    }
}

// Create the players
let players = new Array();
let createPlayer = (num) => {
    players = new Array();
    for (let i = 1; i <= num; i++){
        let hand = new Array();
        let player = {Name: "Player" + i}
        players.push(player);
    }
}

//Create the interface
let createPlayersUI = () => {
    document.querySelector('players');
    for (var i = 0; i < players.length; i++){
        let div_player = document.createElement('div');

    }
}

