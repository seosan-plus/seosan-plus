import FuelStationItem from "./FuelStationItem"
import styles from "./info.module.css"

const Info = ()=>{

    return(<div className="main-body">
        <div className={styles.pannel}>
            <h3><span>Bus Station</span><span>more {`>`}</span></h3>
            <ul>
                <li>정류소1</li>
                <li>정류소2</li>
            </ul>
        </div>
        <div className={styles.pannel}>
            <h3><span>Fuel Station</span><span>more {`>`}</span></h3>
            <ul>
                <li>
                    <FuelStationItem stationName={'주유소 이름'} distance={1000} diesel={1500} gasoline={1600}  />
                </li>
                <li>
                    <FuelStationItem stationName={'주유소 이름'} distance={1000} diesel={1500} gasoline={1600}  />
                </li>
                <li>
                    <FuelStationItem stationName={'주유소 이름'} distance={1000} diesel={1500} gasoline={1600}  />
                </li>
            </ul>
        </div>
        <div className={styles.pannel}>
            <h3><span>About Seosan Plus Project</span></h3>
            <div className={styles.contents}>
                <p>서산 플러스 프로젝트는 작은 실천에서 시작합니다.</p>
                <p>우리가 불편하거나 무심했던 작은 것들을 그냥 지나 치지 않고 서로가 조금씩 힘을 보태서 더 나은 서산을 만들어 갑시다.</p>

            </div>
        </div>
    </div>)
}

export default Info