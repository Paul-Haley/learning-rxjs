import { Component } from '@angular/core';
import {fromEvent} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-rxjs';

  ngOnInit() {
    const clicks = fromEvent(document, 'click');
    clicks.subscribe(x => console.log(x));
  }

  ngOnDestroy() {
  }
}
