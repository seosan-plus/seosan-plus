import { observer } from "mobx-react"
import board from "../store/board"
import { useLocation } from "react-router-dom"
import styles from "./board.module.css"

const Board = observer(()=>{

    const location = useLocation()
    const {boardName} = location.state

    return(<div className={styles.board}>
        <div>
            <h3>{boardName}</h3>
            <ul>
                {board.freeContents.map((val)=><li key={val.contentsSrl}>
                    {`${val.regdate.substring(5,10)} ${val.title}`}
                </li>)}
            </ul>
        </div>
    </div>)
})

export default Board