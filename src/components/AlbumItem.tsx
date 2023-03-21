import { Link } from "react-router-dom";
import { Album } from "../types/Album";
import { useNavigate } from "react-router-dom";

type Props = {
    data: Album
}

export const AlbumItem = ({ data }: Props) => {
    return (
        <div>
            <hr />
            <Link to={`album/${data.id}`}>{data.title}</Link>
            <hr />
        </div>
    )
}