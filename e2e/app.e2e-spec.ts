import { ToDoAngularAppPage } from './app.po';

describe('to-do-angular-app App', () => {
  let page: ToDoAngularAppPage;

  beforeEach(() => {
    page = new ToDoAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
