export const loginCall = async (loginInputs) => {
    return await fetch('/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(loginInputs)
    }).then(response => {
        return response.json()
    }).catch(e => {
        console.log(e)
    })
}