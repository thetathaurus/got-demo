import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Question} from './question.interface';
import {Answer} from './answer.interface';

@Component({
  selector: 'got-question',
  template: `
    <h3>{{question.description}}</h3>

    <div id="answers">
      <a class="answer" *ngFor="let answer of question.answers" href="#" (click)="sendAnswer($event,answer)">
        <img [src]="answer.image">
        <div>{{answer.description}}</div>
      </a>
    </div>
    <div class="clearleft"></div>
  `,
  styles: [`
    :host {
      /* font-size: 30 pt;*/
    }

    .clearleft {
      clear: left;
    }

    #answers {
      float: left;
    }

    .answer {
      display: inline-block;
      margin: 20px;
      padding: 5px;
      cursor: pointer;
    }

    .answer:hover {
      background-color: grey;
    }

    h3:hover {
      color: blue;
    }

    img {
      width: 195px;
      height: 195px;
    }

  `


  ]
})
export class QuestionComponent {

  @Input()
  question: Question;

  @Output('answer')
  answerEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  sendAnswer(event: Event, answer: Answer) {
    this.answerEmitter.next(answer.type);
    event.preventDefault();

  }

}
