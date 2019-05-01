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

//on game start...
function startGame(){

    console.log("start game is working");

    //initialize characters - set to variables
    var char1 = new character("Character1",100, 20, 30);
    var char2 = new character("Character2",200, 20, 30);
    var char3 = new character("Character3",180, 20, 30);
    var char4 = new character("Character1",130, 20, 30);

    console.log(char1);

    //create array of characters
    var characters = [char1, char2, char3, char4];

    //get the character field div from document
    var charField = document.getElementById("charField");

    //for each character
    for (var charIdx=0; charIdx<characters.length; charIdx++){

        //create a div to hold the character info
        var charHolder = document.createElement("DIV");
        charHolder.className = "charHolder";

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
