let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.
let buttons = 0; //for the heavan ending
let chance = 1; //for whiteboard and alt chat chances
let babyButton = 0; //for the art ending
let elevator = 0; // for the elevator/press confrence ending
let restarts = 0; //for any endings that change based on resets

function reset(){
	function processInput(input){
		if(input.toLowerCase === "reset"){
		intro();
		}else{
			stayHere();
			waitForInput(processInput);
		}
	}
	waitForInput(processInput);
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
	function processInput(input) {
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
	function processInput(input) {
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
	function processInput(input) {
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
	function processInput(input) {
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
//left door path
function meetingRoom() {
	clear();
	print("\nyet there was not a single person here either. Feeling a wave of dispelief, Stanley decided to go up to his boss's office hoping he might find an answer there.");
	print("\nwhere do you want to go?" + "\n\tstairwell" + "\n\tbroom closet");
	function processInput(input) {
		if(input.toLowerCase() === "stairwell"){
			bossOffice();
		}else if(input.toLowerCase() === "broom closet"){
			broomCloset(); //this is the wrong nae=me but it's in too many places to replace so just pretend it says stairwell
		}else{
			stayHere();
			waitThenCall(meetingRoom);
		}
	}
	waitForInput(processInput);
}
//oh, did you get the broom closet ending? the broom closet ending was my favorite!
function broomCloset() {
	clear();
	if(restarts == 0){
	print("\nStanlet stepped into the broom closet, but there was nothing here. So he turned around and got back on track.");
	}else{
		print("\noh, no. oh no, no, no, no, no, no, no, no, no, not again. I won't be a part of this. I'm not going to encourage you. I'm not going to say anything at all. I'm just going to be patient and wait for you to finish whatever it is you enjoy doing so much in this room. Please, take your time.");
	}
	print("\n\tleave" + "\n\tstay");
	function processInput(input) {
		if(input.toLowerCase() === "leave"){
			bossOffice();
		}else if(input.toLowerCase() === "stay"){
			broomCloset2();
		}else{
			stayHere();
			waitThenCall(broomCloset);
		}
	}
	waitForInput(processInput);
}

function broomCloset2() {
	clear();
	print("\nThere was nothing here. No choice to make, no path to follow, just an empty broom closet. No reason to still be here.");
	print("\n\tleave" + "\n\tstay");
	function processInput(input) {
		if(input.toLowerCase() === "leave"){
			bossOffice();
		}else if(input.toLowerCase() === "stay"){
			broomCloset3();
		}else{
			stayHere();
			waitThenCall(broomCloset2);
		}
	}
	waitForInput(processInput);
}
function broomCloset3() {
	clear();
	print("\nIt was baffeling that Stanely was still just sitting in the broom closet. He wasn't even doing anything. At least if there was something to interact with he'd be justified in some way. As it is, he's literally just standing there, doing sween nothing.");
	print("\n\tleave" + "\n\tstay");
	function processInput(input) {
		if(input.toLowerCase() === "leave"){
			bossOffice();
		}else if(input.toLowerCase() === "stay"){
			broomCloset4();
		}else{
			stayHere();
			waitThenCall(broomCloset3);
		}
	}
	waitForInput(processInput);
}
function broomCloset4() {
	clear();
	print("\nAre you... are you really still in the broom closet? Standing around doing nothing? Why? Please offer me some explanation here; I'm genuinely confused. You do realize there's no choice or anything in here, right? If I had said: ''Stanley wallked past the broom closet,'' at least you would have had a reason for exporing it to find out. But it didn't even occur to me because literally this closet is of absolutely no significance to the story whatsoever. I never would have thought to mention it. Maybe to you this is somehow its own branching path. Maybe when you go talk about this to your freinds, you'll say: ''OH, DID U GET THEB ROOM CLOSET ENDING? THE BROOM CLOSET ENDING WAS MY FAVORITE!1 XD'' ");
	print("\nI hope your friends find this concerning");
	print("\n\tleave" + "\n\tstay");
	function processInput(input) {
		if(input.toLowerCase() === "leave"){
			bossOffice();
		}else if(input.toLowerCase() === "stay"){
			broomCloset5();
		}else{
			stayHere();
			waitThenCall(broomCloset4);
		}
	}
	waitForInput(processInput);
}
function broomCloset5() {
	clear();
	print("\nStanlet was fat, and ugly, and really, really stupid. He probably only got the job because of a family connection; that's how stupid he is. [I can't put the rest of this line in because then it slips into pg 13 and not just pg :( ]");
	print("\n\tleave" + "\n\tstay");
	function processInput(input) {
		if(input.toLowerCase() === "leave"){
			bossOffice();
		}else if(input.toLowerCase() === "stay"){
			broomCloset6();
		}else{
			stayHere();
			waitThenCall(broomCloset5);
		}
	}
	waitForInput(processInput);
}
function broomCloset6() {
	clear();
	print("\nWell, I've come to a very definite conclusion about what's going on right now. You're dead. You got to this broom closet, exploted it a bit, and were just about to leave because there's nothing here when a physical malady of some sort shut down your central nervous system and you collapsed on the keyboard. Well, in a situation like this, the responsible thing is to alert someone nearby so as to ensure that your body is taken care of before it begins to decompose.");
	function processInput(input) {
		broomCloset7();
	}
	waitForInput(processInput);
}
function broomCloset7() {
	clear();
	print("\nHELLO? ANYONE WHO HAPPENS TO BE NEARBY! THE PERSON AT THIS COMPUTER IS DEAD! THEY HAVE FALLEN PREY TO ANY NUMBER OF YOUR COUNTLESS HUMAN PHYSIOLOGICAL VUNERABILITIES. IT'S INDICATIVE OF THE LONG-TERM SUSTAINABILITY OF YOUR SPECIES! Please remove their corpse from the area and instruct another human to take their place making sure they understand basic text-based video game mechanics and filling them in on the history or narrative tropes in video gaming so that the irony and insightful commentary of this game is not lost on them.");
	print("\Alright, when you've done that, just step out into the hallway");
	print("\n\tleave" + "\n\tstay");
	function processInput(input) {
		if(input.toLowerCase() === "leave"){
			BroomHallway();
		}else if(input.toLowerCase() === "stay"){
			broomWait();
		}else{
			stayHere();
			waitThenCall(broomCloset7);
		}
	}
	waitForInput(processInput);
}
function broomWait() {
	clear();
	print("\n...");
	print("\n\tleave" + "\n\tstay");
	function processInput(input) {
		if(input.toLowerCase() === "leave"){
			BroomHallway();
		}else if(input.toLowerCase() === "stay"){
			broomWait();
		}else{
			stayHere();
			waitThenCall(broomWait);
		}
	}
	waitForInput(processInput);
}
function BroomHallway() {
	clear();
	print("\nAh, second player! It's good to have you on board. I guarantee you can't do any worse than the person who came before you.");
	print("\n\tbroom closet" + "\n\tstairwell");
	function processInput(input) {
		if(input.toLowerCase() === "broom closet"){
			broomCloset8();
		}else if(input.toLowerCase() === "stairwell"){
			bossOffice();
		}else{
			stayHere();
			waitThenCall(broomHallway);
		}
	}
	waitForInput(processInput);
}
function broomCloset8() {
	clear();
	print("\nYou too?! Unbelievable. I'm at the mercy of an entire species of imbaciles. Perhaps there's a monkey nearby you can hand the controls to? A fish? Fungus? Look, you can hammer out the details, I'm not particularly picky. I'll just be waiting for when you're ready to pick up the story again.");
	restarts += restarts;
	print("\n\tleave" + "\n\tstay");
	function processInput(input) {
		if(input.toLowerCase() === "leave"){
			bossOffice();
		}else if(input.toLowerCase() === "stay"){
			broomWait2();
		}else{
			stayHere();
			waitThenCall(broomCloset8);
		}
	}
	waitForInput(processInput);
}
function broomWait2() {
	clear();
	print("\n...");
	print("\n\tleave" + "\n\tstay");
	function processInput(input) {
		if(input.toLowerCase() === "leave"){
			bossOffice();
		}else if(input.toLowerCase() === "stay"){
			broomWait2();
		}else{
			stayHere();
			waitThenCall(broomWait);
		}
	}
	waitForInput(processInput);
}
//right door path

//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to a recreation of The Stanely Parrables! Press any key to start. you can reset the game at any time by typing reset.");

    function processInput(input){
            intro();
    }
    waitForInput(processInput);
}
reset();
