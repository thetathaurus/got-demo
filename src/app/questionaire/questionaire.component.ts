import {Component} from '@angular/core';
import {Question} from './question.interface';

@Component({
  selector: 'got-questionaire',
  template: `
    <p>
      GOT - Weinberater
    </p>

    <div *ngIf="showResult===false">
      <got-question [question]="questions[currentQuestionIndex]" (answer)="onAnswer($event)"></got-question>
    </div>
    <div *ngIf="showResult===true">
      <got-result [result]="result"></got-result>
    </div>
  `,
  styles: []
})
export class QuestionaireComponent {

  static TYPES = ['Jaimie', 'John', 'Cercei'];

  questions: Array<Question> = [];
  currentQuestionIndex: number;
  showResult: boolean = false;
  result: string = 'n/a';

  constructor() {
    this.questions = [{
      description: 'Welche Mucke hörst du beim Wein',
      answers: [
        {description: 'Rock', type: 1, image: '../../assets/1.jpg'},
        {description: 'Klassik', type: 2, image: '../../assets/2.jpg'},
        {description: 'Techno', type: 3, image: '../../assets/1.jpg'}]
    },
      {
        description: 'Wo trinkst du Wein am liebsten',
        answers: [
          {description: 'Balkon', type: 1, image: '../../assets/1.jpg'},
          {description: 'Garten', type: 2, image: '../../assets/1.jpg'},
          {description: 'Wald', type: 3, image: '../../assets/1.jpg'}]
      },
      {
        description: 'Wie trinkst du deinen Wein am liebsten ',
        answers: [
          {description: 'Nackt', type: 1, image: '../../assets/1.jpg'},
          {description: 'In Gesellschaft', type: 2, image: '../../assets/1.jpg'},
          {description: 'Beides', type: 3, image: '../../assets/1.jpg'}]
      }];

    this.currentQuestionIndex = 0;
  }

  onAnswer(type: number) {
    console.log('I got type', type);
    // save the answer to the current question
    this.questions[this.currentQuestionIndex].answerType = type;


    if (this.currentQuestionIndex >= this.questions.length - 1) {
      // calculate result and present

      const types: Array<number> = this.questions.map((question) => question.answerType);
      // TODO initialize countArray with 0, with QuestionaireComponent.TYPES.length
      const countArray = [0, 0, 0];

      // count every type into countArray
      types.forEach((type) => countArray[type - 1] += 1);

      // get the maximum index of countArray (== type)
      let maxIndex = 0;
      for (let i = 0; i < countArray.length; i++) {
        if (countArray[i] > countArray[maxIndex]) {
          maxIndex = i;
        }
      }

      this.result = QuestionaireComponent.TYPES[maxIndex];
      this.showResult = true;
    } else {
      // show next question
      this.currentQuestionIndex = this.currentQuestionIndex + 1;

    }

  }

}
