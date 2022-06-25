import AppLoader from './appLoader';
import { Callback, GetNews, GetSources } from '../interface/interface';

class AppController extends AppLoader {
    getSources(callback: Callback<GetSources>) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: Callback<GetNews>) {
        let target = <HTMLElement>e.target;
        const newsContainer = <HTMLElement>e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId) {
                    if (newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                }
                return;
            }
            target = <HTMLElement>target.parentNode!;
        }
    }
}

export default AppController;
