// /photo/:photo.id - mostra a foto 600x600 

import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../api"
import { PhotoFull } from "../components/PhotoFull"
import { Photo } from "../types/Photo"

export const ShowPhotoPage = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [photoData, setPhotoData] = useState<Photo>()

    useEffect(() => {
        if (params.photoId){
            loadPhotoData(params.photoId)
        }
    }, [])

    const loadPhotoData = async (albumId:string) => {
        let json = await api.getPhotoInfo(albumId)
        setPhotoData(json)
    }

    return (
        <div>
            <button onClick={()=>navigate(-1)}>Voltar</button>
            <br />            
            <h2>{photoData?.title}</h2>            
            <br />
            {photoData &&
                <div>
                    <PhotoFull data={photoData}/>
                </div>
            }
            
            
        </div>
    )
}