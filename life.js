// This is life.js

// Initial amount of lifes we like to use
var settingslife = 20;

// Initial time the game has
var settingswatch = 200000000;

// This game will be autologged
var settingsautolog = true;

var settingsnrofplayers = 2;

var Players = [{
                count: "Player-0",
                name: "Player-0",
                color: ["none",],
                deckname: "unknown",
                life: settingslife,
                status: "sleep", 
            },
            {
                count: "Player-1",
                name: "Player-1",
                color: ["none",],
                deckname: "unknown",
                life: settingslife,
                status: "sleep", 
            },
            {
                count: "Player-2",
                name: "Player-2",
                color: ["none",],
                deckname: "unknown",
                life: settingslife,
                status: "sleep", 
            },
            {
                count: "Player-3",
                name: "Player-3",
                color: ["none",],
                deckname: "unknown",
                life: settingslife,
                status: "sleep", 
            }];
            

            
// Number of Players var settingsnrplayer = Players.length;

var Names = ["Ozelot","Heribert","Onara","Ezekiel","Kuro","Gunnar","Hella","Nizza"]

var Game = [];

var round = Game.length;

var klicktimer = 0;


// kann mir jederzeit die position eines spieler im Players array ausgeben

function getplayerposition (Player){
    for(var i = 0, len = Players.length; i < len; i++){
            if (Players[i].count === Player) {
                 return i;
            }
    }
};

function activeplayer (number){
    var Playeractive = 0;
    
    for(i = 0; i < Players.length; i++){
       
       if (Players[i].status === "active"){
           
           var Playeractive = Playeractive + 1;
           
       }
       
   };
   return Playeractive;
}



// kann mir jederzeit spieler aus dem players array herausrendern

function renderplayer(playercounter,playername) {
            
            var Player = playercounter;
            var Playername = playername;
            var buttonminus = `<button class="${Player} minus"><img src="minus.svg"></button>`;
            var buttonplus = `<button class="${Player} plus"><img src="plus.svg"></button>`;
            var span20 = `<span class="${Player} displaylife">${settingslife}</span>`;
            var namespan = `<span class="player-name">${Playername}</span>`;
            
            var buttonremove = `<button class="${Player} remove "><img src="close.svg"></button>`;
            var buttonplayersettings = `<button class="playersettings ${Player}"><img src="cog.svg"></button>`;
            
            
            $("div.wrapper-count").append(`<div class="${Player} player-field" />`);
            $("div." + Player).append(buttonminus, span20, buttonplus, namespan);

            $("div.wrapper-log").append(`<div class="${Player} log"><h3>${Playername}</h3> ${buttonremove}<ul class="${Player} visualog"/></div>`);
}

// rendert mir zwei spieler
function renderinitial(settingsnrofplayers) {
   var thisname = "test";
   for (var i = 0; i < settingsnrofplayers; i++) {
            
            var randomnumber = Math.floor(Math.random() * 8) + 0;
            var thisname = Names[randomnumber];
            
            var newplayer = `Player-${i}`;
            var newobject = {
                count: newplayer,
                name: thisname,
                color: ["none",],
                deckname: "unknown",
                life: settingslife,
                status: "active", 
            };
            
            Players[i] = (newobject);
            renderplayer(newplayer,thisname);
            console.log(Players);

      };
};
renderinitial(settingsnrofplayers);


// entfernt
$("div.wrapper-log").on('click', "button.remove", function (event) {

    var removeplayer = $(this).attr('class').slice(0, 8);
    var deleteplayer = 0;
    var Playeractive = 0;
    function arrayObjectIndexOf(insert) {
        
        for(var i = 0, len = Players.length; i < len; i++) {
            
            if (Players[i].count === insert) {
                 
                 deleteplayer = i;
                 console.log(i);
                 Players[i].status = "sleep";
                 
            }
            if (Players[i].status === "active"){
            Playeractive = Playeractive+1;
            };   
        };
    }
    arrayObjectIndexOf(removeplayer); // 1
    
    if (Playeractive >= 1) {
        $(`div.${removeplayer}`).remove();
        $("button.add-player").prop("disabled", false); 
    }
    if (Playeractive <= 1){
        $("button.remove").prop("disabled", true); 
        
    }
    console.log(Players,Playeractive);
    //removed = Players.splice(deleteplayer, 1);
    // else if
    
    
});


// Fügt hinzu
$("button.add-player").on('click', function (event) {
   var Playernumber = 0;
   var Playerposition = 0;
   var Playeractive = 0;
   var i = 0;
   
   // Zählt die aktiven spieler im Array   
   for(i = 0; i < Players.length; i++){
       if (Players[i].status === "active"){
           Playeractive = Playeractive + 1;
       }
   };
   
   // Wenn weniger als 4 aktive spieler zu finden sind darf er einen erzeugen-
   if (Playeractive < 4){
       
       $("button.add-player").prop("disabled", false); 
       // die for schleife zählt welcher platz noch auf "sleep" gesetzt ist
       for(i = 0; i < Players.length; i++){
            
            // Wenn die bedinung sleep zutrifft dann darf er die variablen neu setzen.
            if (Players[i].status === "sleep"){
                
                var randomnumber = Math.floor(Math.random() * 8) + 0;
                var thisname = Names[randomnumber];
                
                var Playerposition = i;
                var Playernumber = i;
                var newplayer = `Player-${Playernumber}`;
                
                var newobject = {
                    count: `Player-${Playernumber}`,
                    name: thisname,
                    color: ["none",],
                    deckname: "unknown",
                    life: settingslife,
                    status: "active",
                    
            };
            break;
            }
       }
      
    // Mit den neu gesetzten Variablen soll er ein Objekt im Players array ersetzen    
    Players[Playerposition] = (newobject);
    renderplayer(newplayer,thisname);
    var Playeractive = Playeractive + 1;
    
    //Und für die ausgabe
    if (Playeractive === 4){
        // Wenn es dann 4 aktive spieler sind soll der button deaktiviert wrrden
   
        $("button.add-player").prop("disabled", true);
    }
    $("button.remove").prop("disabled", false);
    
    console.log(Players,Playeractive);
    }    
    // Wenn es jetzt mehr als 4 aktive spieler gibt muss natürlich der button deaktiviert werden.
    
    
});


// Spielstand zurücksetzen
$("button.reset").on('click', function (event) {
    
    var Playeractive = activeplayer();
    
    function resetlife() {
        for(var i = 0, len = Players.length; i < len; i++){
            Players[i].life = 20;
            console.log(Players[i].life,Players[i].name);
        }
    }
    if (Playeractive < 4){
        $("button.add-player").prop("disabled", false);
    }
    if (Playeractive > 1){
        $("button.remove").prop("disabled", false);    
    }
    if (Playeractive === 4) {
       $("button.remove").prop("disabled", false); 
    }
    
    Game = [];
    
    
    resetlife(settingslife);    
    $(`span.displaylife`).text(settingslife);
    $(`ul.visualog`).empty();
});



// ** Tatsächliches Zählen

$("div.wrapper-count").on('click',"button", function count(time) {
    
    clearTimeout(klicktimer);
    //Timer zurücksetzen
    $("button.remove").prop("disabled", true);
    $("button.add-player").prop("disabled", true);
    
    var buttonvalue = $(this).attr('class').slice(9,12);
    var Player = $(this).attr('class').slice(0,8);
    // zuerst, alle spielstände erfragen
    console.log(buttonvalue);
    var newlife = 0;
    var round = Game.length;
    var position = getplayerposition(Player);
    //get existing life
        
    
    if (buttonvalue === "plu"){
        Players[position].life = Players[position].life + 1;
        
       
        console.log(Players[position].life,Players[position].name);
        
        $(`span.${Player}`).text(Players[position].life);        
        $(`span.${Player}`)[0].animate([ 
            { color: "#1FAFEF" },      
            { color: "#fff"  } ],
        200);
        
    }
    if (buttonvalue === "min"){
        Players[position].life = Players[position].life - 1;
        $("span.Player").text(Players[position].life);
        
        console.log(Players[position].life,Players[position].name);
        $(`span.${Player}`).text(Players[position].life); 
        $(`span.${Player}`)[0].animate([ 
            { color: "#DE3131" },      
            { color: "#fff"  } ],
        200);   

    }
    
    klicktimer = setTimeout (function() {
       // hier zähle ich in der globalen variable die runden hoch. Das könnte auch let werden? 
       var round = Game.length + 1;
          
       var logData = Players.map(function(player){
           
            return { 
                round: round, 
                name: player.name,
                count: player.count, 
                life: player.life, } ;
            });
            
       var logArray = {Gameround: logData};
      
       Game.push(logArray);
       console.log(Game);

       if (settingsautolog === true){
           var writeRound = Game.length -1;
           
           for (var i = 0; i < Players.length; i++) {
               var Playername = Game[writeRound].Gameround[i].name;
               var Playercount = Game[writeRound].Gameround[i].count;
               var Playerlife = Game[writeRound].Gameround[i].life;
               $(`ul.${Playercount}`).append('<li class="gamelog"><span>' + Playerlife + '</span></li>');
            }
           
       }
       
    },3000);
    
    
});