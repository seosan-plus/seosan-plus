import styles from "./store.module.css"

const Store = ()=>{

    return(<div className={styles.main}>

        {/* cafe pannel */}
        <div className={styles.pannel}>
            <h2>cafe</h2>
            <ul>
                <li><div>cafe 1</div></li>
                <li><div>cafe 2</div></li>
                <li><div>cafe 3</div></li>
                <li><div>cafe 4</div></li>
            </ul>
        </div>

        {/* restaurant pannel */}
        <div className={styles.pannel}>
            <h2>restaurant</h2>
            <ul>
                <li><div>restaurant 1</div></li>
                <li><div>restaurant 2</div></li>
                <li><div>restaurant 3</div></li>
                <li><div>restaurant 4</div></li>
            </ul>
        </div>
    </div>)
}

export default Store