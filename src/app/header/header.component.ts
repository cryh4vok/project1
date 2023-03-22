import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() clickedOption = new EventEmitter<string>();

  onClick(option: string) {
    this.clickedOption.emit(option);
  }
}
