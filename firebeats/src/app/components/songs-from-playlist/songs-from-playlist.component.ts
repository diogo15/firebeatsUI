import { Component, Input, OnInit } from '@angular/core';
import { ConsumerService } from 'src/app/services/api-routes/consumer.service';

@Component({
  selector: 'app-songs-from-playlist',
  templateUrl: './songs-from-playlist.component.html',
  styleUrls: ['./songs-from-playlist.component.sass']
})
export class SongsFromPlaylistComponent implements OnInit {

  @Input() listParam : any
  @Input() active : boolean = false

  listName : any
  songObject : any

  constructor(private consumer : ConsumerService) { }

  ngOnInit(): void {
    if(this.active) {
      this.loadList()
      this.consumer.RefreshRequired.subscribe(response => {
        this.loadList()
      })
    } 
  }

  loadList() {
    this.consumer.getPlaylist(this.listParam)
      .subscribe(response => {
        this.songObject = response.songs
        this.listName = response.playlistName
      })
  }
}
