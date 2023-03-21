import axios from "axios"

const BASE_URL = "https://jsonplaceholder.typicode.com"


/*
/albums - lista de albuns
/albums/1 - 
/albums/1/photos - photo.thumbnailUrl
/photos/1 - photo.url
*/

export const api = {
    getAllAlbums: async () => {
        let response = await axios.get(`${BASE_URL}/albums`)
        return response.data
    },
    getAlbumInfo: async (albumId: string) => {
        let response = await axios.get(`${BASE_URL}/albums/${albumId}`)
        return response.data
    },
    getAllPhotosFromAlbum: async (albumId: string) => {
        let response = await axios.get(`${BASE_URL}/albums/${albumId}/photos`)
        return response.data
    },
    getPhotoInfo: async (photoId: string) => {
        let response = await axios.get(`${BASE_URL}/photos/${photoId}`)
        return response.data
    }
}