import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ConsumerService } from 'src/app/services/api-routes/consumer.service';
import { Song } from 'src/app/interfaces/songs';
import { Observable } from 'rxjs/internal/Observable';
import { FormControl } from '@angular/forms';
import { map, startWith, switchMap } from 'rxjs';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']

})
export class IndexComponent implements OnInit {

  @ViewChild('SearchInput') searchInput : any;
  
  myControl = new FormControl<string | Song>('');
  options: Observable<Song[]>;



  constructor(private consumer : ConsumerService) {

    this.options = this.myControl.valueChanges.pipe(
      switchMap(songName => this.consumer.getSearch(songName))
    );

   }
   
  ngOnInit(): void {
  }
  
  getSearch(){
    // this.consumer.getSearch()
    // .subscribe(response)
  }
  displayFn(song: Song): string {
    return song && song.songName ? song.songName : '';
  }

}
