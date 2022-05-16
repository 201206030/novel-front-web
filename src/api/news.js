import request from '../utils/request'

export function listLatestNews() {
    return request.get('/news/latestList');
}

export function getNewsById(newsId) {
    return request.get(`/news/${newsId}`);
}