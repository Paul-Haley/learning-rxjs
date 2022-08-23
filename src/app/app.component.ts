import { Component } from '@angular/core';
import {filter, interval, map, subscribeOn} from "rxjs";
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-rxjs';

  ngOnInit() {
    // https://rxjs.dev/api/index/function/interval
    const numbers = interval(1000);

    numbers.pipe(
      take(5),
      filter(x => x % 2 === 0),
      map(x => x * 10),
      // filter(x => x > 20)
    ).subscribe(x => console.log(x));
  }

  ngOnDestroy() {
  }
}
