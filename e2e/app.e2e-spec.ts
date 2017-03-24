import { A035NgrxPage } from './app.po';

describe('a035-ngrx App', function() {
  let page: A035NgrxPage;

  beforeEach(() => {
    page = new A035NgrxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
