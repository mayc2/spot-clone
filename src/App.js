import React, { useEffect } from 'react';
import './App.css';
import Login from './Login.js';
import Player from './Player.js';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from './DataLayer.js';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token){

      dispatch({
        type: "SET_TOKEN",
        token: _token        
      });

      // Set Token w/ Spotify
      spotify.setAccessToken(_token);

      // Get User from Spotify
      spotify.getMe().then(user => {
        console.log("Person is ", user);

        dispatch({
          type: 'SET_USER',
          user
        });
      });

      // Get User's Spotify Playlists
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists
        });
      });

      // Get currently playing
      spotify.getMyCurrentPlayingTrack().then(track => {
        dispatch({
          type: "SET_TRACK",
          track
        });
      });

      // Get Discover Weekly Feed
      spotify.getPlaylist('37i9dQZEVXcXDNQIevcrnI').then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response
        });
      });

    }
  }, [dispatch, token])

  return (
    <div className="App">
      { token ? <Player spotify={spotify}/> : <Login /> 
    }
    </div>
  );
}

export default App;
