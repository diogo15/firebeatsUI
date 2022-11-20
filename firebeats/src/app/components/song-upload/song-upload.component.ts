import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL, SONG_API_URL } from '../../constants';
import { SongsDataService } from 'src/app/services/songs/songs-data.service';

@Component({
  selector: 'app-song-upload',
  templateUrl: './song-upload.component.html',
  styleUrls: ['./song-upload.component.sass']
})

export class SongUploadComponent implements OnInit {

  formData : any = new FormData()
  form: FormGroup;

  constructor(public fb: FormBuilder, private http: HttpClient, private songService : SongsDataService) { 
    this.form = this.fb.group({
      name: '',
      file: null,
    })
  }
  ngOnInit(): void { }

  uploadFile(event : any) {
    const file = event.target.files[0];  
    this.form.patchValue({
      file: file,
    });

    var song = this.form.get('file')
    this.formData.append('file', song ? song.value : "")
    var path_response = this.songService.uploadSongFile(this.formData)

    this.formData.append('name', this.form.get('name')?.value)
    this.formData.append('file', path_response)

    console.log(this.form.value)
  }

  submitForm(form : FormGroup) {
    if (form != null) { 
      this.http.post(API_BASE_URL + 'songs', form.value)
      .subscribe(response => console.log(response))
    }
    console.log("Y la data ???")
  }
}
