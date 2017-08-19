import {Component, Input, OnInit} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'got-result',
  template: `
    <h3>Your answer</h3>
    <!-- 
    <pre>{{result | json}}</pre>
    -->
    <h2>{{result}}</h2>
    <button (click)="send()">Send</button>
  `,
  styles: []
})
export class ResultComponent implements OnInit {

  @Input()
  result: string;

  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  send() {
    this.http.post('http://www.google.de/myresult', this.result)
      .subscribe((response: any) => {
        console.log(response)
      });
  }

}
