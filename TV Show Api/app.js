const form = document.querySelector('#formulario');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchInput = form.elements.query.value;
    const config = { params: { q: searchInput } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    displayingImgs(res.data);
    form.elements.query.value = '';
})

const displayingImgs = (shows) => {
    for (let results of shows) {
        if (results.show.image) {
            const img = document.createElement('img');
            img.src = results.show.image.medium;
            document.body.append(img);
        }
    }

}

// const deleteImgs = () => {
//     const imgs = document.querySelectorAll('img');
//     for (let img of imgs) {
//         img.remove();
//     }
// }

