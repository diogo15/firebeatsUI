import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConsumerService } from 'src/app/services/api-routes/consumer.service';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.sass']
})
export class SongFormComponent implements OnInit {

  @Input('songObject') songObject : any

  songFormPlaylist = this.fBuilder.group({
    songName : '',
    playlistId : null,
  })

  lists : any

  constructor(private fBuilder : FormBuilder, private consumer : ConsumerService) { }

  ngOnInit(): void {
    this.getParams()
    this.loadLists()
    this.consumer.RefreshRequired.subscribe(response => {this.loadLists()})
  }

  getParams() {
    if (this.songObject.id != null) {
      this.songFormPlaylist.controls['songName'].setValue(this.songObject.songName)
      this.songFormPlaylist.controls['playlistId'].setValue(this.songObject.playlistId)
    }
  }

  loadLists() {
    this.consumer.getPlaylistsByUser()
      .subscribe(response => {this.lists = response})
  }

  updateSong() {
    this.consumer.updateSongToList(this.songObject.id, this.songFormPlaylist.value)
    .subscribe(response => console.log(response))
  }
}
