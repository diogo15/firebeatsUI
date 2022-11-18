import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class SongsDataService {

  constructor(private _http : HttpClient) { }

  getSongs() {
    var songs_data = this._http.get(API_BASE_URL + 'songs')

    return songs_data
  }
}
