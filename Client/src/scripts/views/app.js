import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';

class App {
  constructor() {
    this._initialAppShell();
  }

  _initialAppShell() {}

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    await page.afterRender();
  }
}

export default App;
