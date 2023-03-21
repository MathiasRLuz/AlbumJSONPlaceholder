import { Photo } from "../types/Photo";

type Props = {
    data: Photo
}

export const PhotoFull = ({ data }: Props) => {
    return (
        <div>          
            <img src={data.url} alt={data.title} />
        </div>
    )
}