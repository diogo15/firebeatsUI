import { Component, OnInit } from '@angular/core';
import { SongsDataService } from 'src/app/services/songs/songs-data.service';

@Component({
  selector: 'app-songs-display',
  templateUrl: './songs-display.component.html',
  styleUrls: ['./songs-display.component.sass']
})
export class SongsDisplayComponent implements OnInit {
  songs : any

  constructor(private songsJson : SongsDataService) { }

  ngOnInit() {
    this.songsJson.getSongs().subscribe(respose => {
      this.songs = respose
    })
  }
}
