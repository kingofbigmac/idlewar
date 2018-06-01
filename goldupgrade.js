var cookies = 0;

function cookieClick(number){
    cookies = cookies + number;
    document.getElementById("cookies").innerHTML = cookies;
};

var cursors = 0;

function buyCursor(){
    var cursorCost = Math.floor(25 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(cookies >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
        cookies = cookies - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(25 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
    
    cookieClick(cursors);
    
}, 1000);

var peasants = 0;

function buyPeasant(){
    var peasantCost = Math.floor(1000 * Math.pow(1.01,peasants));     //works out the cost of this peasant
    if(cookies >= peasantCost){                                   //checks that the player can afford the peasant
        peasants = peasants + 10;                                   //increases number of peasants
        cookies = cookies - peasantCost;                          //removes the cookies spent
        document.getElementById('peasants').innerHTML = peasants;  //updates the number of peasants for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(1000 * Math.pow(1.01,peasants));       //works out the cost of the next peasant
    document.getElementById('peasantCost').innerHTML = nextCost;  //updates the peasant cost for the user
};

window.setInterval(function(){
    
    cookieClick(peasants);
    
}, 1000);

var knights = 0;

function buyKnight(){
    var knightCost = Math.floor(12000 * Math.pow(1.01,knights));     //works out the cost of this peasant
    if(cookies >= knightCost){                                   //checks that the player can afford the peasant
        knights = knights + 120;                                   //increases number of peasants
        cookies = cookies - knightCost;                          //removes the cookies spent
        document.getElementById('knights').innerHTML = knights;  //updates the number of peasants for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(12000 * Math.pow(1.01,knights));       //works out the cost of the next peasant
    document.getElementById('knightCost').innerHTML = nextCost;  //updates the peasant cost for the user
};
    
 window.setInterval(function(){
    
    cookieClick(knights);
    
}, 1000);  