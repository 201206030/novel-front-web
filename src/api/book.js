import request from '../utils/request'

export function getBookById(bookId) {
    return request.get(`/book/${bookId}`);
}

export function getBookContent(chapterId) {
    return request.get(`/book/content/${chapterId}`);
}

export function listVisitRankBooks() {
    return request.get('/book/visitRank');
}

export function listNewestRankBooks() {
    return request.get('/book/newestRank');
}

export function listUpdateRankBooks() {
    return request.get('/book/updateRank');
}

