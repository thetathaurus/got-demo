import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestionaireComponent} from './questionaire.component';
import {QuestionComponent} from './question.component';
import {ResultComponent} from './result.component';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    CommonModule, HttpModule
  ],
  declarations: [QuestionaireComponent, QuestionComponent, ResultComponent],
  exports: [QuestionaireComponent, QuestionComponent, ResultComponent]
})
export class QuestionaireModule {
}
