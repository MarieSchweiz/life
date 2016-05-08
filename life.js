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
        var newlife = (parseInt(life) + 1);
        $('span.' + playernumber).text(newlife);
       
            
    }
    
    if ( buttontype === 'minus' ) {
        // reschnen
         var newlife = ((life) - 1);
         $('span.' + playernumber).text(newlife);
            
    }
    
    
  
    
    // Timeout setzen und log schreiben (wie bekomm ich einen timeout in der warteschleife überschrieben?)
    
    
    
    });