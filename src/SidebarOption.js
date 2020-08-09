import React from 'react'
import './SidebarOption.css'

function SidebarOption({ title, Icon, current }) {
    return (
        <div className={`sidebarOption (${current} && current)`} >
            { Icon && <Icon className="sidebarOption__icon"></Icon>}
            { Icon ?  <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOption
