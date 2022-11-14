import { Component, OnInit } from '@angular/core';
import { AudioManagerService } from "../../services/audio-manager.service";
import { AudioStream } from "../../interfaces/audio-stream";


@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.sass']
})
export class MusicPlayerComponent implements OnInit {
  
  state: AudioStream = {} as AudioStream;
  currentFile: any = {};

  constructor(public audioService:AudioManagerService) {
    this.audioService.getState().subscribe(state => {
      this.state = state;
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
