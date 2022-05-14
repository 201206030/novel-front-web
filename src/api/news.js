import request from '../utils/request'

export function listLatestNews() {
    return request.get('/news/latestList');
}