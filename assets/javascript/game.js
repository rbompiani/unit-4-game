//create character object
function character (name, health, attack, counter){

    //create basic character stats
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.counter = counter;

    //add method to decrease health based on counter
    this.decHealth = function (hit){
        this.health -= hit;
    }
}

//create character holders to populate
var char1;
var char2;
var char3;
var char4;




//on game start...
function startGame(){

    console.log("start game is working");

    //initialize characters - set to variables
    char0 = new character("Character0",100, 20, 30);
    char1 = new character("Character1",200, 20, 30);
    char2 = new character("Character2",180, 20, 30);
    char3 = new character("Character3",130, 20, 30);

    console.log(char1);

    //create array of characters
    var characters = [char0, char1, char2, char3];

    //get the character field div from document
    var charField = document.getElementById("charField");

    //for each character
    for (var charIdx=0; charIdx<characters.length; charIdx++){

        //create a div to hold the character info
        var charHolder = document.createElement("DIV");
        //set class name to character holder
        charHolder.className = "charHolder";
        //set id of holder to character variable
        charHolder.id = "char"+charIdx;

        //create inner parts for charHolder
        //access character name
        var charTitle = characters[charIdx].name;

        //create new heading to hold character name
        var charName = document.createElement("H5");
        //set class for character name heading
        charName.className = "charName";
        //add character name into new heading
        charName.innerHTML = charTitle;
        //append character name as child of character holder
        charHolder.appendChild(charName);

        //create an img
        var charImg = document.createElement("IMG");
        //set img source = to image path
        charImg.src = "assets/images/" + charTitle + ".jpg";
        //set character image class
        charImg.className = "charImg";
        //append image as child of character holder
        charHolder.appendChild(charImg);

        //create healthbar
        var charHealth = document.createElement("H5");
        //set health value inside bar
        charHealth.innerHTML = characters[charIdx].health;
        //append health to characetr holder
        charHolder.appendChild(charHealth);

        //append character holder to character field
        charField.appendChild(charHolder);
    }
}

$(document).ready(function(){
    $(".charHolder").on("click", function(){
        alert(this.id);
    });      
});
