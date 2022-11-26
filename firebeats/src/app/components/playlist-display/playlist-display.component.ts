import { Component, OnInit } from '@angular/core';
import { ConsumerService } from 'src/app/services/api-routes/consumer.service';

@Component({
  selector: 'app-playlist-display',
  templateUrl: './playlist-display.component.html',
  styleUrls: ['./playlist-display.component.sass']
})
export class PlaylistDisplayComponent implements OnInit {

  lists : any
  activeTab : string = 'Lists'

  constructor(private playlists : ConsumerService) {}
  
  ngOnInit() {
    this.playlists.getPlaylists().subscribe(respose => {
      this.lists = respose
    })
  }

  onClickTab(tab : string) {
    this.activeTab = tab
  }
}
