let suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let deck = new Array();

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

