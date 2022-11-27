import { Component, Input, OnInit } from '@angular/core';
import { ConsumerService } from 'src/app/services/api-routes/consumer.service';

@Component({
  selector: 'app-songs-from-playlist',
  templateUrl: './songs-from-playlist.component.html',
  styleUrls: ['./songs-from-playlist.component.sass']
})
export class SongsFromPlaylistComponent implements OnInit {

  @Input() list! : any
  @Input() activeList! : any

  songs : any

  constructor(private consumer : ConsumerService) { }

  ngOnInit(): void {
    console.log(this.list)
    console.log(this.activeList)
  }

  loadList() : void {
    if (this.activeList) {
      this.consumer.getPlaylist(this.list)
        .subscribe(response =>{
          this.songs = response
          console.log(this.songs)
        })
    } else console.log("Oi!")
  }
}
