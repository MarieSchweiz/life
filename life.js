// This is life.js

// player zählen


$('.wrapper-count button').on('click', function count() {
    
    //Den Spielernamen durch "value" abfragen
    var playernumber = $(this).val();
    
    // Eigentlich will ich hier nur herausfinden welche art button gedrückt wurde und was ich dann rechnen soll. 
    var buttontype = $(this).html();
    
    // Leben wäre jetzt das was hier reingehört.    
    var life = $('span.' + playernumber).html();
   
    // welcher button das war abfragen + oder -
    
    if ( buttontype === 'plus' ) {
        // reschnen
        
        if (life === "dead"){
            var life = ('0');
        }
        
        var newlife = (parseInt(life) + 1);
        
        // button wieder aktivieren aber nur wenn der player übereinstimmt
        if (newlife > 0) {
             $('button.' + playernumber ).prop('disabled', false);
             
        }
        
        // schreiben
        $(('span.') + playernumber).text(newlife);
        
        
       
            
    }
    
    if ( buttontype === 'minus' ) {
         // reschnen
         var newlife = ((life) - 1);
         
         
         //button deaktivieren falls man auf 0 leben kommt 
         if (newlife === 0 ){
               newlife = ('dead');
              
               $(this).prop('disabled', true).addClass(playernumber);
               
         }
         
         
         $('span.' + playernumber).text(newlife);
            
    }
   
    
  
    // Timeout setzen und log schreiben (wie bekomm ich einen timeout in der warteschleife überschrieben?)
    $('ul.Player-log-1').Set 
    
    
    
    
    });