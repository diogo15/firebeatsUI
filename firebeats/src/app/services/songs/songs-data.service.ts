import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL, SONG_API_URL } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class SongsDataService {

  constructor(private _http : HttpClient) { }

  getSongs() {
    var songs_data = this._http.get(API_BASE_URL + 'songs')

    return songs_data
  }

  uploadSongFile(formData : FormData)
  {
    return this._http
      .post(SONG_API_URL + 'Fileupload', formData, { responseType : 'text' })
      .subscribe(response => console.log(response))
  }

  submitSong(song : any)
  {
    const HEADERS = { 'content-type' : 'application/json'}
    const BODY = JSON.stringify(song)
    
    return this._http
      .post(API_BASE_URL + 'songs', BODY, { headers : HEADERS })
  }
}
