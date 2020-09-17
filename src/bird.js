var birdimg=new Image();
birdimg.src="./img/bird.png";
class Bird {
	constructor() {
		this.img=birdimg
		this.imgx = 0
		this.imgy = 0
		this.width = 52 
		this.height = 45
		this.canvasx = 180
		this.canvasy = 200
		this.flytimer = null
		this.speed = 0
		this.a = 1.2 
    }
	show() {
		this.ctx.drawImage(this.img, this.imgx, this.imgy, this.width, this.height, this.canvasx, this.canvasy, this.width /1.3, this.height / 1.3)
		
	}
	fly() {
		this.imgx += this.width
		if (this.imgx >= this.width * 3) {
			this.imgx = 0
		}
	}
	drop() {
		this.speed += this.a
		this.canvasy = this.canvasy + this.speed
		if (this.canvasy <= -10) {
			this.canvasy = -10;																		
		}
	}
	jump() {
		this.speed = -13
	}
}