import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { KEY } from '../../constants';
import { Line, ILine } from './line.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {

  @ViewChild('canvas',{static:true}) canvas : ElementRef = {} as ElementRef;
  context2D: CanvasRenderingContext2D = {} as CanvasRenderingContext2D;
  canvasEl: HTMLCanvasElement = {} as HTMLCanvasElement;
  line: Line = {} as Line;
  moves = {
    [KEY.LEFT]: (p: ILine): ILine => ({ ...p, x: p.x - 10 }),
    [KEY.RIGHT]: (p: ILine): ILine => ({ ...p, x: p.x + 10 }),
    [KEY.DOWN]: (p: ILine): ILine => ({ ...p, y: p.y + 10 }),
    [KEY.UP]: (p: ILine): ILine => ({ ...p, y: p.y - 10 })
  };
  time = {start:0,elapsed:0} as any;
  requestId: number = 0;
  
  constructor() { }
  
  ngOnInit(): void { }
  
  ngAfterViewInit() {
    this.canvasEl = this.canvas.nativeElement;
    this.context2D = this.canvas.nativeElement.getContext("2d");

    this.initGame();
  }

  initGame(){
    this.context2D.canvas.width = 800;
    this.context2D.canvas.height = 400;
    this.context2D.fillStyle = "#FFFFFF";

    //this.context2D.fillRect(0, 0, 100, 10);
    this.play();
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (this.moves[event.keyCode]) {
      event.preventDefault();
      
      let p = this.moves[event.keyCode](this.line);
      this.line.move(p);
      
    }
  }

  play() {
    this.line = new Line(this.context2D);
    this.animate();
  }

  animate(now = 0) {
    this.time.elapsed = now - this.time.start;
    this.draw();
    this.requestId = requestAnimationFrame(this.animate.bind(this));
  }

  draw() {
    this.context2D.clearRect(0, 0, this.context2D.canvas.width, this.context2D.canvas.height);
    this.line.draw();
  }
  

  

}
