import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SONG_API_URL } from '../../constants';
import { DragDirective, FileHandle } from '../../directives/dropzone.directive';

@Component({
  selector: 'app-song-upload',
  templateUrl: './song-upload.component.html',
  styleUrls: ['./song-upload.component.sass']
})

export class SongUploadComponent implements OnInit {

  files: FileHandle[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }


  filesDropped(files: FileHandle[]): void {
    this.files = files;
  }

  upload(): void {
    var formData: any = new FormData();
    for (let i = 0; i < this.files.length; i++) {
      
      const file = this.files[i];
      formData.append('file', file);

      this.http.post(SONG_API_URL+'FileUpload', formData).subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });

    }
  }

}
