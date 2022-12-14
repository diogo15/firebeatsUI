import { Component, Input, OnInit } from '@angular/core';
import { AudioManagerService } from "../../services/audio-manager.service";
import { AudioStream } from "../../interfaces/audio-stream";
import { PLAYER } from 'src/app/constants';


@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.sass']
})
export class MusicPlayerComponent implements OnInit {

  @Input('songPath') path : string = ''

  state: AudioStream = {} as AudioStream;
  currentFile: any = {};

  constructor(public audioService:AudioManagerService) { }

  ngOnInit() {
    this.songState()
  }

  songState() {
    this.audioService.getState().subscribe(state => {
      this.state = state
    })
  }

  streamAudio(url:string) {
    if(this.state.currentTime <= 0){
      this.audioService.playStream(PLAYER + url).subscribe(events => {});
    }else{
      this.audioService.play();
    }
  }
  
  stopAudio() {
    this.audioService.stop()
  }

  pauseAudio() {
    this.audioService.pause()
  }

  setVolume(event : any) {
    this.audioService.changeVolume(event.value)
  }
}
