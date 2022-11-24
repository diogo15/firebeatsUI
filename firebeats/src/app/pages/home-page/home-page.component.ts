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
    var tabsItems = document.getElementsByClassName('tab')

    for (let i = 0; i < tabsItems.length; i++) {
      tabsItems[i].addEventListener('click', function () {
        var current = document.getElementsByClassName('active')
        current[0].className = current[0].className.replace(' active', '')

        tabsItems[i].className += ' active'
      })
    }
  }

  onClickTab(tab : string) {
    this.activeTab = tab
  }
}
