import React,{useState} from 'react'
import './accchild.css'
function AccChild(props){
    
        const[detailInfo,setDetailInfo]=useState(false)
        

        const handleToggle=(e)=>{setDetailInfo(!detailInfo)}
    
        return(
            <div>
                <p class="font">{props.title}
                <button class="button"onClick={handleToggle}>{detailInfo?'-':'+'}</button></p>
                {
                    detailInfo&& <div>{props.info}</div>
                }
            </div>
        )
    

}
export default AccChild