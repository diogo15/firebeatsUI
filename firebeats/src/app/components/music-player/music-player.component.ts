import { Component, OnInit } from '@angular/core';
import { AudioManagerService } from "../../services/audio-manager.service";
import { AudioStream } from "../../interfaces/audio-stream";


@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.sass']
})
export class MusicPlayerComponent implements OnInit {
  
  myState: AudioStream = {} as AudioStream;
  currentFile: any = {};

  constructor(private audioService:AudioManagerService) {
    this.audioService.getState().subscribe(state => {
      this.myState = state;
    });
  }  

  streamAudio(url:string) {
    this.audioService.playStream(url).subscribe(events => {});
  }

  stopAudio() {
    this.audioService.pause();
  }
  
  ngOnInit(): void {
    
  }

}
