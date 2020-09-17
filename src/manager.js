class manager{
	constructor(selector) {
	    Object.prototype.canvas=document.querySelector(selector);
		Object.prototype.ctx=document.querySelector(selector).getContext("2d");
		this.grade=15
		this.timer = null
		this.timerPipes = null
		this.timerfly = null
		this.rank = 0
		this.Sky = new Sky()
		this.Land = new Land()
		this.Pipes = new Pipes()
		this.Bird = new Bird()
		this.flag = false;
	}
	play(){
		this.timershow = setInterval(() => {
		    this.ctx.clearRect(0, 0, 800, 600)
			this.Sky.show()
			this.Land.show()
			this.Pipes.show()
			this.Bird.show()
			this.ctx.fillText(`${this.rank}`, 760, 10)
			this.isGameOverListener()
		}, 20)
		this.timerBirddrop = setInterval(() => {
    		this.Bird.drop()
	    }, this.grade)
		this.timerSkymove = setInterval(() => {	
			this.Sky.move()	
		}, 50)
		this.timerLandmove = setInterval(() => {
			this.Land.move()
		}, 10)
		this.timerPipesmove = setInterval(() => {
			this.Pipes.move()
		}, 10)
		this.timerPipes = setInterval(() => {
			this.Pipes.randomPosition()
		}, 2000)
		this.timerfly = setInterval(() => {
			this.Bird.fly()
		}, 100)
	}
	stop() {
		clearInterval(this.timershow)
		clearInterval(this.timerBirddrop)
		clearInterval(this.timerSkymove)
		clearInterval(this.timerLandmove)
		clearInterval(this.timerPipesmove)
		clearInterval(this.timerPipes)
		clearInterval(this.timerfly)
	}
	isBoom(){
		var canvasx=this.Bird.canvasx
		var canvasy=this.Bird.canvasy
		var canvaswh=this.Bird.canvaswh
		var height=this.Bird.height
		var width=this.Bird.width
		let arr=this.Pipes.pipePositions
		for(let i=0;i<arr.length;i++){
			let birdBorderRight=canvasx+width/1.3;
			let birdBorderBottom=canvasy+height/1.3;
			let left=arr[i].top.canvasx;
			let right=arr[i].top.canvasx+52+width/1.3;
			let topY=arr[i].top.canvasy+arr[i].top.canvaswh	+height/1.3;				
			let bottomY=arr[i].bottom.canvasy;
			let topBool=birdBorderRight>=left&&birdBorderRight<=right&&birdBorderBottom<=topY;
			let bottomBool=birdBorderRight>=left&&birdBorderRight<right&&birdBorderBottom>=bottomY;
			console.log(topBool,bottomBool)
			if(topBool||bottomBool){
				this.flag=true;
				console.log("bool----", this.flag)
			}						
		}
		if((canvasy+height/1.3)>=this.Land.cy){
			this.flag=true;						
		}		
	}
	isGameOverListener() {
		this.isBoom();
		for (let i = 0; i < this.Pipes.pipePositions.length; i++) {
			let el = this.Pipes.pipePositions[i]
			if (this.Bird.canvasx < (el.top.canvasx + el.top.imgw)) {
				this.rank = i
				break;
			}
		}
		if (this.flag) {
			this.stop()
			this.ctx.font = 'bold 144px consolas';
			this.ctx.font = 'bold 24px arial';
			this.ctx.fillStyle = 'red';
			this.ctx.fillText(`Gameover! ${this.rank} 分`, 300, 200)
		}
	}
	
}