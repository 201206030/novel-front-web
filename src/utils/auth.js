
const TokenKey = 'Authorization'


export const getToken = () => {
    localStorage.getItem(TokenKey);
}

export const setToken = (token) => {
  return localStorage.setItem(TokenKey, token)
}

export const removeToken = () =>  {
  return localStorage.removeItem(TokenKey)
}