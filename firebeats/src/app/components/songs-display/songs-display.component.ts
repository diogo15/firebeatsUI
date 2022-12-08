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


  constructor(private request : ConsumerService) {
    this.request.getSongs().subscribe(respose => {
      this.songs = respose
    })
  }

  ngOnInit() {
    
  }

  sendSong(songObject : any) {
    if (this.openForm) this.openForm = false
    else {
      this.openForm = true
      this.songObject = songObject
    }
  }
}
