	class Position{
		
		constructor(x, y, z){
			this.x = x;
			this.y = y;
			this.z = z;
		}
	}
	
	class Hitbox{
		constructor(position, radius){
			this.left = position.x - radius;
			this.right = position.x + radius;
			this.top = position.y - radius;
			this.bottom = position.y + radius;
		}
	}