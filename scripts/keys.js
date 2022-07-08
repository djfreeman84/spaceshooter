	class Keys{
		constructor(){
		
		}
	
		up = false;
		down = false;
		left = false;
		right = false;
		space = false;
		
		ClearKeys(){
			this.up = false;
			this.down = false;
			this.left = false;
			this.right = false;
			this.space = false;
		}
	}

	document.addEventListener('keydown', function(e) {
		if(e.keyCode == 32){
			keys.space = true;
		}
		
		if(e.keyCode == 38){//Up
			keys.up = true;
		}
		
		if(e.keyCode == 40){//Down
			keys.down = true;
		}
		
		if(e.keyCode == 37){//Left
			keys.left = true;
		}
		
		if(e.keyCode == 39){//Right
			keys.right = true;
		}
		
	}, false);
	
	document.addEventListener('keyup', function(e) {
	
		if(e.keyCode == 32){
			keys.space = false;
		}
		
		if(e.keyCode == 38){//Up
			keys.up = false;
		}
		
		if(e.keyCode == 40){//Down
			keys.down = false;
		}
		
		if(e.keyCode == 37){//Left
			keys.left = false;
		}
		
		if(e.keyCode == 39){//Right
			keys.right = false;
		}
		
	}, false);
	
	keys = new Keys();