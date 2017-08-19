import { GotDemoPage } from './app.po';

describe('got-demo App', () => {
  let page: GotDemoPage;

  beforeEach(() => {
    page = new GotDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to got!!');
  });
});
