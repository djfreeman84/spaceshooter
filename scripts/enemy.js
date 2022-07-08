	class Enemy{
		radius = 15;
		speed = 1;
		exploded = false;
		explodeFrame = 0;
		movingRight = true;
		firecounter = 5;
		
		constructor(x, y, z){
			this.position = new Position(x, y, z);
			this.radius = (Math.random() * 5 + 15);
			this.hitbox = new Hitbox(this.position, this.radius);
			this.movingRight = Math.random() > .5 ? true:false;
			this.firecounter = (Math.random() * 3 + 5);
			//console.log("Enemy Generated");
		}
		
		Update(){
			this.Draw();
			this.Move();
			this.Fire();
		
			if(this.exploded){
				this.explodeFrame += .05;
			}
		}
		
		Fire(){
			if(!this.exploded){
				this.firecounter -= .1;
				if(this.firecounter <= 0){
					bullets.push(new EnemyBullet(this.position.x, this.position.y, this.position.z));
					this.firecounter = (Math.random() * 15 + 15);
				}
			}
		}
		
		Move(){
			this.position.y += this.speed;
			if(this.movingRight){
				if(this.position.x >= size){
					this.movingRight = false;
				}
				
				this.position.x += this.speed;
				
			}else{
				if(this.position.x <= 0){
					this.movingRight = true;
				}
				
				this.position.x -= this.speed;
			}
			
			this.hitbox = new Hitbox(this.position, this.radius);
		}
		
		Draw(){
			var x = this.position.x - this.radius;
			var y = this.position.y - this.radius;
			var width = this.radius*2;
			
			if(!this.exploded){
				ctx.drawImage(enemyship, (this.position.x - this.radius), (this.position.y - this.radius), (this.radius*2), (this.radius*2));
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
	}