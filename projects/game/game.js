let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.
let buttons = 0; //for the heavan ending
let chance = 1; //for whiteboard and alt chat chances
let babyButton = 0; //for the art ending
let elevator = 0;
let cheats = 0;

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
   percent();
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
        if (input.toLowerCase() === "hallway" && chance >= 95) {
            altHall();
	} else if(input.toLowerCase() === "hallway" && chance >= 90) {
		blueHall();
	} else if(input.toLowerCase() === "hallway") {
		hallway();
	} else if(input.toLowerCase() === "stay in office") {
		cowardEnding();
        } else {
            stayHere();
            waitThenCall(room247);
        }
    }
    waitForInput(processInput);
}

function cowardEnding() {
	clear();
	print("\nBut stanley simply couldn't handle the pressure. What if he had to make a descision? What if a crucial outcom fell under his responsibility? He had never been trained for that! No, this couldn't go any way exept badly." + "\nThe thing to do now'', stanely though to himself, '' is to wait. Nothinh eill hurt me. Nothing will break me... In here, I can be happy, forever... I will be happy" + "\nstanley waited. Hours passed. Then days. Had years gone by? He no longer had the ability to tell. But the one thing he knew for sure, beyond any doubt was that if he waited long enough, the answers would come. Eventually, some daay, they woudl arrive. Soon, very soon now, this will end. He will be spoken to. He will be told what to do. Now it's just a little bit closer. Now it's even closer. Here it comes." + "\n Ending 1, Coward Ending");
	function ProcessInput(input){
		intro();
	}
	waitForInput(ProcessInput);
}

function hallway() {
	clear();
	print("\nAll of his co-workers were gone. what coult it mean? Stanley decided to go to the meeting room; perhaps he has simply missed a memo");
	print("\nWhere do you want to go next?" + "\n\tcontinue" + "\n\troom 247" + "\n\tExplore");
	function processInput() {
	if(input.toLowerCase() === "continue") {
		doors();
	} else if(input.toLowerCase() === "room 247") {
		lockedDoor();
	} else if(input.toLowerCase() === "explore") {
		explore();
	} else {
		stayHere();
		waitThenCall(hallway);
	}
	}
	waitForInput(processInput);
}

function altHall() {
	clear();
	print("\nAll of his co-workers were... wait, no, this isn't the right office, is it? Is this Stanely's office?");
	print("\nWhere do you want to go next?" + "\n\tcontinue" + "\n\troom 247" + "\n\tExplore");
	function processInput() {
	if(input.toLowerCase() === "continue") {
		doors();
	} else if(input.toLowerCase() === "room 247") {
		lockedDoor();
	} else if(input.toLowerCase() === "explore") {
		explore();
	} else {
		stayHere();
		waitThenCall(altHall);
	}
	}
	waitForInput(processInput);
}
function blueHall() {
	clear();
	print("\nWhere do you want to go next?" + "\n\tcontinue" + "\n\troom 247" + "\n\troom 246");
	function processInput() {
	if(input.toLowerCase() === "continue") {
		doors();
	} else if(input.toLowerCase() === "room 247") {
		lockedDoor();
	} else if(input.toLowerCase() === "room 246") {
		whiteboard();
	} else {
		stayHere();
		waitThenCall(blueHall);
	}
	}
	waitForInput(processInput);
}
function lockedDoor(){
	clear();
	print("\nThe door has been locked");
	function processInput(input){
		hallway();
	}
	waitForInput(processInput);
}

function explore() {
	clear();
	print("\nNo matter how hard Stanley looked, he couldn't find a trace of his co-workers. Stanlet went around touching every little thing in the office. But it didn't make a single difference, nor did it advance the story in any way. Stanley clicked on literally every single doo in the office because he doesn't pick up well on cues from his environment.");
	function processInput(input){
		hallway();
	}
	waitForInput(processInput);
}

function whiteboard() {
	clear();
	print("\n ending 2. Whiteboard ending!");
	function processInput(input){
		intro();
	}
	waitForInput(processInput);
}

function doors(){
	clear();
	print("\nWhen stanley came to a set of two open doors, he entered the door on his left.");
	print("\n choose where to go:" + "\n\tleft door" + "\n\tright door");
	function processInput() {
		if(input.toLowerCase() === "left door") {
			meetingRoom();
		}else if(input.toLowerCase === "right door") {
			employeeLounge();
		} else {
			stayHere();
			waitThenCall(doors);
		}
	}
			waitForInput(processInput);
	}

//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to a recreation of The Stanely Parrables! Press any key to start. you can reset the game at any time by typing reset.");

    function processInput(input){
            intro();
    }
    waitForInput(processInput);
}
