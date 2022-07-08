class EnemyBullet{
	radius = 3;
	speed = -10;
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
	
	Move(){
		if(!this.exploded){
			this.position.y -= this.speed;
			this.hitbox = new Hitbox(this.position, this.radius);
		}
	}
	
	Draw(){
		if(!this.exploded){
			ctx.drawImage(enemybolt, (this.position.x - this.radius), (this.position.y - this.radius), (this.radius*2), (this.radius*2));
		}

	}
	
	DetectCollision(){
		if(!this.exploded){
			
			if(!hero.exploded){
				if(
					(hero.hitbox.left <= this.hitbox.right && hero.hitbox.right >= this.hitbox.left) && 
					(hero.hitbox.bottom >= this.hitbox.top && hero.hitbox.top <= this.hitbox.bottom)
				){
					hero.Explode();
					return true;
				}
			
			}
		}
		
		return false;
	}
}