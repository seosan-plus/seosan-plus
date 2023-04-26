import styles from "./cafecard.module.css"
import cafeImg from "../resource/coffee-4828393.jpg"

const CafeCard = ()=>{

    return(<div className={styles.main}>
        <img src={cafeImg} />
        <div className={styles.info}>
            <div className={styles.title}>BeanPulse</div>
        </div>
    </div>)
}

export default CafeCard