// This is life.js

// player zählen

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
        
        var playerlife1 = $("span.player-1").html();
        var playerlife2 = $("span.player-2").html();
        
        var lastplayerlife1 = $('ul.Player-log-1 li:last-child').html();
        var lastplayerlife2 = $('ul.Player-log-2 li:last-child').html();
        
        if (playerlife1 === lastplayerlife1 && playerlife2 === lastplayerlife2){
        }
        else {
         $('ul.Player-log-1').append('<li>' + playerlife1 + '</li>');
         $('ul.Player-log-2').append('<li>' + playerlife2 + '</li>'); 
        }
        
        
  
    }, 3400);

});

