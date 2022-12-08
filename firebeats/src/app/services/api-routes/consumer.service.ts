import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL, SONG_API_URL } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {
  
  HTTPOPTIONS = {'Content-Type' : 'application/json'}

  constructor(private _http : HttpClient) { }
  // Get all data from entity
  getAlbums() {
    return this._http.get(API_BASE_URL + 'album')
  }
  
  getSongs() {
    return this._http.get(API_BASE_URL + 'songs')
  }

  getGenres() {
    return this._http.get(API_BASE_URL + 'genre')
  }

  getPlaylists() {
    return this._http.get(API_BASE_URL + 'playlist')
  }

  // Get data from a specific entity
  getSong(id : any) {
    return this._http.get<any>(API_BASE_URL + `songs/${id}`)
  }

  getPlaylist(listParam : any) {
    return this._http.get<any>(API_BASE_URL + `playlist/${listParam}`)
  }

  // Update entity
  updateSongToList(id : any, playlist : any) {
    return this._http.put<any>(API_BASE_URL + `songs/${id}`, this.stringifyBody(playlist), { headers : this.HTTPOPTIONS })
      .subscribe(response => console.log(response))
  }
  
  uploadSongFile(formData : FormData) {
    return this._http
      .post(SONG_API_URL + 'Fileupload', formData, { responseType : 'text' })
  }

  submitSong(song : any) {
    return this._http
      .post(API_BASE_URL + 'songs', this.stringifyBody(song), { headers : this.HTTPOPTIONS })
      .subscribe(response => {})
  }

  private stringifyBody(object : any) {
    return JSON.stringify(object)
  }
}
