import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { ArticlesResponse, NewsResponse } from '../../types';

class App {
    private controller: Readonly<AppController>;
    private view: Readonly<AppView>;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sourcesElement = document.querySelector('.sources');
        if (sourcesElement) {
            sourcesElement.addEventListener('click', (e: Event) =>
                this.controller.getNews(e, (data: ArticlesResponse) => this.view.drawNews(data))
            );
        }

        this.controller.getSources((data: NewsResponse) => this.view.drawSources(data));
    }
}

export default App;
