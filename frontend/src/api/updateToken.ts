export const updateToken = (token?: string) => {
    token
        ? sessionStorage.setItem('token', token)
        : sessionStorage.removeItem('token');
};