import { SupertablePage } from './app.po';

describe('supertable App', function() {
  let page: SupertablePage;

  beforeEach(() => {
    page = new SupertablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
