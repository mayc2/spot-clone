import React from 'react'
import './Footer.css'
import PlayCircleOutlineSharpIcon from '@material-ui/icons/PlayCircleOutlineSharp';
import SkipPreviousSharpIcon from '@material-ui/icons/SkipPreviousSharp';
import SkipNextSharpIcon from '@material-ui/icons/SkipNextSharp';
import ShuffleSharpIcon from '@material-ui/icons/ShuffleSharp';
import RepeatSharpIcon from '@material-ui/icons/RepeatSharp';
import PlaylistPlaySharpIcon from '@material-ui/icons/PlaylistPlaySharp';
import VolumeDownSharpIcon from '@material-ui/icons/VolumeDownSharp';
import { Grid, Slider } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';

function Footer() {
    const [{ track },] = useDataLayerValue();

    console.log("TRACK ", track, " check " , track==="");

    return (
        <div className="footer">
            <div className="footer__left">
                {
                    track !== "" ? 
                    <img className="footer__albumLogo" src={track?.item.album.images[0].url} alt=""/> : 
                    <AudiotrackIcon className="footer__blankAlbum"/>
                }
                <div className="footer__songInfo">
                    <h4>{track === "" ? "No track playing" : track?.item.name}</h4>
                    <p>{track === "" ? "" : track?.item.artists.map(artist => artist.name).join(", ")}</p>
                </div>
            </div>

            <div className="footer__center">
                <ShuffleSharpIcon className="footer__green" />
                <SkipPreviousSharpIcon className="footer__icon" />
                <PlayCircleOutlineSharpIcon fontSize="large" className="footer__icon" />
                <SkipNextSharpIcon className="footer__icon" />
                <RepeatSharpIcon className="footer__green" />
            </div>

            <div className="footer__right">
                <Grid item><PlaylistPlaySharpIcon /></Grid>
                <Grid item><VolumeDownSharpIcon /></Grid>
                <Grid item><Slider /></Grid>
            </div>
        </div>
    )
}

export default Footer
