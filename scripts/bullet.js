class Bullet{
		radius = 3;
		speed = 10;
		exploded = false;
		
		constructor(x, y, z){
			this.position = new Position(x, y, z);
			this.hitbox = new Hitbox(this.position, this.radius);
			fire.play();
		}
		
		Update(){
			if(this.DetectCollision()){
				this.exploded = true;
			}
			
			this.Move();
			
			this.Draw();
		}
		
		Move(){
			if(!this.exploded){
				this.position.y -= this.speed;
				this.hitbox = new Hitbox(this.position, this.radius);
			}
		}
		
		Draw(){
			if(!this.exploded){
				ctx.drawImage(bolt, (this.position.x - this.radius), (this.position.y - this.radius), (this.radius*2), (this.radius*2));
			}
		}
		
		DetectCollision(){
			if(!this.exploded){
				var r = 0;
				while(r < rocks.length){
					if(!rocks[r].exploded){
						if(
							(rocks[r].hitbox.left <= this.hitbox.right && rocks[r].hitbox.right >= this.hitbox.left) && 
							(rocks[r].hitbox.bottom >= this.hitbox.top && rocks[r].hitbox.top <= this.hitbox.bottom)
						){
							rocks[r].exploded = true;
							score += 5;
							return true;
						}
					
					}
					r++;
				}
			}
			
			return false;
		}
	}