import React from 'react'

const SideBar = () => {
    const list = [
        {
            id:1,
            icon: "",
            description:"Home",
        },
        {
            id:2,
            icon: "",
            description:"Stats"
        },
        {
            id:3,
            icon: "",
            description:"Portfoilo"
        },
        {
            id:4,
            icon: "",
            description:"Events"
        },
        {
            id:5,
            icon: "",
            description:"Profile"
        },
        {
            id:6,
            icon: "",
            description:"Settings"
        }
    ]
  return (
    <div className='sidebar'>
    <aside className=''> 
        {list?.map(x=> (
            <div className='menu_list'>
                {x?.icon} {x?.description} 
            </div>
        ))}    
    </aside>

    <div>Switch</div>
    </div>
  )
}

export default SideBar