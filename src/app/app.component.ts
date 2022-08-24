import { Component } from '@angular/core';
import {interval, map, of, switchMap} from "rxjs";
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
    const letters = of('a', 'b', 'c', 'd', 'e');

    letters.pipe(
      switchMap(x =>
        numbers.pipe(
          take(5),
          map(i => i + x))
      )).subscribe(x => console.log(x));
  }

  ngOnDestroy() {
  }
}
