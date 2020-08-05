import React, { useEffect, useState } from 'react'
import './App.css'
import Login from './Login.js'
import Player from './Player.js'
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from "spotify-web-api-js"

const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null)

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""
    const _token = hash.access_token

    if (_token){
      setToken(_token)

      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        console.log("Person is ", user)
      })
    }

    console.log("I HAVE A TOKEN>>> ", token)
  }, [token])

  return (
    <div className="App">{ token ? 
      <Player /> : 
      <Login /> 
    }
    </div>
  );
}

export default App;
