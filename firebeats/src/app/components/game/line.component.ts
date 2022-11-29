export interface ILine {
    x: number;
    y: number;
    long: number;
    max:number;
}
  
export class Line implements ILine{
    x: number = 0;
    y: number = 0;
    long: number = 0;
    max: number = 0;
    opacity:number = 0;
    seconds:number = 0;
  
    constructor(private ctx: CanvasRenderingContext2D) {
      this.spawn();
    }
  
    spawn() {
      this.long = 1;
      this.x = 0;
      this.y = 0;
      this.opacity = 1;
      this.seconds = 1;
    }

    draw() {
      if(this.long < this.max){
        this.y = (this.ctx.canvas.height/2) - (this.long/2);
        this.long += (this.max/(this.seconds*30));
      }
      this.opacity -= (1/((this.seconds*30)));
      this.ctx.globalAlpha = this.opacity;
      this.ctx.fillRect(this.x, this.y, this.ctx.canvas.width, this.long);
    }

    move(p: ILine) {
        this.x = p.x;
        this.y = p.y;
    }

}