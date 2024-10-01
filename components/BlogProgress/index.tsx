import { LinearProgress } from "@mui/material"

interface BlogProgressProps{
    progress: number
}

export default function({progress}: BlogProgressProps){
    return(
        <>        
        <LinearProgress sx={{}} value={progress*25} variant="determinate"/>
        </>
    )
}