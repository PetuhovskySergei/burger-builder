export const ingredientsCall = async () => {
    return await fetch('/ingredients', {
        headers: {'Authorization': sessionStorage.getItem('token')}
    }).then(response => {
        return response.json();
    }).catch(e => {
        console.log(e);
    })
}