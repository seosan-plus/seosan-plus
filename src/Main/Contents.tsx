import { useLocation } from "react-router-dom"

const Contents = ()=>{
    
    const location = useLocation()
    console.log(location)

    return(<div>
        Contents
    </div>)
}

export default Contents