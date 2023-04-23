import axios from "axios";
import { observable, runInAction } from "mobx";
import { BoardContents } from "./struct";

const mFreeBoardContents:BoardContents[]=[]
const mNoticeBoardContents:any[]=[]

const board = observable({
    freeContents:mFreeBoardContents,
    noticeContents:mNoticeBoardContents,
    getFreeContents(){
        axios.get('http://localhost:4001/board/free/list').then((response)=>{
            console.log(response.data)
            if(response.data.returnCode === "0000"){
                runInAction(()=>{
                    this.freeContents = response.data.result as BoardContents[]
                })
            }
        })
    }
})

export default board