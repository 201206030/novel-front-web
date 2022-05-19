import request from '../utils/request'

export function listLatestNews() {
    return request.get('/news/latest_list');
}

export function getNewsById(newsId) {
    return request.get(`/news/${newsId}`);
}