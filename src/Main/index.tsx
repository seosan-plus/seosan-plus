import styles from "./main.module.css"

const Main = ()=>{

    return(<div className="main-body">
        {/* free board */}
        <div className={styles.pannel}>
            <h3><span>Free board</span><span>more {`>`}</span></h3>
            <ul>
                <li>자유게시판 테스트 게시물 1</li>
                <li>자유게시판 테스트 게시물 1</li>
                <li>자유게시판 테스트 게시물 1</li>
                <li>자유게시판 테스트 게시물 1</li>
            </ul>
        </div>
    
        {/* Notice board */}
        <div className={styles.pannel}>
            <h3><span>Notice board</span><span>more {`>`}</span></h3>
            <ul>
                <li>공지사항 테스트 게시물 1</li>
                <li>공지사항 테스트 게시물 1</li>
                <li>공지사항 테스트 게시물 1</li>
            </ul>
        </div>
    </div>)
}

export default Main