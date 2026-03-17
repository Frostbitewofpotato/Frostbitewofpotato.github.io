
			const canvas = document.getElementById("canvas");
			const ctx = canvas.getContext("2d");
			 let x = 440;
			let y = 79;
			let vx = 3;
			let vy = 3;
			let a = 255;
			let b = 0;
			let c = 0;

			ctx.fillStyle = "red";
			 function animate(){
				 ctx.clearRect(0,0,800,800);
				 ctx.fillStyle = `rgb(${a},${b},${c})`;
				 ctx.fillRect(x,y,100,100);
				 x += vx;
				 y += vy;
				 if (x > canvas.width || x < 0){
					vx = -vx;
					 a = Math.random() * (255 - 0) + 0;
					 b = Math.random() * (255 - 0) + 0;
					 c = Math.random() * (255 - 0) + 0;
					
				 }
				 if (y > canvas.height || y < 0) {
					 vy = -vy;
					 a = Math.random() * (255 - 0) + 0;
					 b = Math.random() * (255 - 0) + 0;
					 c = Math.random() * (255 - 0) + 0;
					 
				 }
				requestAnimationFrame(animate);
			 }
animate();
