// /album/:album.id - mostra as thumbnails das fotos do album

import { useNavigate, useParams } from "react-router-dom"
import { api } from "../api"
import { useEffect, useState } from "react"
import { Album } from "../types/Album"
import { Photo } from "../types/Photo"
import { PhotoMiniature } from "../components/PhotoMiniature"

export const AlbumItemPage = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [albumData, setAlbumData] = useState<Album>()
    const [albumPhotos, setAlbumPhotos] = useState<Photo[]>([])

    useEffect(() => {
        if (params.albumId){
            loadAlbumData(params.albumId)
            loadAlbumPhotos(params.albumId)
        }
    }, [])

    const loadAlbumData = async (albumId:string) => {
        let json = await api.getAlbumInfo(albumId)
        setAlbumData(json)
    }

    const loadAlbumPhotos = async (albumId:string) => {
        let json = await api.getAllPhotosFromAlbum(albumId)
        setAlbumPhotos(json)
    }

    return (
        <div>
            <button onClick={()=>navigate(-1)}>Voltar</button>
            <br />            
            <h2>{albumData?.title}</h2>            
            <br />
            {albumPhotos.length > 0 &&
                <div className="photo-grid">
                    {albumPhotos.map((item,index) => (
                        <PhotoMiniature key={index} data={item}/>
                    ))}
                </div>
            }
        </div>
    )
}