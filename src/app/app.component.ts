import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  clickedOption = 'recipe';

  onClickMain(option: string) {
    this.clickedOption = option;
  }
}
