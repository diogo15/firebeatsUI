import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class PlaylistDataService {

  constructor(private _http : HttpClient) { }

  getPlaylists() {
    var playlists_data = this._http
    .get<any>(API_BASE_URL + "playlist")

    return playlists_data 
  }
}
