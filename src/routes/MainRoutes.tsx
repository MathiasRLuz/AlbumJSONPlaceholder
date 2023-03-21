import {useRoutes} from 'react-router-dom'
import { AlbumItemPage } from '../pages/AlbumItemPage'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ShowPhotoPage } from '../pages/ShowPhotoPage'

export const MainRoutes = () => {
    return useRoutes([
        {path: '/', element: <HomePage/>},
        {path: '/album/:albumId', element: <AlbumItemPage/>},
        {path: '/photo/:photoId', element: <ShowPhotoPage/>},
        {path: '*', element: <NotFoundPage/>}
    ])
}