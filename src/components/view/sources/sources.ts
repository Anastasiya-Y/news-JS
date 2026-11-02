import './sources.css';
import { NewsSource } from '../../../types';

class Sources {
    public draw(data: NewsSource[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        if (sourceItemTemp === null) {
            throw new Error('Template not found');
        }

        data.forEach((item) => {
            const sourceClone: Node | null = sourceItemTemp.content.cloneNode(true);

            if (!(sourceClone instanceof DocumentFragment)) return;

            const sourceItemName = sourceClone.querySelector('.source__item-name') as HTMLElement;
            if (sourceItemName) sourceItemName.textContent = item.name;

            const sourceItem = sourceClone.querySelector('.source__item') as HTMLElement;
            if (sourceItem) {
                sourceItem.setAttribute('data-source-id', item.id);
            }

            fragment.append(sourceClone);
        });

        const sourceContainer = document.querySelector('.sources'); 
        if (sourceContainer) {
            sourceContainer.append(fragment);
        }
    }
}

export default Sources;