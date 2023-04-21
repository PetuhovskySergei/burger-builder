export const ingredientImgCall = async (src: string) => {
    return await fetch(`/ingredientImg/${src}`)
        .then(response => response.json())
        .catch(e => {
            console.log(e);
        })
}