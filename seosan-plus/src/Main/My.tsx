import { observer } from "mobx-react"
import styles from "./my.module.css"
import { useState } from "react"

const My = observer(()=>{

    const [isNotification,setIsNotification] = useState<string>(window.Notification.permission)

    const handleSetNotification = async()=>{
        // const registration = await navigator.serviceWorker.getRegistration();
        if(isNotification === "granted"){
            window.Notification.requestPermission((res)=>{
                res = "denied"
            })
        }else{
            window.Notification.requestPermission().then((permission)=>{
                console.log(permission)
            })
        }
    }

    return(<div className="main-body">
        <div className={styles.pannel}>
            <h3>
                My page
            </h3>
            <ul>
                <li onClick={handleSetNotification}>
                    알람 {isNotification==="granted"?"구독중":"구독하기"}
                </li>
                <li>
                    닉네임 : 닉네임
                </li>
            </ul>
        </div>
    </div>)
})

export default My