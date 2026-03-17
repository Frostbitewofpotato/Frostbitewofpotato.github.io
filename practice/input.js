
			const canvas = document.getElementById("canvas");
			const ctx = canvas.getContext("2d");
			 let x = 440;
			let y = 79;
			let vx = 10;
			let vy = 10;
			let a = 255;
			let b = 0;
			let c = 0;
let gravity = 1;

			ctx.fillStyle = "red";
			 function animate(){
				 ctx.clearRect(0,0,800,800);
				 ctx.fillRect(x,y,100,100);

				requestAnimationFrame(animate);
			 }
animate();

//event handler
function handleKeyDown(e){
	if(e.key == "s"){
		y = y + vy;
	}else if(e.key == "w"){
		y = y - vy;
	}else if(e.key == "d"){
		x = x + vx;
	}else if(e.key == "a"){
		x = x - vx;
	}
}
//event listener
document.addEventListener('keydown',handleKeyDown);
