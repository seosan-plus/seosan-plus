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
    </div>)
}

export default Info