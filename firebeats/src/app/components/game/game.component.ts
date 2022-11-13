import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LEFT,RIGHT,UP,DOWN } from '../../constants';
import { Line } from './line.component';

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

  play() {
    this.line = new Line(this.context2D);
    this.line.draw();
  }
  

  

}
