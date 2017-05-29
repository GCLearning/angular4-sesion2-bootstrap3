import { NgxBootstrapPage } from './app.po';

describe('ngx-bootstrap App', () => {
  let page: NgxBootstrapPage;

  beforeEach(() => {
    page = new NgxBootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
