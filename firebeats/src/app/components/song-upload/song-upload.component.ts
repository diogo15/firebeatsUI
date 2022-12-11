import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConsumerService } from 'src/app/services/api-routes/consumer.service';

@Component({
  selector: 'app-song-upload',
  templateUrl: './song-upload.component.html',
  styleUrls: ['./song-upload.component.sass']
})

export class SongUploadComponent implements OnInit {

  formData : any = new FormData()

  songForm = this.fb.group({
    songname: '',
    songPath: '',
    isFavorite: false,
    playlistId: null,
    genreId: null,
    albumId: null
  })

  albums: Object | any;
  genres: Object | any;

  constructor(
    public fb: FormBuilder, private consumer : ConsumerService) { }

  ngOnInit() {
    this.loadAlbums()
    this.loadGenres()
   }

  loadGenres() {
    this.consumer.getGenres()
      .subscribe(response => this.genres = response)
  }

  loadAlbums() {
    this.consumer.getAlbums()
      .subscribe(response => this.albums = response)
  }

  uploadFile(event : any) {
    const file = event.target.files[0]
    this.songForm.patchValue({
      songPath: file,
    });

    var song = this.songForm.get('songPath')
    this.formData.append('file', song ? song.value : "")
    
    this.consumer.uploadSongFile(this.formData)
      .subscribe(response => {
        console.log(response)
        this.songForm.patchValue({
          songPath : response
        })
      })
  }

  submitForm() {
    if (this.songForm.valid) { 
      console.log(this.songForm.value)
      this.consumer.submitSong(this.songForm.value).subscribe(response => {})
    } else {
      console.log("Form Invalid!")
    }
  }
}
