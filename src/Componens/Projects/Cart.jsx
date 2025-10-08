import { Link } from "react-router-dom"

function Cart({item}) {
  return (
     
    <div className='Cart'>
      
        <div className="head">
            <img src={item.img} alt='project'/>
        </div>

        <div className="foot">
            <div className="text">
                <h5>{item.name}</h5>
                <p>{item.desc}</p>
                <h6>{item.catogry}</h6>
            </div>

            <div className="icons">
                <Link target="blank" to={item.url}> <i class="fa-brands fa-github"></i></Link>
                <Link target="blank" to={item.netlify}>  <i class="fa-solid fa-paperclip"></i></Link>
              
               
            </div>
             
        </div>
    
    </div>
      
  )
}

export default Cart