//var skyimg=new Image();
//skyimg.src="./src/sky.png";
class Sky {
	constructor() {
		this.imgx = 0
		this.imgy = 0
		this.width = 800 //  156/3
		this.height = 600
		this.cx = 0
		this.cx2 = 600
		this.cy = 0
		this.movetimer = null				
		this.img = new Image()
		this.img.src = "./img/sky.png"
		this.img2 = new Image()
		this.img2.src = "./img/sky.png"
		this.img.onload = () => {
		    this.show()
		}
	}
	show() {
		this.ctx.drawImage(this.img, this.imgx, this.imgy, this.width, this.height, this.cx, this.cy, this.width,
			this.height)
		this.ctx.drawImage(this.img2, this.imgx, this.imgy, this.width, this.height, this.cx2, this.cy, this.width,
			this.height)
	}
	move() {
		this.cx -= 1
		this.cx2 -= 1
		if (this.cx2 == 0) {
			this.cx = 0
			this.cx2 = 600
		}
	}

}