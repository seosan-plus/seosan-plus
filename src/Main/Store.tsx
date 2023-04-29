import { useEffect, useState } from "react"
import CafeCard, { CafeCardItem } from "./CafeCard"
import styles from "./store.module.css"



const Store = ()=>{

    const [tab, setTab] = useState<number>(0)
    const [cafe,setCafe] = useState<CafeCardItem>({
        cafeName: "CafeName",
        score: 4,
        bestMenuName: "Americano",
        bestMenuCost: 5000,
        openTime: "10:00",
        closeTime: "22:00",
        isOpen: true,
        address: "서산시 관아문길 1"
    })
    useEffect(()=>{
        console.log(cafe)
    },[])

    return(<div className={styles.main}>

        <ul className={styles.tab}>
            <li onClick={()=>setTab(0)} className={tab===0?styles.selTab:styles.unSelTab}><h3>Cafe</h3></li>
            <li onClick={()=>setTab(1)} className={tab===1?styles.selTab:styles.unSelTab}><h3>Restaurant</h3></li>
        </ul>

        {/* cafe pannel */}
        {tab===0 ?<div className={styles.cafe}>
            <h2>cafe</h2>
            <ul>
                <li><div><CafeCard cafe={cafe}   /></div></li>
                <li><div><CafeCard cafe={cafe}   /></div></li>
                <li><div><CafeCard cafe={cafe}   /></div></li>
                <li><div><CafeCard cafe={cafe}   /></div></li>
            </ul>
        </div>:

        <div className={styles.restaurant}>
            <h2>restaurant</h2>
            <ul>
                <li><div>restaurant 1</div></li>
                <li><div>restaurant 2</div></li>
                <li><div>restaurant 3</div></li>
                <li><div>restaurant 4</div></li>
            </ul>
        </div>}
    </div>)
}

export default Store