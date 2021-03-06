import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  keyword = '';
  constructor() {
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title  = 'The Will Will Web';
    }
  }
  changeKeyword($event: KeyboardEvent) {
    const escapeKeyCode = 27;
    if ($event.keyCode === escapeKeyCode) {
      this.keyword = '';
    } else {
      this.keyword = ($event.target as HTMLInputElement).value;
    }
  }
}
