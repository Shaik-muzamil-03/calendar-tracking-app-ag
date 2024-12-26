import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss']
})
export class UserComponentComponent {
  selectedIndex : number = 0;
  tabs = [
    { label: 'Dashboard' },
    { label: 'Calendar'},
  ];
  selectedTab = this.tabs[0];



  onTabChange(tabEvent:MatTabChangeEvent){
    this.selectedIndex = tabEvent.index;
    this.selectedTab = this.tabs[this.selectedIndex];
  }
}
