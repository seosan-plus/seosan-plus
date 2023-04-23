import { useLocation } from "react-router-dom"
import styles from "./contents.module.css"

const Contents = ()=>{
    
    const location = useLocation()
    const {title,seosanName,regdate,contents} = location.state
    console.log(location)

    return(<div>
        <div className={styles.contentsBox}>
            <h3>{title}</h3>
            <h4>{regdate.replace(".000Z","").replace("T"," ")}</h4>
            <h4>{seosanName}</h4>
            <div className={styles.contents}>
                {contents}
            </div>
        </div>
    </div>)
}

export default Contents