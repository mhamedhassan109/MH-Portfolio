import React from 'react'

function Filtertion({filterBtn,setcatogry}) {
  
  return (
    <div className='Filtertion'>
       {filterBtn.map((btn)=>{
        return(
            <button onClick={()=>setcatogry(btn)} >{btn}</button>
        )
       })}
    </div>
  )
}

export default Filtertion