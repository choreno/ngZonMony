import { NgZonMonyPage } from './app.po';

describe('ng-zon-mony App', function() {
  let page: NgZonMonyPage;

  beforeEach(() => {
    page = new NgZonMonyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
