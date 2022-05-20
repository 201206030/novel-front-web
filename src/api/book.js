import request from '../utils/request'

export function listCategorys(params) {
    return request.get('/book/category/list', { params });
}

export function searchBooks(params) {
    return request.get('/book/search_list', { params });
}

export function getBookById(bookId) {
    return request.get(`/book/${bookId}`);
}

export function addVisitCount(params) {
    return request.post('/book/visit', params);
}

export function getLastChapterAbout(params) {
    return request.get('/book/last_chapter/about', { params });
}

export function listRecBooks(params) {
    return request.get('/book/rec_list', { params });
}

export function listChapters(params) {
    return request.get('/book/chapter/list', { params });
}

export function getBookContent(chapterId) {
    return request.get(`/book/content/${chapterId}`);
}

export function getPreChapterId(chapterId) {
    return request.get(`/book/pre_chapter_id/${chapterId}`);
}

export function getNextChapterId(chapterId) {
    return request.get(`/book/next_chapter_id/${chapterId}`);
}

export function listVisitRankBooks() {
    return request.get('/book/visit_rank');
}

export function listNewestRankBooks() {
    return request.get('/book/newest_rank');
}

export function listUpdateRankBooks() {
    return request.get('/book/update_rank');
}

export function listNewestComments(params) {
    return request.get('/book/comment/newest_list',{ params });
}

