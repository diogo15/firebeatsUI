import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { KEY } from '../../constants';
import { Line, ILine } from './line.component';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {

  @ViewChild('canvas',{static:true}) canvas : ElementRef = {} as ElementRef;
  context2D: CanvasRenderingContext2D = {} as CanvasRenderingContext2D;
  canvasEl: HTMLCanvasElement = {} as HTMLCanvasElement;
  player: Line = {} as Line;
  waves: Line[] = [];
  soundwave:any = [];
  moves = {
    [KEY.LEFT]: (p: ILine): ILine => ({ ...p, x: p.x - 10 }),
    [KEY.RIGHT]: (p: ILine): ILine => ({ ...p, x: p.x + 10 }),
    [KEY.DOWN]: (p: ILine): ILine => ({ ...p, y: p.y + 10 }),
    [KEY.UP]: (p: ILine): ILine => ({ ...p, y: p.y - 10 })
  };
  time = {start:0,elapsed:0} as any;
  requestId: number = 0;
  
  constructor(private httpClient: HttpClient) { }
  
  ngOnInit(): void { 
    
  }
  
  ngAfterViewInit() {    
    this.canvasEl = this.canvas.nativeElement;
    this.context2D = this.canvas.nativeElement.getContext("2d");

    this.loadSong();

  }

  loadSong() {
    this.httpClient.get("/assets/song.json").subscribe(data =>{
      this.soundwave = data;
      this.initGame();
    });
  }
  
  initGame(){
    //console.log(this.soundwave[0][1]);
    this.context2D.canvas.width = 800;
    this.context2D.canvas.height = 400;
    this.context2D.fillStyle = "#FFFFFF";    

    this.createWaves();

    //this.context2D.fillRect(0, 0, 100, 10);
    this.play();
  }

  createWaves() {
    this.soundwave.forEach((wave: any, index:number) => {
      let newline = new Line(this.context2D);
      newline.long = wave[0];
      newline.y = index * 25;
      this.waves.push(newline);
    });
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (this.moves[event.keyCode]) {
      event.preventDefault();
      
      let p = this.moves[event.keyCode](this.player);
      this.player.move(p);
      
    }
  }

  play() {
    this.player = new Line(this.context2D);
    this.player.x = 370;
    this.animate();
  }

  animate() {
    let now = Date.now();
    this.time.elapsed = now - this.time.start;
    //cada 50 milesimas de segundo, osea 20fps;
    if (this.time.elapsed > 50) {
      this.draw();
      this.drawWaves();
      this.time.start = now;
    }
    this.requestId = requestAnimationFrame(this.animate.bind(this));
  }
  
  drawWaves(){
    this.waves.forEach((wave: any) => {
      wave.draw();
      wave.y = wave.y-5;
    });
  }

  draw() {
    this.context2D.clearRect(0, 0, this.context2D.canvas.width, this.context2D.canvas.height);
    this.player.draw();
  }
  

  

}
