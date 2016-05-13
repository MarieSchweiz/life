

// This is life.js

var settingslife = 20;
var settingswatch = 200000000;
var settingslog = true;

// Player default als objekte in einem array, dazu braucht es noch das default zu befüllen
var Players = [
    {
        count: "Player-1",
        name: "Geralt",
        color: ["none",],
        deckname:"unknown",
        life:20,
    },
    {   
        count: "Player-2",
        name: "klaus",
        color: ["none",],
        deckname:"unknown",
        life:20,
    },
    {   
        count: "Player-3",
        name: "Heidi",
        color: ["none",],
        deckname:"unknown",
        life:20,
    }
];

// Button klick zum hinzufügen und entfernen der spieler

// Dieses Array wird später mal meine Spielstände mitnehmen
var Game = [
];

for (var i = 0; i < Players.length; i++) {
    
    var Playerviewmodel = {
        
    };
  
    var Player = (Players[i].count);
    var Playername = (Players[i].name);
    var buttonminus = ('<button value='+ Player + '>minus</button>');
    var buttonplus = ('<button value='+ Player + '>plus</button>');
    var span20 = ('<span class='+ Player + '>' + settingslife + '</span>');
   
    $("div.wrapper-count").append('<div class='+ Player + ' ' + '/>');
    $("div." + Player).append(buttonminus, span20, buttonplus);
    $("div." + Player).children().addClass(Player);
    $("div.wrapper-count").children().addClass('player-field');

    $("div.wrapper-log").append('<div class='+ Player + '/>');
    $("div.wrapper-log div."+ Player).addClass("log").add('<h3>'+ Playername +'</h3>').append('<h3>'+ Playername +'</h3>').append('<ul class='+ Player + '/>');
    
}


// Hier fängt das zählprogramm an

var timer;

$('.wrapper-count button').on('click', function count() {

    // abgeschauter Timer reset von Stackoverflow
    clearTimeout(timer); //cancel the previous timer.
    

    //Den Spielernamen durch "value" abfragen
    var playernumber = $(this).val();

    // Eigentlich will ich hier nur herausfinden welche art button gedrückt wurde und was ich dann rechnen soll. 
    var buttontype = $(this).html();

    // Leben wäre jetzt das was hier reingehört.    
    var life = $('span.' + playernumber).html();

    // welcher button das war abfragen + oder -

    if (buttontype === 'plus') {

        // wieder umwandeln
        if (life === "dead") {
            var life = ('0');
        }
        // reschnen
        var newlife = (parseInt(life) + 1);
        // button wieder aktivieren aber nur wenn der player übereinstimmt
        $('button.' + playernumber).prop('disabled', false);

        // schreiben
        $(('span.') + playernumber).text(newlife);

    }

    if (buttontype === 'minus') {
        // reschnen
        var newlife = ((life) - 1);

        //button deaktivieren falls man auf 0 leben kommt 
        if (newlife === 0) {
            newlife = ('dead');
            $(this).prop('disabled', true).addClass(playernumber);

        }

        $('span.' + playernumber).text(newlife);

    }



    // Timeout setzen und log schreiben (wie bekomm ich einen timeout in der warteschleife überschrieben?)

    
    // wenn ul hat klasse so, append span mit klasse so
    timer = setTimeout(function () {
    
    // hier kommt jetzt irgendwo 
    for (var i = 0; i < Players.length; i++) {
        $('ul.'+ Player).append('<li>' + playerlife1 + '</li>');
        }
    
    }, 3000);

});

