import { Component, OnInit } from '@angular/core';
import { ConsumerService } from 'src/app/services/api-routes/consumer.service';

@Component({
  selector: 'app-lists-selection',
  templateUrl: './lists-selection.component.html',
  styleUrls: ['./lists-selection.component.sass']
})
export class ListsSelectionComponent implements OnInit {

  lists : any = null
  selectedOption : any = null

  constructor(private consumer : ConsumerService) { }

  ngOnInit(): void {
    this.consumer.getPlaylists()
      .subscribe(response => this.lists = response)
  }

}
