let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.
let buttons = 0; //for the heavan ending
let chance = 1; //for whiteboard and alt chat chances
let babyButton = 0; //for the art ending
let elevator = 0;

function reset(){
	intro();
}//hopefully this works in all places exept the serious ending

function percent(){
	chance = Math.floor(Math.random() * 101);
}


//If you need, add any "helper" functions here


//Make one function for each location
function intro() {
    clear();
    print("\nThis is a story about a Man named Stanely. Stanely worked for a company in a big building where he was employee #427. Employee #427's job was simple: he sat at his desk in room 427 and he pushed buttons on a keyboard. Orders came to him through a monitor on his desk, teling him what buttons to push, how long to push them, and in what order. This is what Employee #427 did every day of every month of every year, and although others might have considered it soul rending, Stanely relished every moment that the orders came in, as though he had been made exactly for this job. And Stanely was happy.");
    
    function processInput(input){
    	room427();    
    }
    waitForInput(processInput);
}

function room427() {
    clear();
    print("\nAnd then one day, something very peculiar happened, something that would forever change Stanley, something he would never quite forget. He had been at his deskk for nearly an hour, when he realized that not one, single order had arrived on the monitor for him to follow. No one had shown up to give him instructions, call a meeting, or even say hi. Never in all his years at the company had this happened, this complete isolation. Something was very clearly wrong. Shocked, frozen solid, Stanley found himself unable to  move for the longest time, but as he came to his wits and regained his senses, he got up from his desk and STEPPED OUT OF HIS OFFICE ");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tHALLWAY" + "\n\tStay in office");
    
    function processInput(input){
        if (input.toLowerCase() === "hallway" && chance =< 95) {
            altHall();
	}else if(input.toLowerCase() === "hallway" && chance =< 90) {
		blueHall();
	}else if(input.toLowerCase() === "hallway"){
		hallway();
	}else if(input.toLowerCase() === "stay in office"){
		cowardEnding();
        } else {
            stayHere();
            waitThenCall(locationB);
        }
    }
    waitForInput(processInput);
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to a recreation of The Stanely Parrables! Press any key to start. you can reset the game at any time by typing reset.");

    function processInput(input){
            intro();
    }
    waitForInput(processInput);
}
