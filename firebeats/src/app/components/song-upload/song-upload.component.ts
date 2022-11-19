import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL, SONG_API_URL } from '../../constants';

@Component({
  selector: 'app-song-upload',
  templateUrl: './song-upload.component.html',
  styleUrls: ['./song-upload.component.sass']
})

export class SongUploadComponent implements OnInit {

  form: FormGroup;
  songFile : any = []

  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: [''],
      file: [null],
    });
  }

  ngOnInit(): void { }

  uploadFile(event : any) {
    const file = event.target.files[0];
    this.form.patchValue({
      file: file,
    });

    var formData: any = new FormData();
    //var name = this.form.get('name');
    var song = this.form.get('file');
    //formData.append('name', name?name.value:"");
    formData.append('file', song?song.value:"");
    this.http 
      .post(SONG_API_URL+'FileUpload', formData)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });
    //this.form.get('file').updateValueAndValidity();
    /*var path_response = this.http
      .post(SONG_API_URL + 'Fileupload', file)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      })*/
  }

  submitForm() {
    const songFormData = new FormData()

    this.http
      .post(API_BASE_URL + 'songs', songFormData)
      .subscribe(response => console.log(response))
  }
}
