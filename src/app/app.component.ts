import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  d = new Date;
  authorPosition="writer";
  authorName="shreenath Boi";
  articleName="pipes in angular";
}
