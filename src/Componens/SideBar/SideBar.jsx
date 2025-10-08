

function SideBar({HomeRef,AboutRef,resumeRef,projectRef,serviceRef,contactRef}) {
  const phoneNumber = "201225208683"
  const message = encodeURIComponent("مرحبا! أنا شاهدت موقعك وأحب التواصل معك");
   const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
  return (
    <div className='SideBar' >
      <div className="imgPortflio">
       
      </div>

      <h3>mohamed hassan </h3>
      <h6>front end devoloper</h6>

      <div className="socialMedia">
       
        <a href={whatsappLink} target="blank"><i class="fa-brands fa-whatsapp"></i></a>
        <a href="https://www.linkedin.com/in/mohamed-hassan-57209b266/?trk=li_LOL_DA_global_careers_jobsgtm_otwGeneral_res_Sep2023_dav2" target="blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/mhamedhassan109" target="blank"><i class="fa-brands fa-github"></i></a>
       
       
      
       
       
      </div>

      <div className="navbar">
        <ul>
          <li onClick={()=>HomeRef.current.scrollIntoView({behavior:"smooth"})}><i class="fa-solid fa-house"></i>home</li>
          <li onClick={()=>AboutRef.current.scrollIntoView({behavior:"smooth"})}><i class="fa-solid fa-user"></i>About</li>
          <li onClick={()=>resumeRef.current.scrollIntoView({behavior:"smooth"})}><i class="fa-solid fa-file"></i>resume</li>
          <li onClick={()=>projectRef.current.scrollIntoView({behavior:"smooth"})}><i class="fa-solid fa-photo-film"></i>Projects</li>
          <li onClick={()=>serviceRef.current.scrollIntoView({behavior:"smooth"})}><i class="fa-solid fa-server"></i>skills</li>
          <li onClick={()=>contactRef.current.scrollIntoView({behavior:"smooth"})}><i class="fa-solid fa-address-card"></i>contact</li>
        </ul>
      </div>

    </div>
  )
}

export default SideBar