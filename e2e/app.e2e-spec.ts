import { BelajarAngular4Page } from './app.po';

describe('belajar-angular4 App', () => {
  let page: BelajarAngular4Page;

  beforeEach(() => {
    page = new BelajarAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
