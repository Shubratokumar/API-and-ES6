// Load Photos
const loadPhotos = () => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then(res => res.json())
    .then(data => displayPhotos(data))
}
// call loadPhotos()
loadPhotos()
const displayPhotos = photos => {
    // console.log(photos);
    photos.forEach( photo => {
        // console.log(photo);
        const photoContainer = document.getElementById('photos-container');
        const div = document.createElement('div')
        div.classList.add('photos-container')
        div.innerHTML = `
            <div class="card">
                <p>Id : ${photo.id}</p>
                <p>Photo Title : ${photo.title}</p>
                <button onclick="photoDetails('${photo.id}')">More Details</button>       
            </div>
        `;
        photoContainer.appendChild(div)

    })
}
// get photo data by photo id 
const photoDetails = photoId => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
    .then(res => res.json())
    .then(data => displayDetails(data))
}

const displayDetails = id => {
    // console.log(id);
    const detailsContainer = document.getElementById('details-container');
    const div = document.createElement('div');
    div. innerHTML = `
        <div class = "card w-50 mx-auto">
            <h3>Photo Details</h3>
            <img src="${id.thumbnailUrl}" alt="">
            <p>AlbumId : ${id.albumId}</p>
            <p>Id : ${id.id}</p>
            <p>Photo Title : ${id.title}</p>
            <p>URL : ${id.url}</p>
        </div>
    `;
    detailsContainer.appendChild(div)
    
}
