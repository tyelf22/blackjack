let suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let deck = new Array();
let players = new Array();
let currentPlayer = 0;

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
    document.querySelector('players').innerHTML = '';
    for (let i = 0; i < players.length; i++){

        let div_player = document.createElement('div');
        let div_playerid = document.createElement('div');
        let div_hand = document.createElement('div');
        let div_points = document.createElement('div');

        div_points.className = 'points';
        div_points.id = 'points_' + i;
        div_player.id = 'player_' + i;
        div_player.className = 'player';
        div_hand.id = 'hand_' + i;

        div_playerid.innerHTML = player[i].ID;
        div_player.appendChild(div_playerid);
        div_player.appendChild(div_hand);
        div_player.appendChild(div_points);
        document.getElementById('players').appendChild(div_player);
    }
}

 //start game
let startblackjack = () => {
    document.querySelector('btnStart').value = 'Restart';
    document.querySelector('status').style.display="none";
    //every player object gets cards
    currentPlayer = 0;
            createDeck();
            shuffle();
            createPlayers(2);
            createPlayersUI();
            dealHands();
            document.querySelector('player_' + currentPlayer).classList.add('active');

}

let dealHand = () => {
    // alternate handing cards to players
    // both get 2 cards

    for (let i = 0; i < 2; i++){
        
        for (let x = 0; x < players.length; x++) {
            let card = deck.pop();
            players[x].hand.push(card);
            renderCard(card, x);
            updatePoints();
        }
    }
    updateDeck();
}

let renderCard = (card, player) => {
    let hand = document.querySelector('hand_' + plauer);
    hand.appendChild(getCardUI(card));
}

let getCardUI = (card) => {
    let el = document.createElement('div');
    let icon = '';
    if (card.Suit == 'Hearts')
    icon='&hearts;';
    else if (card.Suit == 'Spades')
    icon = '&spades;';
    else if (card.Suit == 'Diamonds')
    icon = '&diams;';
    else
    icon = '&clubs;';
    
    el.className = 'card';
    el.innerHTML = card.Value + '<br/>' + icon;
    return el;    
}

let getPoints = (player) => {

    let points = 0;
    for(var i = 0; i < players[player].Hand.length; i++)
    {
        points += players[player].Hand[i].Weight;
    }
    players[player].Points = points;
    return points;    

}

let updatePoints = () => {

    for (var i = 0 ; i < players.length; i++)
    {
        getPoints(i);
        document.getElementById('points_' + i).innerHTML = players[i].Points;
    }   
}

let hitMe = () => {

// pop a card from the deck to the current player
// check if current player new points are over 21
    let card = deck.pop();
    players[currentPlayer].Hand.push(card);
    renderCard(card, currentPlayer);
    updatePoints();
    updateDeck();
    check();
}

let stay = () => {

  // move on to next player, if any
    if (currentPlayer != players.length-1) {
    document.querySelector('player_' + currentPlayer).classList.remove('active');
    currentPlayer += 1;
    document.getElementById('player_' + currentPlayer).classList.add('active');
    }

    else {
        end();
    } 
}

let end = () => {

    let winner = -1;
    let score = 0;

    for(let i = 0; i < players.length; i++)
    {
        if (players[i].Points > score && players[i].Points < 22)
        {
            winner = i;
        }

        score = players[i].Points;
    }

    document.querySelector('status').innerHTML = 'Winner: Player ' + players[winner].ID;
    document.querySelector("status").style.display = "inline-block";

}

let check = () => {

    if (players[currentPlayer].Points > 21)
    {
        document.querySelector('status').innerHTML = 'Player: ' + players[currentPlayer].ID + ' LOST';
        document.querySelector('status').style.display = "inline-block";
        end();
    }   
}

let updateDeck = () => {

    document.querySelector('deckcount').innerHTML = deck.length;
}

window.addEventListener('load', function(){
    createDeck();
    shuffle();
    createPlayers(1);
});