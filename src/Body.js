import React from 'react'
import './Body.css'
import Header from './Header.js'
import SongRow from './SongRow.js'
import { useDataLayerValue } from './DataLayer'
import PlayCircleFilledSharpIcon from '@material-ui/icons/PlayCircleFilledSharp';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp';

function Body({ spotify }) {
    const [{ discover_weekly },] = useDataLayerValue();

    return (
        <div className="body">
            <Header spotify={spotify} />
        
            <div className="body__info">
                <img src="https://newjams-images.scdn.co/v2/discover-weekly/ub_amBcaKWUlymJ1RFQkpgKLTCT8yjA9iODCkSy4N8E4w1wr8nApuHMeIdMfK18MsXCkipgfthQDgjq2hX_fvc7pmbp6eSdwLV7rp1Ok73FIs2k83CsS1v_j9TbiniidgGF3GB4mqZrzefLDS_rA-anCJo8ATG7O6B6cadoj2Aj-M2H2fth-LL4FhKo0yojhh05suS2gSh0xlYpV-M_IUaN8N-Gn71RX8G3tqNckwiBnP0P6jRqvZvlRsGKwAytH_q361pf9v4Gkvhx5BEfN52r7DIKnz9opytevdJBVqPrquVg-OdplaexY73RddjzHtqYXkmubDhJEiEp7U4v6CGGk_pKzQQK0sGUxGBa9yRE=/NzA6MzI6MTFUNDEtODAtMA==/default" alt=""/>
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledSharpIcon className="body__shuffle"/>
                    <FavoriteSharpIcon fontSize="large"/>
                    <MoreHorizSharpIcon className="body__horizon" />
                </div>
                {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))}
            </div>
            {/* tracks={discover_weekly.tracks} */}
            {/* tracks.items */}
            {/* items.track */}
            {/* track.name */}

        </div>
    )
}

export default Body
