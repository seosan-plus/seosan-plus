import styles from "./cafecard.module.css"
import cafeImg from "../resource/coffee-4828393.jpg"

export interface CafeCardItem{
    cafeName:string
    score:number
    bestMenuName:string
    bestMenuCost:number
    openTime:string
    closeTime:string
    isOpen:boolean
    address:string
}

interface CafeCardItemProps {
    cafe:CafeCardItem
}

const CafeCard = ({cafe}:CafeCardItemProps)=>{


    return(<div className={styles.main}>
        <img src={cafeImg} />
        <div className={styles.info}>
            <div className={styles.title}>{cafe.cafeName}</div>
            <div className={styles.score}>☆★★★★</div>
            <div className={styles.bestMenu}>{`${cafe.bestMenuName} - ${cafe.bestMenuCost.toLocaleString()} ₩`}</div>
            <div className={styles.bestMenu}>{cafe.isOpen?"opened":"closed"} {`[ ${cafe.openTime} - ${cafe.closeTime} ]`}</div>
            <div className={styles.bestMenu}>{cafe.address}</div>
        </div>
    </div>)
}

export default CafeCard