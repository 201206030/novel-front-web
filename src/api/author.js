import request from '../utils/request'

export function getAuthorStatus() {
    return request.get('/author/status');
}

export function register(params) {
    return request.post('/author/register', params);
}

export function listBooks(params) {
    return request.get('/author/books', { params });
}

export function publishBook(params) {
    return request.post('/author/book', params);
}

export function listChapters(bookId, params) {
    return request.get(`/author/book/chapters/${bookId}`, { params });
}

export function publishChapter(bookId,params) {
    return request.post(`/author/book/chapter/${bookId}`, params);
}

export function aiGenerate(action,params) {
    const formData = new FormData();
    Object.keys(params).forEach(key => {
        formData.append(key, params[key]);
    });
    return request.post(`/author/ai/${action}`, formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        timeout: 60000
      });
}

export function deleteChapter(id) {
    return request.delete(`/author/book/chapter/${id}`);
}

export function getChapter(id) {
    return request.get(`/author/book/chapter/${id}`);
}

export function updateChapter(id,params) {
    return request.put(`/author/book/chapter/${id}`,params);
}