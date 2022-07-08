	class UserInterface{
		constructor(){
			
		}
		
		Update(){
			if(!gameOver){
				ctx.font = "30px Arial";
				ctx.fillStyle = "#ffffff";
				ctx.fillText("Lives: "+hero.lives, 10, 50);
				ctx.fillText(score, 10, 470);
			}else{
				ctx.clearRect(0, 0, size, size);
				ctx.fillStyle = "#000066";
				ctx.fillRect(0, 0, size, size);
				ctx.font = "30px Arial";
				ctx.fillStyle = "#ffffff";
				ctx.fillText("GAME OVER", 160, 200);
				ctx.fillText(score, 10, 470);
				ctx.font = "17.5px Arial";
				ctx.fillText("Hit Space to Play/Fire, Arrows to Move", 100, 250);
			}
		}
		
		
	}