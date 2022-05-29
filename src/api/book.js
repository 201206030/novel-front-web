import request from '../utils/request'

export function listCategorys(params) {
    return request.get('/front/book/category/list', { params });
}

export function searchBooks(params) {
    return request.get('/front/search/books', { params });
}

export function getBookById(bookId) {
    return request.get(`/front/book/${bookId}`);
}

export function addVisitCount(params) {
    return request.post('/front/book/visit', params);
}

export function getLastChapterAbout(params) {
    return request.get('/front/book/last_chapter/about', { params });
}

export function listRecBooks(params) {
    return request.get('/front/book/rec_list', { params });
}

export function listChapters(params) {
    return request.get('/front/book/chapter/list', { params });
}

export function getBookContent(chapterId) {
    return request.get(`/front/book/content/${chapterId}`);
}

export function getPreChapterId(chapterId) {
    return request.get(`/front/book/pre_chapter_id/${chapterId}`);
}

export function getNextChapterId(chapterId) {
    return request.get(`/front/book/next_chapter_id/${chapterId}`);
}

export function listVisitRankBooks() {
    return request.get('/front/book/visit_rank');
}

export function listNewestRankBooks() {
    return request.get('/front/book/newest_rank');
}

export function listUpdateRankBooks() {
    return request.get('/front/book/update_rank');
}

export function listNewestComments(params) {
    return request.get('/front/book/comment/newest_list',{ params });
}

