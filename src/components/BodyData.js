import { useStateValue } from "../StateProvider";
const [{user, recents, token, playingrn, isPlaying}, dispatch] = useStateValue()
const BodyData = [
    
    {
        imgsrc: default_recents,
        name: "song/artist name",
        details: "artist/collaborator details here",
        type: "song/artist/track",
        site: "link to spotify site",
    },
    {
        imgsrc: search_res_top_img,
        name: "song/artist name",
        details: "artist/collaborator details here",
        type: "song/artist/track",
        site: "link to spotify site",
    },
  
]
export default BodyData ;