import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption.js'
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import LibraryMusicSharpIcon from '@material-ui/icons/LibraryMusicSharp';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    const [{ playlists },  ] = useDataLayerValue();
    
    return (
        <div className="sidebar">
            <img
                className="sidebar__logo" 
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
            <SidebarOption title="Home" Icon={HomeSharpIcon} />
            <SidebarOption title="Search" Icon={SearchSharpIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicSharpIcon} />

            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>

            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} />
            ))}

        </div>
    )
}

export default Sidebar
