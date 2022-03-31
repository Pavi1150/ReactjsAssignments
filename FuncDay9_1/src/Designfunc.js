import React, {useState} from 'react';
import './design.css'
function Designfunc(){
    
      const[onSubmitted,setOnSubmitted]=useState(false);
        const[designs,setDesigns]=useState([
            {
              id: 1,
              name: 'Bertie Yates',
              age: 29,
              image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
            },
            {
              id: 2,
              name: 'Hester Hogan',
              age: 32,
              image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
            },
            {
              id: 3,
              name: 'Larry Little',
              age: 36,
              image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
            },
            {
              id: 4,
              name: 'Sean Walsh',
              age: 34,
              image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
            },
            {
              id: 5,
              name: 'Lola Gardner',
              age: 29,
              image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
            },
          ])
    
    const handleReset=(e)=>{setOnSubmitted({onSubmitted:true})
  setOnSubmitted({id:'',name:'',age:'',image:''})}

    
        return(
          <div class="color">
            {!onSubmitted&&(
        <div class="center"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{designs.length} Birthdays Today
        <div class="border">
        {designs.map(design=><div key={design.id}>
          <br/>
          
        <div class="row">
          <div class="column">
        <img class="image"src={design.image} height="50px" width={50}/>
        </div>
        <div class="column">
        <h5 class="fsize">{design.name}</h5>
        <p class="ffsize">{design.age} Years</p>
        </div>
        
        </div>
        
        
        </div>)}
        <div>
          <button type="submit" id="button"size="100" onClick={handleReset}>Clear All</button>
          </div>
        
        </div>
        </div>)}
        
        </div>
        )
    
}
    export default Designfunc