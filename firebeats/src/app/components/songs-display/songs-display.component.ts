import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConsumerService } from 'src/app/services/api-routes/consumer.service';


@Component({
  selector: 'app-songs-display',
  templateUrl: './songs-display.component.html',
  styleUrls: ['./songs-display.component.sass']
})
export class SongsDisplayComponent implements OnInit {

  songs : any
  songObject : any
  openForm : boolean = false


  constructor(private consumer : ConsumerService) {}

  ngOnInit() {
    this.loadSongs()
    this.consumer.RefreshRequired.subscribe(response => {
      this.loadSongs()
    })
  }

  loadSongs () {
    this.consumer.getSongs().subscribe(respose => {
      this.songs = respose
    })
  }

  sendSong(songObject : any) {
    if (this.openForm) this.openForm = false
    else {
      this.openForm = true
      this.songObject = songObject
    }
  }
}
