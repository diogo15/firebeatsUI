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

  constructor(private fBuilder : FormBuilder, private consumer : ConsumerService) {
    this.consumer.getPlaylists().subscribe(response => {this.lists = response})
  }

  ngOnInit(): void {
    if (this.songObject.id != null) {
      this.songFormPlaylist.controls['songName'].setValue(this.songObject.songName)
      this.songFormPlaylist.controls['playlistId'].setValue(this.songObject.playlistId)
    }
  }

  updateSong() {
    this.consumer.updateSongToList(this.songObject.id, this.songFormPlaylist.value)
    .subscribe(response => console.log(response))
  }
}
