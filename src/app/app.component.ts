import { Component } from '@angular/core';
import {debounceTime, Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchSubject = new Subject<string>();

  ngOnInit() {
    this.searchSubject.pipe(
      debounceTime(200)
    ).subscribe(x => console.log("debounced: ", x));
  }

  ngOnDestroy() {
  }

  inputChanged(event: any) {
    console.log('input changed', event);
    this.searchSubject.next(event);
  }
}
