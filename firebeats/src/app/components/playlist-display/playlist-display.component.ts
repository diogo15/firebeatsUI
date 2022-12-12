import { Component, OnInit } from '@angular/core';
import { ConsumerService } from 'src/app/services/api-routes/consumer.service';

@Component({
  selector: 'app-playlist-display',
  templateUrl: './playlist-display.component.html',
  styleUrls: ['./playlist-display.component.sass']
})

export class PlaylistDisplayComponent implements OnInit {

  lists : any
  list : any
  activeTab : string = 'Lists'
  activeList : boolean = false

  constructor(private consumer : ConsumerService) {}
  
  ngOnInit() {
    this.loadLists()
    this.consumer.RefreshRequired.subscribe(response => {
      this.loadLists()
    })
  }

  loadLists() {
    this.consumer.getPlaylistsByUser()
      .subscribe(respose => {
        this.lists = respose
      })
  }

  onListSongs(listId : any) {
    if (this.activeList) {
      this.activeList = false
    } 
    else {
      this.activeList = true
      this.list = listId
    }
  }
}
