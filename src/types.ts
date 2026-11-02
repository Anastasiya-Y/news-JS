export interface NewsSource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface NewsResponse {
    status: string;
    sources: NewsSource[];
}

export type ArticleSource = {
    id: string | null;
    name: string;
};

export interface Article {
    source: ArticleSource;
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
}

export interface ArticlesResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}

export type Options = {
    [key: string]: string | undefined;
};

export type ResponseObject = {
    endpoint: string;
    options?: Options;
};

export type Callback<T = void> = (data: T) => void;

export enum Errors {
    Error401 = 401,
    Error404 = 404,
}
