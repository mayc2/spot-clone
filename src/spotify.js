// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize"
const redirectUri = "http://localhost:3000/"
const clienId = "0c114c50e59c441f87c624b35cc415c3"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-top-read",
]

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=')
            initial[parts[0]] = decodeURIComponent(parts[1])
            return initial
    }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clienId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`