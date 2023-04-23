import styles from "./info.module.css"

const Info = ()=>{

    return(<div className="main-body">
        <div className={styles.pannel}>
            <h3>Bus Station</h3>
            <ul>
                <li>정류소1</li>
                <li>정류소2</li>
            </ul>
        </div>
        <div className={styles.pannel}>
            <h3>Bus Station</h3>
            <ul>
                <li>정류소1</li>
                <li>정류소2</li>
            </ul>
        </div>
        <div className={styles.pannel}>
            <h3>About Seosan Plus Project</h3>
            <div className={styles.contents}>
                <p>서산 플러스 프로젝트는 작은 실천에서 시작합니다.</p>
                <p>우리가 불편하거나 무심했던 작은 것들을 그냥 지나 치지 않고 서로가 조금씩 힘을 보태서 더 나은 서산을 만들어 갑시다.</p>

            </div>
        </div>
    </div>)
}

export default Info