import { FuelStation } from "../store/struct"
import styles from "./fuelitem.module.css"



const FuelStationItem = ({stationName,diesel,distance,gasoline}:FuelStation)=>{

    return(<div className={styles.main}>
        <div className={styles.name}>
            {stationName}
        </div>
        <div>
            <span className={styles.diesel}>{diesel?.toLocaleString()}</span>₩ / <span className={styles.gasoline}>{gasoline?.toLocaleString()}</span>₩
        </div>
         
    </div>)
}

export default FuelStationItem