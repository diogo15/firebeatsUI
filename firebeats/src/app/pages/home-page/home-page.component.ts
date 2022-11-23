import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let tabs = document.getElementById('tabs')
    var tabsItems = document.getElementsByClassName('tab')

    for (let i = 0; i < tabsItems.length; i++) {
      tabsItems[i].addEventListener('click', function () {
        var current = document.getElementsByClassName('active')
        current[0].className = current[0].className.replace(' active', '')

        tabsItems[i].className += ' active'
      })
      
    }
  }

}
