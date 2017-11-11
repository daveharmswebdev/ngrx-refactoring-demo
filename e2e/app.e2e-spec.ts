import { DemoNgrxRefactoringPage } from './app.po';

describe('demo-ngrx-refactoring App', () => {
  let page: DemoNgrxRefactoringPage;

  beforeEach(() => {
    page = new DemoNgrxRefactoringPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
