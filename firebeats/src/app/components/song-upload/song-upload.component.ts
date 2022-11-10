import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-song-upload',
  templateUrl: './song-upload.component.html',
  styleUrls: ['./song-upload.component.sass']
})
export class SongUploadComponent implements OnInit {

  form: FormGroup;

  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: [''],
      file: [null],
    });
  }

  ngOnInit(): void { }

  uploadFile(event:any) {
    const file = event.target.files[0];
    this.form.patchValue({
      file: file,
    });
    //this.form.get('file').updateValueAndValidity();
  }

  submitForm() {
    var formData: any = new FormData();
    //var name = this.form.get('name');
    var song = this.form.get('file');
    //formData.append('name', name?name.value:"");
    formData.append('file', song?song.value:"");
    this.http
      .post('http://localhost:5237/api/BufferedFileUpload', formData)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });
  }

}
