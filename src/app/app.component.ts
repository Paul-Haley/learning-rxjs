import { Component } from '@angular/core';
import {Observable, of, Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-rxjs';
  private mySubject: Subject<number> = new Subject();

  ngOnInit() {
    this.mySubject.subscribe(x => console.log('first subscribe', x));
    this.mySubject.next(1);
    this.mySubject.next(2);
    this.mySubject.subscribe(x => console.log('second subscribe', x));
    this.mySubject.next(3);

  }

  ngOnDestroy() {
    this.mySubject.unsubscribe();
  }
}
