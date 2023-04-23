import { observer } from "mobx-react"
import styles from "./main.module.css"
import board from "../store/board"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Main = observer(()=>{

    const navigate = useNavigate()

    useEffect(()=>{
        board.getFreeContents()
    },[])

    return(<div className="main-body">
        {/* free board */}
        <div className={styles.pannel}>
            <h3 onClick={()=>navigate('/board',{state:{boardName:"자유게시판"}})}><span>Free board</span><span>more {`>`}</span></h3>
            <ul>
                {board.freeContents.map((val)=><li onClick={()=>navigate('/board/contents',{state:{...val}})} key={val.contentsSrl}>
                    <div className={styles.freeBoard}>
                        <span className={styles.name}>{val.seosanName}</span>  <span className={styles.title}>{val.title}</span>
                    </div>
                </li>)}
            </ul>
        </div>
    
        {/* Notice board */}
        <div className={styles.pannel}>
            <h3 onClick={()=>navigate('/board',{state:{boardName:"공지사항"}})}><span>Notice board</span><span>more {`>`}</span></h3>
            <ul>
                <li>공지사항 테스트 게시물 1</li>
                <li>공지사항 테스트 게시물 1</li>
                <li>공지사항 테스트 게시물 1</li>
            </ul>
        </div>
    </div>)
})

export default Main