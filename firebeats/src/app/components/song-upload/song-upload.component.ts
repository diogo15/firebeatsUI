import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../../constants';
import { SongsDataService } from 'src/app/services/songs/songs-data.service';

@Component({
  selector: 'app-song-upload',
  templateUrl: './song-upload.component.html',
  styleUrls: ['./song-upload.component.sass']
})

export class SongUploadComponent implements OnInit {

  formData : any = new FormData()

  songForm = this.fb.group({
    name: [''],
    file: ['', Validators.required],
  })

  constructor(public fb: FormBuilder, private http: HttpClient, private songService : SongsDataService) { }

  ngOnInit(): void { }

  uploadFile(event : any) {
    const file = event.target.files[0]
    console.log(file)
    this.songForm.patchValue({
      file: file,
    });

    var song = this.songForm.get('file')
    this.formData.append('file', song ? song.value : "")
    var path_response = this.songService.uploadSongFile(this.formData)
  }

  submitForm() {
    if (this.songForm != null) { 
    }
    console.log("Y la data ???")
  }
}
