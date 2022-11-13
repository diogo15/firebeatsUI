export interface ILine {
    x: number;
    y: number;
    long: number;
}
  
export class Line implements ILine{
    x: number = 0;
    y: number = 0;
    long: number = 0;
  
    constructor(private ctx: CanvasRenderingContext2D) {
      this.spawn();
    }
  
    spawn() {
      this.long = 100;
      this.x = 0;
      this.y = 0;
    }

    draw() {
        this.ctx.fillRect(this.x, this.y, this.long, 20);
    }

    move(p: ILine) {
        this.x = p.x;
        this.y = p.y;
    }

}