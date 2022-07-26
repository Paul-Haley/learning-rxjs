import { Component } from '@angular/core';
import {of} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-rxjs';

  constructor() {
    // taken from: https://rxjs-dev.firebaseapp.com/api/index/class/Observable#create
    const sumObserver = {
      sum: 0,
      next(value: number) {
        console.log('Adding: ' + value);
        this.sum = this.sum + value;
      },
      error() {
        // We actually could just remove this method,
        // since we do not really care about errors right now.
      },
      complete() {
        console.log('Sum equals: ' + this.sum);
      }
    };

    of(1, 2, 3) // Synchronously emits 1, 2, 3 and then completes.
      .subscribe(sumObserver);
  }
}
