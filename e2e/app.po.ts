import { browser, by, element } from 'protractor';

export class GotDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('got-root h1')).getText();
  }
}
