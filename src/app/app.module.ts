import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {QuestionaireModule} from './questionaire/questionaire.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, QuestionaireModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
