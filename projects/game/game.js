let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.
let buttons = 0; //for the heavan ending
let chance = 1; //for whiteboard and alt chat chances
let babyButton = 0; //for the art ending
let elevator = 0; // for the elevator/press confrence ending
let restarts = 0; //for any endings that change based on resets
let keypad = 0; //the communist manefesto (should probably add that at the end because that will take up a lot of space)
let restart = 0; //yeah I need 2 of them... don't worry about it
let lounge = 0; //for waiting in the employee lounge diouloge

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
	elevator == 0;
	keypad == 0;
	babyButton == 0;
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
    babyButton == 0;
	elevator == 0;
	keypad == 0;
	lounge == 0;
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
		}else if(input.toLowerCase() === "right door") {
			rightDoor();
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
	restarts = restarts + 1;
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

function bossOffice() {
	clear();
	print("\nComing to a staircase, Stanley walked upstairs to his boss's office.");
	print("\n\tupstairs" + "\n\tdownstairs");
	function processInput(input) {
		if(input.toLowerCase() === "upstairs"){
			ActualBossOffice();
		}else if(input.toLowerCase() === "downstairs") {
			insanityStart();
		}else{
			stayHere();
			waitThenCall(bossOffice);
		}
	}
	waitForInput(processInput);
}

//insane ending
function insanityStart() {
	clear();
	print("\nBut Stanely just couldn't do it. He considered the possibility of facing his boss, admitting he had left his post during work hours. He might be fired for that. And in such a competitive economy, why had he taken that risk? All because he believed everyone had vanished? His voss would think he was crazy.")
	function processInput(input){
		insanity2();
	}
	waitForInput(processInput);
}
function insanity2() {
	clear();
	print("\nAnd then something occured to Stanley. ''Maybe...'' he thought to himself. ''Maybe I am crazy... All of my coworkers blinking mysteriously out of existence in a single moment for no reason at all?'' None of it made any logical sense.");
	function processInput(input) {
		insanity3();
	}
	waitForInput(processInput);
}
function insanity3() {
	clear();
	print("\nAnd as Stanley pondered this, he began to make other strange ovservations. For example, why couldn't he see himself beyond written words? why couldn't he go back to previous rooms? And why was he not able to make any choices any more?");
	function processInput(input) {
		insanity4();
	}
	waitForInput(processInput);
}
function insanity4() {
	clear();
	print("\n''No''Stanley said to himself. ''This is all too strange, this can't be real.'' And at lasy, he came to the conclusion that had been on the tip of his tounge. He just hadn't found the words for it yet. ''I'm deaming!'' he yelled. ''This is all a dream!''");
	function processinput(input) {
		insanity5();
	}
	waitForInput(processinput);
}
function insanity5() {
	clear();
	print("\nWhat a relief Stanley felt to have finally found an answer, an explanation. His coworkers weren't actually gone, he wasn't going to lose his job, he wasn't crazy after all! And he though to himself: ''I suppose I'll wake up soon. I'll have to go back to my boring real life job pushing buttons, I may as well enjoy this while I'm still lucid");
	function ProcessInput(input) {
		insanity6();
	}
	waitForInput(ProcessInput);
}
function insanity6() {
	clear();
	print("\nSo he imagined himself flying, and began to gently float above the ground. Then he imagined himself soaring through space on a magical star field, and it too appeared! It was so much fun, and Stanely marveled that he had still not woken up. How was he remaining lucid?");
	function processInput(input) {
		insanity7();
	}
	waitForInput(processInput);
}
function insanity7() {
	clear();
	print("\nAnd then perhaps the strangest question of them all entered Stanley's head. Ohe he was amazed he hadn't asked himself sooner. ''Why is there a voice in my head dictating everything that I'm doing and thinking?''Now the voice was describing itself being considered by Stanley, who found it particularly strange. ''I'm dreaming about a voice describing me thinking about how it's describing my thoughts,'' he thought!");
	function processInput(input) {
		insanity8();
	}
	waitForInput(processInput);
}
function insanity8() {
	clear();
	print("\nAnd while he though it all very odd, and wondered if this voice spoke to all people in their dreams, the truth was that of course this was not a dream. How could it be? Was Stanley simply deceiving himself? Believing that if he's asleep he doesn't have to take responsibility for himself? Stanley is as awake right now as he's ever been in his life.");
	function processInput(input) {
		insanity9();
	}
	waitForInput(processInput);
}
function insanity9() {
	clear();
	print("\nNow hearing the voice speak these words was quite a chock to Stanley. After all, he knew for certain, beyond a doubt, that this was in fact a dream! Did the voice not see him float and make magical stars just a moment ago? How else would the voice explain all that?The voice was a part of himself too, surely, surely if he could just...");
	function processInput(input) {
		insanity10();
	}
	waitForInput(processInput);
}
function insanity10() {
	clear();
	print("\nHe would prove it. He would prove that he was in control, that this was a dream. So he closed his eyes gently, and invited himself to wake up. He felt the cool weight of the blanket on his skin, the press of the  mattress on his back, the fresh air of a world outside this one. ''let me kae up,'' he thought to himself. ''I'm done with this dream, I wish it to be over. let be go back to my job, let me continue pushing the buttons, please, it's all I want.''");
	function processInput(input){
		insanity11();
	}
	waitForInput(processInput);
}
function insanity11() {
	clear();
	print("\n''I want my apartment, and my wife, and my job. All I want is my life exactly the way it's always been. My life is normal, I am normal. Everything will be fine. I am okay.''");
	function processInput(input){
		insanity12();
	}
	waitForInput(processInput);
}
function insanity12() {
	clear();
	print("\n...");
	function processInput(input){
		insanity13();
	}
	waitForInput(processInput);
}
function insanity13() {
	clear();
	print("\nStanley began screaming. ''Please someone wake me up! My name is Stanley! I have a boss! I have an office! I am real! Please just someone tell me I'm real! I must be real! I must be! Can anyone hear my voice? Who am I? WHO AM I?!'' And Everything went black");
	function processInput(input){
		insanity14();
	}
	waitForInput(processInput);
}
function insanity14() {
	clear();
	print("This is the story of a woman named Mariella. Marialla woke up on a day like any other. She arose, got dressed, gathered her belongings, and walked to her place of work. But on this particular day, her walk was interrupted by the body of a man who had stumbled through town talking and screaming to himself and then collapsed dead on the sidewalk.")
	function processInput(input){
		insanity15();
	}
	waitForInput(processInput);
}
function insanity15() {
	clear();
	print("\nAnd although she would soon turn to go call for an ambulance for just a few, brief moments, she considered the strange man. He was obviously crazy; that much she knew. Everyone knows what crazy people look like. And in that moment, she thought to herself how lucky she was to be normal.");
	function processInput(input){
		insanity16();
	}
	waitForInput(processInput);
}
function insanity16() {
	clear();
	print("\nI am sane. I am in control of my mind. I know what is real, and what isn't. It was comforting to think this, and in  a certain way, seeing this man made her feel better. But then she remembered the meeting she had scheduled for that day. The very important people whose impressions of her would affect her career and, by extension, the rest of her life. She had no time for this, so it was only a moment that she stood there, staring down at the body. And then she turned and ran.")
	function processInput(input){
		insanityEnd();
	}
	waitForInput(processInput);
}
function insanityEnd() {
	clear();
	print("\nEnding 3, Insane Ending");
	function processInput(input){
		intro();
	}
	waitForInput(processInput);
}
//boss's office
function ActualBossOffice() {
	clear();
	print("\nStepping into his manager's office, Stanley was once again stunned to discover not an indication of any human life. Shocked, unraveled, Stanley wondered in disbelief who orchestrated this. What dark secret was being held from him?");
	print("\nchoose a place to investigate" + "\n\tBoss's desk" + "\n\tFireplace" + "\n\twait for the narrator to stop yapping");
	function processInput(input){
		if(input.toLowerCase() === "boss's desk"){
			keycard();
		}else if(input.toLowerCase() === "fireplace" || input.toLowerCase() === "wait for the narrator to stop yapping"){
			bossContinue();
		}else{
			stayHere();
			waitForInput(ActualBossOffice);
		}
	}
	waitForInput(processInput);
}
function keycard(){
	clear();
	print("\n[please enter pin number]")
	function processInput(input){
		if(input.toLowerCase() === "2845" && keypad == 0){
			tooFast();
		}else if(input.toLowerCase() !== "2845" && keypad == 0){
			bossContinue();
		}else if(input.toLowerCase() === "2845" && keypad >= 1){
			elavator();//spelled differently than the varrable
		}else if(input.toLowerCase() !== "2845" && keypad >= 1){
			incorrectCode1();
		}else{
			stayHere();
			waitForInput(keycard);
		}
	}

waitForInput(processInput);
}
function bossContinue() {
	clear();
	print("\nWhat he could not have known was that the keypad behind the boss's desk guarded the terrible truth that his boss had been keeping from him. And so the boss had assigned it an extra secret pin number: 2845");
	print("\nBut, of course, Stanley couldn't possibly have known this");
	print("\n\tWait here" + "\n\tBoss's desk");
	keypad = keypad +1;
	function processInput(input){
		if(input.toLowerCase() === "wait here"){
			incorrectCode1();
		}else if(input.toLowerCase() === "boss's desk"){
			keycard();
		}else{
			stayHere();
			waitThenCall(bossContinue);
		}
	}
	waitForInput(processInput);
}
function incorrectCode1(){
	clear();
	print("\nStanley just sat around twiddling his thumbs. Trying to input anything on the device was useless sincd he could never know the combination was: 2845.");
	print("\n2845");
	print("\nFor god - but it turns out that the panel's emergrncy override kicked in and the door just opened all by itself and Stanley got the heck along with the story - wekk whoop-de-doo!");
	function processInput(input){
		elavator();
	}
	waitForInput(processInput);
}

function tooFast() {
	clear();
	print("\nStanley was in such a rush to get through the story as quickly as possible, he didn't even have a single minute to just let the narrator talk. That kind of anxiety isn't healthy, so he just relaxed for a few moments with some calming insparational quotes:");
	function processInput(input){
		insparationalQuotes();
	}
	waitForInput(processInput);
}
function insparationalQuotes(){
	clear();
	print("\n''I have not allowed rejection to move me.'' -Cicely Tyson");
	print("\n''If my mind can conceive it, if my heart can believe it, then I can achive it.'' -Muhammad Ali");
	print("\n''Where there's hope, there's life. It fills us with fresh courage and makes us strong again.'' -Anne Frank");
	print("\n''try to be a RAINBOW in someone else's cloud'' -Maya Angelou");
	print("\n''To succeed in life, you need three things: a wishbone, a backbone, and a funny bone.'' Reba McEntire");
	function processInput(input){
		quotePost();
	}
	waitForInput(processInput);
}
function quotePost(){
	clear();
	print("\nFeeling soothed and rejuvenated, Stanley calmly walked forward into the open passageway.");
	function processInput(input){
		elavator();
	}
	waitForInput(processInput);
}
function elavator(){
	clear();
	if(elevator == 0){
	print("\Decending deeper into the building, Stanley realized he felt a bit peculiar. It was a stirring of emotion in his chest as though he felt more free to think for himself, to question the nature of his job. Why did he feel this now, when for yeats it had never coourred in him? This question would not go unanswered for long.");
	elevator = elevator + 1;
	}else if(elevator == 1){
		print("\nWhoops; nope, never mind! Stanley actually got back into the elevator and went back up! Silly me! Why did Stanley do that, when he knew that it would just lead back to his boss's office? Well, thats a great question, I just can't wait to find out.");
	elevator = elevator + 1;
	}else if(elevator == 2){
		print("\nIncredible. Now he's getting back into the elevator and going down again? Ladies and gentlemen, how does he keep coming up with all of this?");
elevator = elevator + 1;
	}else if(elevator == 3){
		print("\nDid you think he we were going to go forward down the spooky corridor? No! It's time to once again go back up in the elevator! I can't begin to grapple with what might be up there. Is it the boss's office again? Or what if it's the boss's office this time? The suspence is killing me!");
elevator = elevator + 1;
	}else{
		print("\nOf course. Going back down the elevator. How did I not anticipate it? I mean, sure, now it's obvious. But you have to understand that thirty seconds ago, this kind of thing had never been attempted before. I had no frame of refrence to even anticipate it! That's just how revelattory Stanley's decision-making is. A breath of fresh air in a landscape of storytelling that has grown stale and repetitive.");
		print("\nHmm... you know what? I just thought of something. Hold on, let's stop for a moment.");
		print("\n\tcontinue");
		elevator = elevator + 1;
	}
	if(elevator == 1 || elevator == 3){
		print("\n\tcreapy hallway" + "\n\televator");
	}else if(elevator == 2 || elevator == 4){
		print("\n\tboss's office");
	}else{
	}
	function processInput(input){
		if(input.toLowerCase() === "creapy hallway"){
			creapyHallway();
		}else if(input.toLowerCase() === "elevator"){
			elavator();
		}else if(input.toLowerCase() === "boss's office" && elevator == 2){
			elevatorBoss1();

		}else if(input.toLowerCase() === "boss's office" && elevator == 4){
			elevatorBoss2();
		}else if(input.toLowerCase() === "continue" && elevator >= 5){
			pressConfrence1();
		}else{
			stayHere();
			waitTheCall(elavator);
		}
	}
	waitForInput(processInput);

}
function elevatorBoss1(){
	clear();
	print("\nHere we are Stanley, it's your boss's office! Exactly the way it was before you got onto the elevator. It's still just exactly what it is. What a decision you've made to come up here and look at the office again. This has fleshed out the plot of the story in new and fascinating ways I could have never anticipated. It's that keen eye for storytelling that you have, an incisive rapid fire of critical plot points, one after another, weaving a rich tapestry of uncompromising narrative! Wow! [chuckles] I'm bolted to the edge of my seat!");
	print("\n\televator");
	function processInput(input){
		if(input.toLowerCase() === "elevator"){
			elavator();
		}else{
			stayHere();
			waitThenCall(elevatorBoss1);
		}
	}
	waitForInput(processInput);
}
function elevatorBoss2(){
	clear();
	print("\nOh my gosh... it's the boss's office. [sigh] This absolutely changes everything for me. Give me a time out here while I process this.");
	function processInput(input){
		elevatorBoss3();
	}
	waitForInput(processInput);
}
function elevatorBoss3(){
	clear();
	print("\n...");
	function processInput(input){
		elevatorBoss4();
	}
	waitForInput(processInput);
}
function elevatorBoss4(){
	clear();
	print("\nOk. I'm ready. I'm prepared to embrace this stunning revelation, and to move forward with- No! No wait! No, I need more time to process.");
	function processInput(input){
		elevatorBoss5();
	}
	waitForInput(processInput);
}
function elevatorBoss5(){
	clear();
	print("\n...");
	function processInput(input){
		elevatorBoss6();
	}
	waitForInput(processInput);
}
function elevatorBoss6() {
	clear();
	print("\nAlright, I have fully come to terms with it. I have made space in my worldview for this astonishing new reality. As before, I turn to your expert eye for gripping narrative, Master Stanley.");
	print("\n\televator");
	function processInput(input){
		if(input.toLowerCase() === "elevator"){
			elavator();
		}else{
			stayHere();
			waitThenCall(elevatorBoss6);
		}
	}
	waitForInput(processInput);
}
function pressConfrence1(){
	clear();
	print("\nDon't you realize? It's the anticipation, Stanley. You and I, we have no way of knowing what will be at the top of this elevator. But the suspence! The agony of waiting, and anticipating, and having to guess! That's the real thrill! Oh, I simply don't want to let that feeling go! It's so precious, so fleeting! Why don't we take this elevator ride nice and slow?");
	function processInput(input){
		pressConfrence2();
	}
	waitForInput(processInput);
}
function pressConfrence2(){
	clear();
	print("\nThere we go. Isn't this so much more exiting? You know Stanley, it seems like nowadays the only thing that audiences want is to be shocked as loudly and frequently as possible. They want big explosive moments flung right in their faces from the very moment that things get started. But where's the tension? Where's the trust in the audience to build a slow and nuanced appreciation for the story, the characters? Why aren't we given time to imagine the surprises? To have to think and to anticipate, and then to marvel at the eventual reveal?");
	function processInput(input){
		pressConfrence3();
	}
	waitForInput(processInput);
}
function pressConfrence3(){
	clear();
	print("\nThis is storytelling, Stanley! What you and I are doing right now, this is the most exiting narrative to be developed in years! And it's really all because of you! You're the one who took this bold step of revisiting the exact same lovations over and over. Truly, I mean it. This is unique and different. It's not like anything else out there. You see, I want stories that surprise me, Stanley! I want to have a think. I want to be engaged, and not pandered to. We're being fed such unimaginative drivel all the time, and we all know it. Which is why we're so starved for content that makes us feel sharp and vital and alive!");
	function processInput(input){
		pressConfrence5();
	}
	waitForInput(processInput);
}
function pressConfrence5(){
	clear();
	print("\nThat's why people like you so much, Stanley! Because you're not afraid to spit in the face of tradition. You're a role model, you know? People look up to you. Which is why- Oh, I didn't know when to spring this on you but, well, I've gathered a little press conference for you, so that you can talk about your work and your storytelling and your life. Yes, I know you're not much for the public eye, but I thought it would especially mean a lot to the people who have been following you from the beginning. They really look up to you, Stanley! I don't know if you realise the impact you have on them. This is the kind of gesture that might leave a tremendous impact on them for the better.");
	function processInput(input){
		pressConfrence6();
	}
	waitForInput(processInput);
}
function pressConfrence6() {
	clear();
	print("\nOh good, We're here. Okay, the room where we're holding the press confrence should be just around the corner here somewhere. Ah yes, here it is. Just through this door. Alright. Are you ready? I've told them you're going to speak a little bit about the nature of surprise in storytelling, and what it means to craft a truly unpredictable narrative. Oh don't worry! You'll do great! Just be yourself and speak from the heart! I- I'm really proud of you, Stanley.");
	function processInput(input){
		pressConfrence7();
	}
	waitForInput(processInput);
}
function pressConfrence7(){
	clear();
	print("\nOkay, it looks like they're ready for you. Go get 'em!");
	function processInput(input){
		pressConfrenceEnd();
	}
	waitForInput(processInput);
}
function pressConfrenceEnd(){
	clear();
	print("\nEnding 4, Press Confrence / Elevator Ending");
	function processInput(input){
		intro();
	}
	waitForInput(processInput);
}
function creapyHallway(){
	clear();
	print("\nStanley walked straight ahead through the large door that read: 'Mind Control Facility'");
	function processInput(input){
		tvRoom();
	}
	waitForInput(processInput);
}
function tvRoom(){
	clear();
	print("\nThe lights rose on an enormous room packed with television screens. ''What horrible secrets did this place hold?'' Stanley thought to himself. Did he have the strength to find out?");
	function processInput(input){
		cameraRoom();
	}
	waitForInput(processInput);
}
function cameraRoom(){
	clear();
	print("\nNow the monitors jumped to life, their true nature revealed. Each bore the number of an employee in the building  - Stanley's co-workers. The lives of so many individials reduced to images on a screen, and Stanley one of them, eternally monitored in this place where freedom meant nothing.");
	function processInput(input){
		tvElevator();
	}
	waitForInput(processInput);
}
function tvElevator(){
	clear();
	print("\nThe Mind Control Facility... it was too horrible to believe. It couldn't be true. Has Stanley really been under someone's control all this time? Was this the only reason he was happy with his boring job? That his emotions had been manipulated to accept it blindly?");
	function processInput(input){
		tvUpElevator();
	}
	waitForInput(processInput);
}
function tvUpElevator(){
	clear();
	print("\nNo! He refused to believe it. He couldn't accept it. His own life in someone else's control? Never! It was unthinkable, wasn't it? Was it even possible? Had he truly spent his entire life utterly blind to the world?");
	function processInput(input){
		leaveElevator();
	}
	waitForInput(processInput);
}
function leaveElevator(){
	clear();
	print("\nBut here was the proof. The heart of the operation. Controls labeled with emotions: happy, or sad, or content. Walkting, eating, working; all of it monitored and commanded from this very place. And as the cold reality of his pasy began to sinnk in, Stanley decided that this machinery would never again exert its terrible power over another human life. For he would dismantle the controls once and for all. And when at lasy he found the source of the room's power, he knew it was his duty, his obligation, to put an end to this horrible place and to everything it stood for.");
	function processInput(input){
		TheFinalChoice();
	}
	waitForInput(processInput);
}
function TheFinalChoice(){
	clear();
	print("\nDevice power");
	print("\nOn     Off");
	function processInput(input){
		if(input.toLowerCase() === "on"){
			FreedomEnding1();
		}else if(input.toLowerCase() === "off"){
			CountdownEnding1();
		}else{
			StayHere();
			waitThenCall(TheFinalChoice);
		}
	}
	waitForInput(processInput);
}
function FreedomEnding1(){
	clear();
	print("\n ...");
	function processInput(input){
		freedomEnding2();
	}
	waitForInput(processInput);
}
function freedomEnding2(){
	clear();
	print("\n Blackness. and a rising chill of uncertainty...");
	function processInput(input){
		freedomEnding3();
	}
	waitForInput(processInput);
}
function freedomEnding3(){
	clear();
	print("\nWas it over?");
	function processInput(input){
		freedomEnding4();
	}
	waitForInput(processInput);
}
function freedomEnding4(){
	clear();
	print("\nYes! He had won. He had defeared the machine, unshackled himself from someone else's command. Freedom was mere moments away!");
	function processInput(input){
		freedomEnding5();
	}
	waitForInput(processInput);
}
function freedomEnding5(){
	clear();
	print("\nAnd, yet, even as the immense foor slowly opened. Stanley reflected on how many puzzles still lay unsolved. Where had his co-workers gone? How had he been freed from the machine's grasp? What other mysteries did this strange building hold?");
	function processInput(input){
		freedomEnding6();
	}
	waitForInput(processInput);
}
function freedomEnding6(){
	clear();
	print("\nBut as sunlight streamed into the chamber, he realized none of this mattered to him. For it was not knowledge, or even power, that he had been seeking, but happiness.");
	function processInput(input){
		freedomEnding7();
	}
	waitForInput(processInput);
}
function freedomEnding7() {
	clear();
	print("\nPerhas his goal had not been to understand, but to let go. No longer would anyone tell him where to go, what to do, or how to feel. Whatever life he lives, it will be his. And that was all he needed to know. Ti was, perhaps, the only thing worth knowing.");
	function processInput(input){
		freedomEnding8();
	}
	waitForInput(processInput);
}
function freedomEnding8() {
	clear();
	print("\nStanley stepped through the open door. Stanley felt the cool breeze upon his skin, the feeling of liberation, the immense possibility of the new path before him. This was exactly the way, right now, that things were ment to happen.");
	function processInput(input){
		freedomEnding9();
	}
	waitForInput(processInput);
}
function freedomEnding9(){
	clear();
	print("\nAnd Stanley was happy.");
	function processInput(input){
		freedomFinal();
	}
	waitForInput(processInput);
}
function freedomFinal(){
	clear();
	print("\nending 5, freedom ending");
	function processInput(input){
		intro();
	}
	waitForInput(processInput);
}

function CountdownEnding1(){
	clear();
	print("Oh Stanley, you didn't just activate the controls, did you? After they kept you elsaved all these years, you go and you try to take control of the machine for yourself, is that what you wanted? Control?");
	function processInput(input){
		countdownEnding2();
	}
	waitForInput(processInput);
}
function countdownEnding2(){
	clear();
	print("\nOh... Stanley. [sigh] I applaud your effort, I really do, but you need to understand; there's only so much that machine can do. You were supposed to let it go, turn the controls off, and leave.");
	function processInput(input){
		countdownEnding3();
	}
	waitForInput(processInput);
}
function countdownEnding3(){
	clear();
	print("\nIf you want to throw my story off track, you're gonna have to do much better than that. I'm afraid you don't have nearly the power yiu think you do; for example, and I believe you'll fund this pertinent:");
	function processInput(input){
		countdownEnding4();
	}
	waitForInput(processInput);
}
function countdownEnding4(){
	clear();
	print("\nStanley suddenly realized that he had just initiated the network's emergency detonation system. In the event that this machine is activated without proper DNA identification, nuclear detonators are set to explode, eliminating the entire complex.");
	print("\nHow long until detonation, then? Hmm... let's say, um... two minutes");
	function processInput(input){
		countdownEnding5();
	}
	waitForInput(processInput);
}
function countdownEnding5() {
	clear();
	print("\nAh, now this is making things a little more fun, isn't it, Stanley? It's your time to shine! You are the star! It's your story now; shape it to your heart's desires. Ooh, this is much better than what I had in mind! What a shame we have so little time left to enjoy it.");
	function processInput(input){
		countdownEnding6();
	}
	waitForInput(processInput);
}
function countdownEnding6(){
	clear();
	print("\nMere moments until the bomb goes off, but what precious moments each one of them is! More time to talk about you, about me, where we're going, what this all means... I barely know where to start!");
	function processInput(input){
		countdownEnding7();
	}
	waitForInput(processInput);
}
function countdownEnding7(){
	clear();
	print("\nWhat's that? You'd like to know where your co-workers are? A moment of solace before you're obliterated? Alright. I'm in a good mood. You're going to die anyway. I'll tell you exactly what happened to them: I erased them. I turned off the machine; I set you free.");
	function processInput(input){
		countdownEnding8();
	}
	waitForInput(processInput);
}
function countdownEnding8(){
	clear();
	print("\nOf course, that was merely in this instance of the story. Sometimes when I tell it, I simply let you sit there in your office forever, pushing buttons endlessly and then dying alone. Other times, I let the office sink into the ground, swallowing everyone inside; or I let it burn to a crisp.");
	function processInput(input){
		countdownEnding9();
	}
	waitForInput(processInput);
}
function countdownEnding9(){
	clear();
	print("\nI have to say this, though, this version of events has been rather amusing. Watching you try to make sense of everything and take back the control wrestled away from you... it's quite rich. I almost hate to see it go! But I'm sure whatever I come up with on the nect go around will be even better.");
	function processInput(input){
		countdownEnding10();
	}
	waitForInput(processInput);
}
function countdownEnding10(){
	clear();
	print("\nMy goodness! Only 34 seconds left... but I'm enjoying this so much! You know what? To hell with it. I'm going to put some extra time on the clock; why not! These are precious additional seconds, Stanley. Time doesn't grow on trees!");
	function processInput(input){
		countdownEnding11();
	}
	waitForInput(processInput);
}
function countdownEnding11(){
	clear();
	print("\nOh, dear me, what's the matter, Stanley? Is it that you have no idea where you are going or what you're supposed to be doing right now? Or did you just assume that when I told you about that timer, there would be some choice or secret phrase to be able to turn it off?");
	function processInput(input){
		countdownEnding12();
	}
	waitForInput(processInput);
}
function countdownEnding12(){
	clear();
	print("\nI mean, look at you, sitting their reading this text. Or no, maybe you're desperatly trying to find some, secret little code to type in to fix all of this? Maybe it's 2845 again! Or no, it's the name of one of the removed endings! Maybe its the time! Or the Bucket! Everything! Anything! Something will save me!");
	function processInput(input){
		countdownEnding13();
	}
	waitForInput(processInput);
}
function countdownEnding13(){
	clear();
	print("\nWhy would you think that, Stanley? That this video game can be beaten, won, solved? Do you have any idea what your purpose in this place is? Hahaha, heh, Stanley... you're in for quite a disappointment.");
	function processInput(input){
		if(restart == 0){
			firstCountdown1();
		}else{
			replayCountdown1();
		}
	}
	waitForInput(processInput);
}
function firstCountdown1(){
	clear();
	print("\nBut here's a spoiler for you: that timer isn't a catalyst to keep the action moving along. It's just seconds ticking away to your death. You're only still plating instead of reading a novel because I want to watch you for evert moment that you're powerless, to see you made humble");
	function processInput(input){
		firstCountdown2();
	}
	waitForInput(processInput);
}
function firstCountdown2(){
	clear();
	print("\nThis is not a challenge. It's a tragedy. You wanted to control this world; that's fine. But I'm going to destroy it first, so you can't. ");
	function processInput(input){
		countdownEnding14();
	}
	waitForInput(processInput);
}
function replayCountdown1() {
	clear();
	print("\nBut you really believe there's an answer! How many times will you replay this bit, looking desperately for a solution? Ten? A hundred? A thousand? I look forward to finding out, and to watching the bomb go off each time you fail. just you and me and the retching explosion of fire and metal over and over and over for all eternity.");
	function processInput(input){
		replayCountdown2();
	}
	waitForInput(processInput);
}
function replayCountdown2(){
	clear();
	print("\nAnd Stanley died again.");
	function processInput(input){
		replayCountdown3();
	}
	waitForInput(processInput);
}
function replayCountdown3(){
	clear();
	print("\nAnd Stanley died again.");
	function processInput(input){
		replayCountdown4();
	}
	waitForInput(processInput);
}
function replayCountdown4(){
	clear();
	print("\nAnd Stanley died again.");
	function processInput(input){
		countdownEnding14();
	}
	waitForInput(processInput);
}
function countdownEnding14(){
	clear();
	print("\nTake a look at the clock, Stanley. That's 30 seconds you have left to struggle. Thirty seconds until a bog boom, and then nothing. No ending here, just you being blown to pieces. Will you cling desperately to your frail life, or will you let it go peacefully?");
	function processInput(input){
		countdownEnding15();
	}
	waitForInput(processInput);
}
function countdownEnding15() {
	clear();
	restart == restart + 1
	print("\nAnother choice. Make it count. Or don't. It's all the same to me. All a part of the joke. And believe me, I will be laughing at every secong of your inevitable life, from the moment we fade in until the moment I say: happily Ever Af-");
	function processInput(input){
		countdownFinal();
	}
	waitForInput(processInput);
}
function countdownFinal(){
	clear();
	print("ending 6, Countdown Ending");
	function processInput(input){
		intro();
	}
	waitForInput(processInput);
}
//right door path
function rightDoor(){
	clear();
	print("\nThis was not the correct way to the meeting rooom, and Stanley knew it perfectly well. Perhaps he wanted to stop by the emplotee lounge first, just to admire it.");
	print("\n\tEmployee Lounge");
	function processInput(input){
		if(input.toLowerCase() === "employee lounge"){
			employeeLounge();
		}else{
			stayHere();
			waitThenCall(rightDoor);
		}
	}
		waitForInput(processInput);
	}
function employeeLounge(){
	clear();
	if(lounge == 0 && chance == 100){
		print("\nAnd here it was, the lounge. ''What a room,'' Stanley thought to himself. ''What a room, what a room, what a room.'' This is what Stanley thought: ''What a room! What a room, what a room! What a room! Va va voom. What a room.''");
	}else if(lounge == 0 && chance == 99){
		print("\nStanley felt light-headed, butterflies in his stomach, giddy in a way he had never known before. Was it this room? A connection between the two? Could a man love a room? I mean... truly... truly... deepply... madly... love?");
	}else if(lounge == 0 && chance == 98){
		print("\nThe lounge was grand, majestic... perhaps too majestic. Like a combination of a much smaller version and a much larger version of this ecaxt room. It all made Stanley uncomfortable, and he started to bleed a little. This made him smile. At last, proof that he was human");
	}else if(lounge == 0 && chance == 97){
		print("\nStanding now in this incredible room, Stanley, for the first time, understood true happiness. Then the feeling went away and he felt sad again. Then it came back, and lingered for a minute or two. Now it's only half there; just a kind of, um, tingle.");
	}else if(lounge == 0 && chance == 96){
		print("\nThe lounge was sublime, a work of art. What was it about this room that called so deeply and so personally to Stanley? Its grace? Its subtle charm? No, Stanley knew... it was something deeper. Something... darker.");
	}else if(lounge == 0 && chance == 95){
		print("\nWow, yes, this room. What a beautiful room. What a gorgeous, gorgeous room. Thank goodness Stanley had taken this detour on his way to the meeting room. Life without having experienced this room was now too horrible even to consider.");
	}else if(lounge == 0 && chance == 94){
		print("\nIt was fine.");
	}else if(lounge == 0){
		print("\nAh, yes. Truely a room worth admiring. It had really been worth the detour after all, just to spend a few moments here in this immaculate, beautifully-constructed room. Stanley simply stood here, drinking it all in.");
	}else if(lounge == 1){
		print("\nYes! Really, really worth it being here in the room. A room so utterly captivating that, even though all your co-workers have mysteriously vanished, here you sit looking at these chairs and some paintings. Really worth it.");
	}else if(lounge == 2){
		print("\nAt this point, Stanley's obsession with this room bordered on creapy and reflected poorly on his overall personality. It's possible that this is why everyone left.");
	}else if(lounge == 3){
		print("\nStanley sat around waiting for more dialogue. But when a long time had passed and there was no more he decided that the game was trying to send him a message.");
	}else{
		print("\n...");
	}
	print("\n\tHallway" + "\n\tWait here");
	function processInput(input){
		if(input.toLowerCase() === "hallway"){
			rightHallway();
		}else if(input.toLowerCase() === "wait here"){
			lounge = lounge + 1;
			employeeLounge();
		}else{
			stayHere();
			waitThenCall(employeeLounge);
		}
	}
	waitForInput(processInput);
}
function rightHallway(){
	clear();
	print("\nBut eager yo get back to buisness, Stanley took the first open door on his left.");
	print("\n\tdoor on the left" + "\n\tcontinue to the warehouse");
	function processInput(input){
		if(input.toLowerCase() === "door on the left"){
			maintenceRoom();
		}else if(input.toLowerCase() === "continue to the warehouse"){
			warehouse();
		}else{
			stayHere();
			waitThenCall(rightHallway);
		}
	}
	waitForInput(processInput);
}
function maintenceRoom(){
	clear();
	print("\nAnd so he detoured through the maintenance section, walked straight ahead to the opposite door, and got back on track.");
	function processInput(input){
		bossOffice();
	}
	waitForInput(processInput);
}
function warehouse() {
	clear();
	print("\nStanley was so bad at following directions, it's incredible he wasn't fired years ago.");
	print("\n\tCargo lift" + "\n\tJump");
	function processInput(input){
		if(input.toLowerCase() === "cargo lift"){
			cargoLift();
		}else if(input.toLowerCase() === "jump"){
			powerfulEnding();
		}else{
			stayHere();
			waitThenCall(warehouse);
		}
	}
	waitForInput(processInput);
}
function powerfulEnding() {
	clear();
	print("\nBut in his eagerness to prove that he is in control of the story and no one gets to tell him what to do, Stanley leapt from te platform and plunged to his death");
	print("\nGood job Stanley. Everyone thinks you are very powerful.");
	function processInput(input){
		powerfulFinal();
	}
	waitForInput(processInput);
}
function powerfulFinal(){
	clear();
	print("\nending 7, powerful ending");
	function processInput(input){
		intro();
	}
	waitForInput(processInput);
}
function cargoLift(){
	clear();
	print("\nLook, Stanley, I think perhaps we've gotten off on the wrong fot here. I'm not your enemy, really, I'm not. I realize that investing your trust into someone else can be difficult but the fact is that the story has been about nothing but you all this time.");
	print("\n\tstay on cargo lift" + "\n\tjump");
	function processInput(input){
		if(input.toLowerCase() === "stay on cargo lift"){
			cargoLift2();
		}else if(input.toLowerCase() === "jump"){
			catWalk();
		}else{
			stayHere();
			waitThenCall(cargoLift);
		}
	}
		waitForInput(processInput);
}
function cargoLift2() {
	clear();
	print("\nThere's someone you've been neglecting, Stanley. Someone you'be forgotten about. Please, stop tring to make every descision by yourself. Now, I'm not asking for me; I'm asking for her.");
	function processInput(input){
		upperWarehouse();
	}
	waitForInput(processInput);
}
function upperWarehouse() {
	clear();
	print("\nThis is it, Stanley. Yout chance to redeem yourself. To put your work aside, to let her back into your life. She's been waiting.");
	print("\n\tContinue");
	function processInput(input){
		if(input.toLowerCase() === "continue"){
			phoneRoom();
		}else{
			stayHere();
			waitThenCall(upperWarehouse);
		}
	}
	waitForInput(processInput);
}
function phoneRoom(){
	clear();
	print("\n*phone rings*");
	print("\nThats her, Stanley. You need to be the one to do this. To reach out to her. If you can truly place your faith in anoother, then pick up the phone.");
	print("\n\tpick up the phone" + "\n\tUnplug the phone");
	function processInput(input){
		if(input.toLowerCase() === "pick up the phone"){
			apartmentEnding1();
		}else if(input.toLowerCase() === "unplug the phone"){
			choiceEnding1();
		}else{
			stayHere();
			waitThenCall(phoneRoom);
		}
	}
	waitForInput(processInput);
}
function apartmentEnding1(){
	clear();
	print("\nStanley's Wife:");
	print("\nOh, Stanley, is that you? Hold on, sweetie, sorry to keep you waiting. I'm just pulling the bread out of the oven. Alright! Ok, there we go! Alright, now. I want you to come in and tell me all about your day aw work.");
	print("\n\topen the door to your apartment");
	function processInput(input){
		if(input.toLowerCase() === "open the door to your apartment"){
			apartmentEnding2();
		}else{
			stayHere();
			waitThenCall(apartmentEnding1);
		}
	}
	waitForInput(processInput);
}
function apartmentEnding2(){
	clear();
	print("\nNarrator:");
	print("\nHAHAHHAHAHA! Gotcha! Oh, come on. Did you actually think you had a loving wife, who'd want to commit their life to you? I'm trying to make a point here, Stanlet. I'm trying to get you to see something.");
	print("\n\tGo into your apartment" + "\n\tRun away");
	function processInput(input){
		if(input.toLowerCase() === "go into your apartment"){
			apartmentEnding3();
		}else if(input.toLowerCase() === "run away"){
			falseRun();
		}else{
			stayHere();
			waitThenCall(apartmentEnding2);
		}
	}
	waitForInput(processInput);
}
function falseRun(){
	clear();
	print("\nSorry, but you're in my story now.");
	print("\n\tgo into your apartment");
	function processInput(input){
		if(input.toLowerCase() === "go into your apartment"){
			apartmentEnding3();
		}else{
			stayHere();
			waitThenCall(falseRun);
		}
	}
	waitForInput(processInput);
}

function apartmentEnding3(){
	clear();
	print("\nThis is a very sad story about the death of a man named Stanley.");
	print("\n\t[GOOD MORNING EMPLOYEE 247. PLEASE PRESSS S ON YOUR KEYBOARD");
	function processInput(input){
		clear();
		if(input.toLowerCase() === "s"){
			apartmentEnding4();
		}else{
			stayHere();
			waitThenCall(apartmentEnding3);
		}
	}
	waitForInput(processInput);
}
function apartmentEnding4(){
	clear();
	print("\nStanley is quite a boring fellow. He has a job that demands nothing of him, and every button that he pushes is a reminder og the inconsequential nature of his existence.");
	print("\n\tPLEASE PRESS 'N'");
	function processInput(input){
		if(input.toLowerCase() === "n"){
			apartmentEnding5();
		}else{
			stayHere();
			waitThenCall(apartmentEnding4);
		}
	}
	waitForInput(processInput);
}
function apartmentEnding5(){
	clear();
	print("\nLook at him, there. Pushing buttons. Doing exactly what he's told to do. Now, he's pushing a button. Now, he's eating lunch. Now, he's going home. Now, he's coming back to work. One might even feel sorry for him, exept that he's chosen this life.");
	print("\n\tPLEASE PRESS 'L'");
	function processInput(input){
		if(input.toLowerCase() === "l"){
			apartmentEnding6();
		}else{
			stayHere();
			waitThenCall(apartmentEnding5);
		}
	}
	waitForInput(processInput);
}
function apartmentEnding6(){
	clear();
	print("\nBut in his mind, ah! In his mind, he can go on fantastic adventers. From behinf his desk, Stanley dreamed of wild expeditions into the unknown. Fansastic Discoveries of new lands. It was wonderful. And each day that he returned to work was a reminder that none of it would happen to him.");
	print("\n\tPLEASE PRESS 'E' TO WATCH TV.");
	function processInput(input){
		if(input.toLowerCase() === "e"){
			apartmentEnding7();
		}else{
			stayHere();
			waitThenCall(apartmentEnding6);
		} 
	}
	waitForInput(processInput);
}
function apartmentEnding7(){
	clear();
	print("And so he began to fantasize about his own job. First, he imagined that one day while at work, he stepped up from his desk to realize that all of his co-workers, his boss, everyone in that building had suddenly vanished off the face of the Earth. The thought exited him terribly.");
	print("\n\tPLEASE PRESS 'T' TO SPEND TIME WITH THE BOYS");
	function processInput(input){
		if(input.toLowerCase() === "t"){
			apartmentEnding8();
		}else{
			stayHere();
			waitThenCall(apartmentEnding7);
		}
	}
	waitForInput(processInput);
}
function apartmentEnding8(){
	clear();
	print("\nSo, he went further. He imagined he came to two open doors and that he could go through either. At last, choice! It never even mattered what lay behind each door. The mere thought that his descisions would mean something was almost too wonderful to behold.");
	print("\n\tPLEASE PRESS 'R' TO PREPARE DINNER");
	function processInput(input){
		if(input.toLowerCase() === "r"){
			apartmentEnding9();
		}else{
			stayHere();
			waitThenCall(apartmentEnding9);
		}
	}
	waitForInput(processInput);
}
function apartmentEnding9(){
	clear();
	print("\nAs he wandered through this fantasy world, he began to fill it with many possible paths and destinations. Down one pathway laid an enormous round room with monitors and mind controls, and down another was a yellow line that weaved in many directions, and down another was a game with a baby. And he called it: The Stanley Parable.");
	print("\n\tPLEASE PRESS 'J' TO TELL YOUR KIDS A STORY.");
	function processInput(input){
		if(input.toLowerCase() === "j"){
			apartmentEnding10();
	}else{
		stayHere();
		waitThenCall(apartmentEnding9);
	}
	}
	waitForInput(processInput);
}
function apartmentEnding10(){
	clear();
	print("\nIt was such a wonderful fantasy. And so in his head he relived it again, and then again, and again, overer and over, wishing beyond hope that it would never end. That he might always feel this free. Surely there's an answer down some new path, musn't there be? Perhaps if he played just one more time.");
	print("\n\tPLEASE PRESS 'B' TO TELL YOUR WIFE YOU LOVE HER");
	function processInput(input){
		if(input.toLowerCase() === "b"){
			apartmentEnding11();
		}else{
			stayHere();
			waitThenCall(apartmentEnding10);
		}
	}
	waitForInput(processInput);
}
function apartmentEnding11(){
	clear();
	print("\nBut there is no answer. How could there possibly be? In reality, all he's doing is pushing the same buttons he always has. Nothing has changed. The longer he spends here, the more invested he gets, the more he forgets which life is the real one.");
	print("\n\tPLEASE PRESS 'Q' TO GO TO SLEEP.");
	function processInput(input){
		if(input.toLowerCase() === "q"){
			apartmentEnding12();
		}else{
			stayHere();
			waitThenCall(apartmentEnding11);
		}
	}
	waitForInput(processInput);
}
function apartmentEnding12(){
	clear();
	print("\nAnd I'm trying to tell him this. That in this world he can never be anything but an observer. That as long as he remains here, he's slowly killing himself. But he won't listen to me. He won't stop. Here, watch this. Stanley, the next time the input asks you to enter a letter, do not do it.");
	print("\n\tPLEASE PRESS 'P' TO BE AT WORK IN THE MORNING.");
	function processInput(input){
		if(input.toLowerCase() === "p"){
			apartmentEnding13();
	}else{
		stayHere();
		waitThenCall(apartmentEnding12);
	}
}
waitForInput(processInput);
}
function apartmentEnding13(){
	clear();
	print("\nYou see? Can he just not hear me? How can I tell him in a way that he'll understand, that every second he remains here, he's electing to kill himself? How can I get him to see what I see? How can I get him to look at himself?");
	print("\n\tPRESS 'D' TO QUESTION NOTHING.");
	function processInput(input){
		if(input.toLowerCase() === "d"){
			apartmentEnding14();
		}else{
			stayHere();
			waitThenCall(apartmentEnding13);
		}
	}
	waitForInput(processInput);
}
function apartmentEnding14(){
	clear();
	print("\nI suppose I can't, not in the way I want him to. But I don't make the rules. I simply play to my intended purpose, the same as Stanley. We're not so different, I suppose. I'll try once more to conver all this to him. I'm compelled to, I must. Perhaps, well... naybe this time he'll see. Maybe this time.");
	print("\n\tPLEASE DIE.");
	function processInput(input){
		apartmentEnding16();
	}
	waitForInput(processInput);
}
function apartmentEnding16(){
	clear();
	print("\nAnd I tried again, and Stanley pushed the button.");
	function processInput(input){
		apartmentEnding17();
	}
	waitForInput(processInput);
}
function apartmentEnding17(){
	clear();
	print("\nAnd I tried again, and Stanley pushed the button.");
	function processInput(input){
		apartmentEnding18();
	}
	waitForInput(processInput);
}
function apartmentEnding18(){
	clear();
	print("\nAnd I tri-");
	function processInput(input){
		apartmentFinal();
	}
	waitForInput(processInput);
}
function apartmentFinal(){
	clear();
	print("\ending 8, Apartment Ending");
	function processInput(input){
		intro();
	}
	waitForInput(processInput);
}
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to a recreation of The Stanely Parrables! Press any key to start. you can reset the game at any time by typing reset.");
	print("\nSome endings are missing, like the escape pod ending becuase I can't program that in, or the museumn ending because I didn't want to. Also, some diologue has been changed to fit the format, like in the insane ending.");
	print("\nall copywrite goes to CrowsCrowsCrows and I am in no way trying to claim any of this work as mine, I'm just making this for a web page assignment");
    function processInput(input){
            intro();
    }
    waitForInput(processInput);
}
reset();
