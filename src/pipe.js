class Pipes {
	constructor() {
		this.speed = 0
		this.a = 0 				
		this.imgtop = new Image()
		this.imgtop.src = "./img/pipeUp.png"
		this.imgbottom = new Image()
		this.imgbottom.src = "./img/pipeDown.png"
		this.pipePositions = []
	}
	show() {
		this.pipePositions.forEach((el) => {
			this.ctx.drawImage(el.top.img, el.top.imgx, el.top.imgy, el.top.imgw, el.top.imgheight, el.top.canvasx, el.top.canvasy, el.top.canvasw, el.top.canvaswh)
			this.ctx.drawImage(el.bottom.img, el.bottom.imgx, el.bottom.imgy, el.bottom.imgw, el.bottom.imgheight, el.bottom
				.canvasx, el.bottom.canvasy, el.bottom.canvasw, el.bottom.canvaswh)
		})
	}
	random(min, max) {
		return Math.round(Math.random() * (max - min) + min)
	}
	randomPosition() {
		let minHeight = 60, 
			gap = 150, 
			maxHeight = 488 - gap - minHeight; 
		let h1 = this.random(minHeight, maxHeight) 
		let h2 = 488 - gap - h1 
		let top = {
			img: this.imgtop,
			imgx: 0,
			imgy: 0,
			imgw: 52,
			imgheight: 420,
			canvasx: 800,
			canvasy: 0,
			canvasw: 52,
			canvaswh: h1
		}
		let bottom = {
			img: this.imgbottom,
			imgx: 0,
			imgy: 0,
			imgw: 52,
			imgheight: 420,
			canvasx: 800,
			canvasy: 488 - h2,
			canvasw: 52,
			canvaswh: h2
		};
		this.pipePositions.push({
			top,
			bottom
		})
	}
	move() {
		this.pipePositions.forEach((el) => {
			el.top.canvasx -= 1;
			el.bottom.canvasx -= 1
	    })
	}
}