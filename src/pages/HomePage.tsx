import { useEffect, useState } from "react"
import { Album } from "../types/Album"
import { api } from "../api"
import { AlbumItem } from "../components/AlbumItem"

export const HomePage = () => {
    const [albums, setAlbums] = useState<Album[]>([])

    useEffect(() => {
        loadAlbums()
    }, [])

    const loadAlbums = async () => {
        let json = await api.getAllAlbums()
        setAlbums(json)
    }

    return (
        <div>
            {albums.length > 0 &&
                <div>
                    {albums.map((item,index) => (
                        <AlbumItem key={index} data={item}/>
                    ))}
                </div>
            }            
        </div>
    )
}