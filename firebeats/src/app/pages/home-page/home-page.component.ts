import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  activeTab : string = 'Songs'
  constructor() { }

  ngOnInit(): void {
  }

  onClickTab(tab : string) {
    this.activeTab = tab
  }
}
