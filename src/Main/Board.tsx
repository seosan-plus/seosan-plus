import { observer } from "mobx-react"
import board from "../store/board"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import styles from "./board.module.css"
import { useEffect, useState } from "react"

const Board = observer(()=>{

    const navigate = useNavigate()
    const location = useLocation()
    const {boardName} = location.state

    const [page ,setPage] = useState<number>(1)

    useEffect(()=>{
        board.movePage(page)
    },[page])


    return(<div className={styles.board}>
        <Outlet />
        <div>
            <h3>{boardName}</h3>
            <ul>
                {board.freeContents.map((val)=><li key={val.contentsSrl} onClick={()=>navigate('/board/contents',{state:{...val,boardName:boardName}})} >
                    <div className={styles.freeBoard}>
                        <span className={styles.name}>{val.seosanName}</span>  <span className={styles.title}>{val.title}</span>
                    </div>
                </li>)}
            </ul>
            <div className={styles.page}>
                <span onClick={()=>setPage(page-1>0?page-1:1)}>prev page</span>
                <span>{page}</span>
                <span onClick={()=>setPage(page+1)}>next page</span>
            </div>

        </div>
    </div>)
})

export default Board