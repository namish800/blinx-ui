import dynamic from "next/dynamic";
import './style.scss'

const InstaPostGenerator = dynamic(() => import("@/components/InstaPostGenerator"))

const PostGenerator = () => {
    return(
        <InstaPostGenerator />
    )
}


export default PostGenerator;