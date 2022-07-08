class ExtraLife{
	radius = 12;
	speed = -1.5;
	exploded = false;
	
	constructor(x, y, z){
		this.position = new Position(x, y, z);
		this.hitbox = new Hitbox(this.position, this.radius);
	}
	
	Update(){
		if(this.DetectCollision()){
			this.exploded = true;
		}
		
		this.Move();
		
		this.Draw();
	}
	
	DetectCollision(){
		if(!this.exploded){
				
			if(!hero.exploded){
				if(
					(hero.hitbox.left <= this.hitbox.right && hero.hitbox.right >= this.hitbox.left) && 
					(hero.hitbox.bottom >= this.hitbox.top && hero.hitbox.top <= this.hitbox.bottom)
				){
					hero.lives += 1;
					return true;
				}
			
			}
		}
		
		return false;
	}
	
	Move(){
		if(!this.exploded){
			this.position.y -= this.speed;
			this.hitbox = new Hitbox(this.position, this.radius);
			console.log(this.position.y);
		}
	}
	
	Draw(){
		//console.log("Drawing");
		if(!this.exploded){
			ctx.drawImage(extralife, (this.position.x - this.radius), (this.position.y - this.radius), (this.radius*2), (this.radius*2));
			
			/*
				ctx.beginPath();
				ctx.arc(this.position.x,this.position.y,this.radius,0,2*Math.PI);
				ctx.stroke();
			*/
		}
		//console.log("Drawn");
	}

}