import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';

class App {
  constructor({ appbar, content }) {
    this._appbar = appbar;
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
