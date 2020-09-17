var landimg=new Image();
landimg.src="./img/land.png";
class Land{
	constructor() {
	    this.img=landimg;
		this.ix=0
		this.iy=0
		this.iw=336
		this.ih=112
		this.cx=0
		this.cx2=600
		this.cy=600-112
		this.cw=800
		this.ch=112
	}
	show(){
		this.ctx.drawImage(this.img,this.ix,this.iy,this.iw,this.ih,this.cx,this.cy,this.cw,this.ch);
		this.ctx.drawImage(this.img,this.ix,this.iy,this.iw,this.ih,this.cx2,this.cy,this.cw,this.ch);
	}
	move(){
		this.cx-=1
		this.cx2-=1
		if(this.cx2==0){
			this.cx=0
			this.cx2=600
		}
	}
}