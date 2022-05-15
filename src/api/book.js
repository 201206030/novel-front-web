import request from '../utils/request'

export function getBookById(bookId) {
    return request.get(`/book/${bookId}`);
}

export function addVisitCount(params) {
    return request.post('/book/visit', params);
}

export function getLastChapterAbout(params) {
    return request.get('/book/lastChapterAbout', { params });
}

export function listRecBooks(params) {
    return request.get('/book/recList', { params });
}

export function listChapters(params) {
    return request.get('/book/chapterList', { params });
}

export function getBookContent(chapterId) {
    return request.get(`/book/content/${chapterId}`);
}

export function getPreChapterId(chapterId) {
    return request.get(`/book/preChapterId/${chapterId}`);
}

export function getNextChapterId(chapterId) {
    return request.get(`/book/nextChapterId/${chapterId}`);
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

