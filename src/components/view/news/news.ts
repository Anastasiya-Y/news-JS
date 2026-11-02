import './news.css';
import { Article } from '../../types';

class News {
    public draw(data: Article[]): void {
        const news: Article[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

        if (newsItemTemp === null) {
            throw new Error('Template not found');
        }

        news.forEach((item, idx) => {
            const newsClone: Node | null = newsItemTemp.content.cloneNode(true);

            if (!(newsClone instanceof DocumentFragment)) return;

            if (idx % 2) {
                const newsItem = newsClone.querySelector('.news__item');
                if (newsItem) newsItem.classList.add('alt');
            }

            const newsMetaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            if (newsMetaPhoto) {
                newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }

            const newsMetaAuthor = newsClone.querySelector('.news__meta-author') as HTMLElement;
            if (newsMetaAuthor) {
                newsMetaAuthor.textContent = item.author || item.source.name;
            }

            const newsMetaDate = newsClone.querySelector('.news__meta-date') as HTMLElement;
            if (newsMetaDate) {
                newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            }

            const newsDescriptionTitle = newsClone.querySelector('.news__description-title') as HTMLElement;
            if (newsDescriptionTitle) newsDescriptionTitle.textContent = item.title;

            const newsDescriptionSource = newsClone.querySelector('.news__description-source') as HTMLElement;
            if (newsDescriptionSource) newsDescriptionSource.textContent = item.source.name;

            const newsDescriptionContent = newsClone.querySelector('.news__description-content') as HTMLElement;
            if (newsDescriptionContent) newsDescriptionContent.textContent = item.description;

            const newsReadMore = newsClone.querySelector('.news__read-more a') as HTMLElement;
            if (newsReadMore) newsReadMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsContainer = document.querySelector('.news') as HTMLElement;
        if (newsContainer) {
            newsContainer.innerHTML = '';
            newsContainer.appendChild(fragment);
        }
    }
}

export default News;