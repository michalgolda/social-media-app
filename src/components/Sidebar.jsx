import React from 'react'

function Sidebar({ selectedTab, setSelectedTab }) {

  return (
    <>
<div className="flex-shrink-0 p-3 sidebar-main d-flex flex-column text-bg-dark" style={{width: "280px"}}>
    <a href="/" className="mb-3 text-white d-flex align-items-center mb-md-0 me-md-auto text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul className="mb-auto nav nav-pills flex-column">
      <li className="nav-item" onClick={()=>{setSelectedTab("Home")}}>
        <a href="#" className={`nav-link text-white ${selectedTab === 'Home' && 'active'}`} aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
         
         Home
         
        </a>
      </li>
      <li onClick={()=>{setSelectedTab("Create Post")}}>
        <a href="#" className={`nav-link text-white ${selectedTab === 'Create Post' && 'active'}`} >
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
       
          Create post
         
        </a>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="text-white d-flex align-items-center text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul className="shadow dropdown-menu dropdown-menu-dark text-small">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>    </>
  )
}

export default Sidebar
