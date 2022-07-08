	class Rock{
		radius = 15;
		speed = 2;
		exploded = false;
		
		constructor(x, y, z){
			this.position = new Position(x, y, z);
			this.speed = Math.random() * 2 + .2;
			this.radius = (Math.random() * 5 + 15);
			this.hitbox = new Hitbox(this.position, this.radius);
		}
		
		Update(){
			this.Draw();
			this.Move();
		}
		
		Move(){
			this.position.y += this.speed;
			this.hitbox = new Hitbox(this.position, this.radius);
		}
		
		Draw(){
			if(!this.exploded){
				ctx.drawImage(asteroid, (this.position.x - this.radius), (this.position.y - this.radius), (this.radius*2), (this.radius*2));
			}
		}
	}