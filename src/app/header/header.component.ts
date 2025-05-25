import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone:false
})
export class HeaderComponent {
  @Output() selectedTab = new EventEmitter<string>();
  
  onSelect(d: string) {
    this.selectedTab.emit(d);
  }

}
