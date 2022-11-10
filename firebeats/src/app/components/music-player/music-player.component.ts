import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.sass']
})
export class MusicPlayerComponent implements OnInit {
  
  isPlaying : boolean = false;

  constructor() {
  }
  
  ngOnInit(): void {
  }

}
