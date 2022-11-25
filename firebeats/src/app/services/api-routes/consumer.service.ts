import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL, SONG_API_URL } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  HTTPOPTIONS = {'Content-Type' : 'application/json'}

  constructor(private _http : HttpClient) { }

  getSongs() {
    var songs_data = this._http
      .get(API_BASE_URL + 'songs')

    return songs_data
  }

  getPlaylists() {
    var playlists_data = this._http
    .get<any>(API_BASE_URL + "playlist")

    return playlists_data 
  }

  addToYourPlaylists(song : any) {
    const BODY = JSON.stringify(song)

    this._http.post(API_BASE_URL + 'playlist', BODY, { headers : this.HTTPOPTIONS })
      .subscribe(response => console.log(response))
  }
  
  uploadSongFile(formData : FormData)
  {
    return this._http
      .post(SONG_API_URL + 'Fileupload', formData, { responseType : 'text' })
  }

  submitSong(song : any)
  {
    const BODY = JSON.stringify(song)
    
    return this._http
      .post(API_BASE_URL + 'songs', BODY, { headers : this.HTTPOPTIONS })
      .subscribe(response => {
        console.log(response)
      })
  }
}
