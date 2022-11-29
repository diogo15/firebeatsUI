import { Component, OnInit } from '@angular/core';
import { ConsumerService } from 'src/app/services/api-routes/consumer.service';


@Component({
  selector: 'app-songs-display',
  templateUrl: './songs-display.component.html',
  styleUrls: ['./songs-display.component.sass']
})
export class SongsDisplayComponent implements OnInit {
  songs : any

  constructor(private request : ConsumerService) { }

  ngOnInit() {
    this.request.getSongs().subscribe(respose => {
      this.songs = respose
    })
  }

  addToList(song : any) {
    this.request.addToYourPlaylists(song)
  }
}
