import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabber',
  templateUrl: './tabber.component.html',
  styleUrls: ['./tabber.component.sass']
})
export class TabberComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs : any

  constructor () {}

  ngAfterContentInit() {
    let activeTabs = this.tabs.filter((tab: { active: any; }) => tab.active)

    if (activeTabs.length === 0) this.selectTab(this.tabs.first)
  }

  selectTab(tab : any) {
    this.tabs.toArray().forEach((tab: { active: boolean; }) => tab.active = false)

    tab.active = true;
  }

}
