import { useNavigate } from "react-router-dom"

const Bottom = ()=>{

    const subpath = process.env.REACT_APP_SUB_PATH?? ""
    const navigate = useNavigate()
    
    return(<div className="main-bottom">
        <ul>
            <li onClick={()=>navigate(`${subpath}/`)}>HOME</li>
            <li onClick={()=>navigate(`${subpath}/store`)}>STORE</li>
            <li onClick={()=>navigate(`${subpath}/info`)}>INFO</li>
            <li onClick={()=>navigate(`${subpath}/my`)}>MY</li>
        </ul>
    </div>)
}

export default Bottom