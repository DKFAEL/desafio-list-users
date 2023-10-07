import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  

  onSearch(event: any): void {
    const searchValue = event.target.value;
    if (searchValue !== undefined) {
      this.search.emit(searchValue);
    }
  }
}
