import { Component, OnInit } from '@angular/core';
import { PlaylistDataService } from 'src/app/services/playlist/playlist-data.service';

@Component({
  selector: 'app-playlist-display',
  templateUrl: './playlist-display.component.html',
  styleUrls: ['./playlist-display.component.sass']
})
export class PlaylistDisplayComponent implements OnInit {
  lists : any

  constructor(private playlists : PlaylistDataService) {}
  
  ngOnInit() {
    this.playlists.getPlaylists().subscribe(respose => {
      this.lists = respose
    })
  }
}
