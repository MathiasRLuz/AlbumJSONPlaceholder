import { Link } from "react-router-dom";
import { Photo } from "../types/Photo";
import '../App.css';
type Props = {
    data: Photo
}

export const PhotoMiniature = ({ data }: Props) => {
    return (
        <div>          
            <Link to={`../../photo/${data.id}`}>
                <img src={data.thumbnailUrl} alt="" />
            </Link>
        </div>
    )
}