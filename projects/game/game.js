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

function code(){
	function proccessInput(input){
	if(input.toLowerCase() === "sv_cheats 1"){
		clear();
		print("\n Stanley. This is me being serious. In fact, this is my serious room. It's where I come to be serious. That table is the most setious table I could find. I looked at many many tables, hundreds of tables. It's possible I looked at over a thousand tables.I honestly don't know, the specific number isn't as important as the understanding that of all tables I looked at, this one is the most serious. I relate this story to impress upon you the extent to which this is the most serious room I have. Which is why I brought you here. You just tried to activate server cheats which of course runs the risk of breaking the entire game. You've got no respect for the strict order of scripted narrative events and I just can't have that. It's time to get serious Stanley. No jokes, no games, outside of this room I might be more tolerant of those things but now we're in the room which is why I'm subjecting you to the most serious punishment I can think of. One hundred billion trillion years standing here in the serious room. Perhaps after that we can talk. about the severity of your actions and whether you've learned anything. But until then, serious room, go!");
	}
	if(input.toLowerCase() === "reset"){
		print("\n whoa! did we not have the talk?  are we not in the serious room this very moment? Did I not tell you how many I looked throug? I'm going to be conservative and say it was somewhere in the tens of thousands of tables. Any reasonable person would say I spent an absurd amout of time doing nothig but looking at tables. I genuinely considered each one too! I took a heck of a lot of notes. I kept the notes in a different room. That room is less serious than this one. It's more of a... a notes room. Again the point of this story is to conver how serious I feel this cheating issue really is. And I'm sure you'll agree with me once you fulfilled your new punishment: infinity years in the serious room. I generally have trouble reading human emotions but I'm going to go out on a limb here and say that you're devastated by this crippling new punishment. As well you should be, it's the most serious I could think of. Can you get more serious than that? No, you can't. Don't try.");
		if(input.toLowerCase() === "reset"){
			print("\n hm, still no effect. The problem is clearly the serious room. It isn't serious enough. Thats on my Stanely I appologize. I'm going to the store to look through more tables. Hopefully I find one that conveys how wrong what you're doing is. Now, where did I put those notes? *paper rustling*");
			if(input.toLowerCase() === "reset"){
				reset();
			} 
		}
	} 
}
	WaitForInput(proccessInput);
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

function locationB() {
    clear();
    print("\nYou are in location B!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tlocationA");
    
    function processInput(input){
        if (input.toLowerCase() === "intro") {
            locationA();
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
