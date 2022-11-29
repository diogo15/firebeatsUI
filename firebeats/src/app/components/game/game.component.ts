import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { KEY } from '../../constants';
import { Line, ILine } from './line.component';
import { HttpClient } from "@angular/common/http";
import { AudioManagerService } from "../../services/audio-manager.service";
import { AudioStream } from "../../interfaces/audio-stream";


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {

  @ViewChild('canvas',{static:true}) canvas : ElementRef = {} as ElementRef;
  context2D: CanvasRenderingContext2D = {} as CanvasRenderingContext2D;
  canvasEl: HTMLCanvasElement = {} as HTMLCanvasElement;
  bigWave: Line = {} as Line;
  smallWave: Line = {} as Line;
  soundwave:any = [];
  animating: boolean = false;
  time = {begin:0,start:0,start2:0,start3:0,elapsed:0,elapsed2:0,elapsed3:0} as any;
  requestId: number = 0;
  state: AudioStream = {} as AudioStream;
  
  constructor(private httpClient: HttpClient, public audioService:AudioManagerService) {
    
  }
  
  ngOnInit(): void { 
    
  }
  
  ngAfterViewInit() {    
    this.canvasEl = this.canvas.nativeElement;
    this.context2D = this.canvas.nativeElement.getContext("2d");
    this.audioService.getState().subscribe(state => {

      if((!!state.playing && this.animating == false)){
        this.loadSong();
        this.animating = true;
      }
      
      if((!!this.state.playing == false && this.animating == true)){
        this.stop();
        this.animating = false;
      }
      this.state = state;
    });

      
  }

  loadSong() {
    this.httpClient.get("/assets/song.json").subscribe(data =>{
      this.soundwave = data;
      this.initGame();
    });
  }
  
  initGame(){
    //console.log(this.soundwave[0][1]);
    this.context2D.canvas.width = 1000;
    this.context2D.canvas.height = 300;
    this.context2D.fillStyle = "#FFFFFF";

    this.play();
  }

  play() {
    this.bigWave = new Line(this.context2D);
    this.bigWave.y = this.context2D.canvas.height/2;
    this.smallWave = new Line(this.context2D);
    this.smallWave.y = this.context2D.canvas.height/2;
    this.animate();
  }

  animate() {    
    let now = Date.now();
    
    if (this.time.begin == 0){
      this.time.begin = now;
    }

    let currentTime = Math.round(this.state.currentTime);
    
    this.time.elapsed = now - this.time.start;
    this.time.elapsed2 = now - this.time.start2;
    this.time.elapsed3 = now - this.time.start3;

    if(currentTime >= this.state.duration){
      this.stop();
    }

    if(this.time.elapsed2 > 2500){
      this.bigWave.max = this.soundwave[currentTime][0]*1.5;
      this.bigWave.long = 0;
      this.bigWave.opacity = 1;
      this.bigWave.seconds = 2.5;
      
      this.time.start2 = now;
    }

    if(this.time.elapsed3 > 1000){
      this.smallWave.max = ((this.soundwave[currentTime][1])*-1)/1.2;
      this.smallWave.long = 0;
      this.smallWave.opacity = 1;
      this.smallWave.seconds = 1;

      this.time.start3 = now;
    } 

    if (this.time.elapsed > 33) {
      this.draw();
      this.context2D.fillText("Second: "+currentTime,10,10);
      this.time.start = now;      
    }

    this.requestId = requestAnimationFrame(this.animate.bind(this));
  }
  

  draw() {
    this.context2D.clearRect(0, 0, this.context2D.canvas.width, this.context2D.canvas.height);
    this.bigWave.draw();
    this.smallWave.draw();
  }
  
  stop() {
      if (this.requestId) {
        window.cancelAnimationFrame(this.requestId);
      }
  }
  

}
