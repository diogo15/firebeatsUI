import { Component, OnInit } from '@angular/core';
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
  })

  constructor(
    public fb: FormBuilder, 
    private songService : ConsumerService) { }

  ngOnInit(): void { }

  uploadFile(event : any) {
    const file = event.target.files[0]
    this.songForm.patchValue({
      songPath: file,
    });

    var song = this.songForm.get('songPath')
    this.formData.append('file', song ? song.value : "")
    
    this.songService.uploadSongFile(this.formData)
      .subscribe(response => {
        console.log(response)
        this.songForm.patchValue({
          songPath : response
        })
      })
  }

  submitForm() {
    if (this.songForm != null) { 
      this.songService.submitSong(this.songForm.value)
    } else {
      console.log("Y la data ???")
    }
  }
}
