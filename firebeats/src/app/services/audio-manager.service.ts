import { Injectable } from '@angular/core';
import { takeUntil } from "rxjs/operators";
import { Observable, BehaviorSubject, Subject } from "rxjs";
import { AudioStream } from '../interfaces/audio-stream';



@Injectable({
  providedIn: 'root'
})
export class AudioManagerService {

  private stop$ = new Subject();
  private audioObj = new Audio();
  audioEvents = [ "ended", "error", "play", "playing", "pause", "timeupdate", "canplay", "loadstart"];
  private state: AudioStream = {
    playing: false,
    readableCurrentTime: '',
    readableDuration: '',
    duration: 0,
    currentTime: 0,
    canplay: false,
    error: false,
  };

  private stateChange: BehaviorSubject<AudioStream> = new BehaviorSubject( this.state );
  
  constructor() { }

  public getState():Observable<AudioStream> {
    return this.stateChange.asObservable();
  }

  private streamMusic(url:string) {
    return new Observable(observer => {
      // Play audio
      this.audioObj.src = url;
      this.audioObj.load();
      this.audioObj.play();
  
      const handler = (event: Event) => {
        this.updateStateEvents(event);
        observer.next(event);
      };
  
      this.addEvents(this.audioObj, this.audioEvents, handler);
      return () => {
        // Stop Playing
        this.audioObj.pause();
        this.audioObj.currentTime = 0;
        // remove event listeners
        this.removeEvents(this.audioObj, this.audioEvents, handler);
        // reset state
        this.resetState();
      };
    });
  }

  private addEvents(obj:HTMLAudioElement, events:string[], handler:(event: Event) => void) {
    events.forEach(event => {
      obj.addEventListener(event, handler);
    });
  }

  private removeEvents(obj: HTMLAudioElement, events: any[], handler: (event: Event) => void) {
    events.forEach(event => {
      obj.removeEventListener(event, handler);
    });
  }

  playStream(url:string) {
    return this.streamMusic(url).pipe(takeUntil(this.stop$));
  }

  play() {
    this.audioObj.play();
  }

  pause() {
    this.audioObj.pause();
  }

  stop() {
    this.stop$.next("stop");
  }

  seekTo(seconds:number) {
    this.audioObj.currentTime = seconds;
  }

  changeVolume(value: any) {
    this.audioObj.volume = value
  }

  formatTime(time: number, format: string = "HH:mm:ss") {
    const momentTime = time * 1000;
    return momentTime;
  }

  private updateStateEvents(event: Event): void {
    switch (event.type) {
      case "canplay":
        this.state.duration = this.audioObj.duration;
        this.state.readableDuration = this.formatTime(this.state.duration).toString();
        this.state.canplay = true;
        break;
      case "playing":
        this.state.playing = true;
        break;
      case "pause":
        this.state.playing = false;
        break;
      case "timeupdate":
        this.state.currentTime = this.audioObj.currentTime;
        this.state.readableCurrentTime = this.formatTime(this.state.currentTime).toString();
        break;
      case "error":
        this.resetState();
        this.state.error = true;
        break;
    }
    this.stateChange.next(this.state);
  }

  private resetState() {
    this.state = {
      playing: false,
      readableCurrentTime: '',
      readableDuration: '',
      duration: 0,
      currentTime: 0,
      canplay: false,
      error: false
    };
  }

}
