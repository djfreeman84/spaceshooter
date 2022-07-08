	class Hero{
		radius = 15;
		speed = 2;
		firing = false;
		exploded = false;
		lives = 3;
		explodeFrame = 0;
	
		constructor(x, y, z){
			this.position = new Position(x, y, z);
			this.hitbox = new Hitbox(this.position, this.radius);
		}
		
		Update(){
			this.AcceptInput();
			hero.hitbox = new Hitbox(hero.position, hero.radius);
			if(hero.DetectCollision()){
				this.Explode();
			}
			if(this.exploded){
				this.explodeFrame += .05;
			}
			
			this.Draw();
		}
		
		Revive(){
			if(!hero.DetectCollision()){
				this.exploded = false;
				this.explodeFrame = 0;
			}
		}
		
		AcceptInput(){

			if(!this.exploded){

				if(keys.up){
					if(hero.position.y > 0){
						hero.position.y -= hero.speed;
					}
				}

				if(keys.down){
					if(hero.position.y < size){
						hero.position.y += hero.speed;
					}
				}
				
				if(keys.left){
					if(hero.position.x > 0){
						hero.position.x -= hero.speed;
					}
				}
				
				if(keys.right){
					if(hero.position.x < size){
						hero.position.x += hero.speed;
					}
				}

			}
			
			if(keys.space){
				if(this.exploded && !this.firing){
					this.Revive();
				}else{
					hero.Fire();
				}
			}else{
				hero.UnFire();
			}
		}
		
		Explode(){
			if(!this.exploded){
				crash.play();
				this.lives -= 1;
				this.exploded = true;
				this.firing = true;
				if(this.lives === 0){
					gameOver = true;
				}
			}
			
		}
		
		Fire(){
			//console.log("Fire");
			if(!this.firing && score > 0){
				this.firing = true;
				bullets.push(new Bullet(this.position.x, this.position.y - 5, this.position.z));
				score -= 1;
			}
		}
		
		UnFire(){
			this.firing = false;
		}
		
		Draw(){
			var x = this.position.x - this.radius;
			var y = this.position.y - this.radius;
			var width = this.radius*2;
			
			if(!this.exploded){
			//console.log("Drawing");
				ctx.drawImage(ship, x, y, width, width);
			/*
				ctx.beginPath();
				ctx.arc(this.position.x,this.position.y,this.radius,0,2*Math.PI);
				ctx.stroke();
			*/	
			}else{
				if(this.explodeFrame < 1){
					ctx.drawImage(explosion1, x, y, width, width);
				}else if(this.explodeFrame < 2){
					ctx.drawImage(explosion2, x, y, width, width);
				}else if(this.explodeFrame < 3){
					ctx.drawImage(explosion3, x, y, width, width);
				}else if(this.explodeFrame < 4){
					ctx.drawImage(explosion4, x, y, width, width);
				}
			}
		}
		
		DetectCollision(){
			var r = 0;
			while(r < rocks.length){
				if(!rocks[r].exploded){
					if(
						(rocks[r].hitbox.left <= this.hitbox.right && rocks[r].hitbox.right >= this.hitbox.left) && 
						(rocks[r].hitbox.bottom >= this.hitbox.top && rocks[r].hitbox.top <= this.hitbox.bottom)
					){
						return true;
					}
				
				}
				r++;
			}
			
			return false;
		}
	}