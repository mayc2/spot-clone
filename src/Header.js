import React from 'react'
import './Header.css'
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import { Avatar } from '@material-ui/core'
import { useDataLayerValue } from './DataLayer';

function Header({ spotify }) {
    const [ { user }, ] = useDataLayerValue();

    return (
        <div className="header">
            <div className="header__left">
                <SearchSharpIcon />
                <input 
                    type="text" 
                    placeholder="Search for Artists, Songs or Podcasts" 
                />
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
