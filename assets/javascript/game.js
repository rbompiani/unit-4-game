
$(document).ready(function(){

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
    var char0;
    var char1;
    var char2;
    var char3;

    // create variables for fighter/defender
    var hero;
    var enemy;

    
    var heroBaseAttack;
    var heroAttack;
    var heroHealth;
    var enemyCounter;
    var enemyHealth;

    // identify html divs as variables
    var characterArena = $("#charField");
    var heroArena = $("#hero");
    var enemyArena = $("#enemy");
    var matchupArena = $("#matchup");

    


    //on game start...
    function startGame(){

        console.log("start game is working");

        //unset fighter and defender
        hero=false;
        enemy=false;

        //hide attack button
        $("#attack").hide();

        //initialize characters - set to variables
        char0 = new character("Character0",100, 20, 30);
        char1 = new character("Character1",200, 20, 30);
        char2 = new character("Character2",180, 20, 30);
        char3 = new character("Character3",130, 20, 30);

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
            //add health class
            charHealth.className = "health";
            //set health value inside bar
            charHealth.innerHTML = characters[charIdx].health;
            //append health to characetr holder
            charHolder.appendChild(charHealth);

            //create hidden attack
            var charAttack = document.createElement("DIV");
            charAttack.innerHTML = characters[charIdx].attack;
            charAttack.className = "attack";
            charHolder.appendChild(charAttack);

            //append character holder to character field
            charField.appendChild(charHolder);
        }

        $("#instruction").html("Select Your Hero!");
    }

    //SET ALL ATTACK FUNCTIONALITY HERE
    function attack(){
        //use hero attack to decrement enemy health
        enemyHealth -= heroAttack;
        //alert your attack
        alert("you attacked for " +heroAttack);

        //set enemy health in html to equal new health
        $("#enemy").find(".health").text(enemyHealth);
        //increase attack by base attack
        heroAttack += heroBaseAttack;
        
        // if enemy health > 0, fight again, else you won!
        if (enemyHealth>0){
            //counterattack
            heroHealth -= enemyCounter;
            //alert the counter
            alert("they countered for "+ enemyCounter);

            //set your health in html equal to new health
            $("#hero").find(".health").text(heroHealth);            
        } else {
            alert("YOU WIN! SELECT ANOTHER");
        }



    }

    startGame();

    //MOVE DIVS TO FIGHTER AND EMENMY
    $(".charHolder").on("click", function(){
        //if no fighter is chosen...
        if(!hero){
            //add fighter class to current div
            this.classList.add("hero");
            //move character to fighter area
            heroArena.append(this);
            //tell the code that a fighter has been chosen
            hero=true;
            currentHero = this.id;
            //set hero health variable
            heroHealth=parseInt($(this).find(".health").text());
            //set hero attack
            heroAttack=parseInt($(this).children().last().text());
            heroBaseAttack = heroAttack;

            //detach old on click
            $(this).off("click");

            //change instructions
            $("#instruction").html("Select Your Enemy!");

        } else if (!enemy){
            //add enemy class to current div
            this.classList.add("enemy");
            //move character to fighter area
            enemyArena.append(this);
            //tell the code that a fighter has been chosen
            enemy=true;
            currentEnemy = this.id;

            //set hero health variable
            enemyHealth=parseInt($(this).find(".health").text());
            //set hero attack
            enemyCounter=parseInt($(this).children().last().text());

            //detach old on click
            $(this).off("click");

            //change instructions
            $("#instruction").html("FIGHT!");   
            
            //show the attack button
            $("#attack").show();

            $("#attack").on("click", attack);

        }  else {
            $("#instruction").html("Defeat the Enemy Before Selecting a New One - FIGHT!");     
        }        
    });    
 
});
