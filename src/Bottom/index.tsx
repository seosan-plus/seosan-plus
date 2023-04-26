import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Bottom = ()=>{

    const subpath = process.env.REACT_APP_SUB_PATH?? ""
    const navigate = useNavigate()

    const [page, setPage] = useState<number>(0)

    useEffect(()=>{
        if(page === 0){
            navigate(`${subpath}/`)
            return
        }
        if(page === 1){
            navigate(`${subpath}/store`)
            return
        }
        if(page === 2){
            navigate(`${subpath}/info`)
            return
        }
        if(page === 3){
            navigate(`${subpath}/my`)
            return
        }
    },[page])
    
    return(<div className="main-bottom">
        <ul>
            <li onClick={()=>setPage(0)}>
                {page === 0?<div className="active">
                    HOME
                </div>:<div>
                    HOME
                </div>}
            </li>
            <li onClick={()=>setPage(1)}>
                {page === 1?<div className="active">
                    SHOP
                </div>:<div>
                    SHOP
                </div>}
            </li>
            <li onClick={()=>setPage(2)}>
                {page === 2?<div className="active">
                    INFO
                </div>:<div>
                    INFO
                </div>}
            </li>
            <li onClick={()=>setPage(3)}>
                {page === 3?<div className="active">
                    MY
                </div>:<div>
                    MY
                </div>}
            </li>
        </ul>
    </div>)
}

export default Bottom